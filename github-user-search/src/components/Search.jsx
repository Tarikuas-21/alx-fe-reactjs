// src/components/Search.jsx
import { useState } from 'react';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Build GitHub search query
    const queryParts = [];
    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    const query = queryParts.join('+');

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}&per_page=30`);
      const data = await res.json();
      setResults(data.items || []);
    } catch (err) {
      console.error('Search failed:', err);
      setResults([]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
      <form onSubmit={handleSearch} className="space-y-4">
        <h2 className="text-xl font-semibold">Advanced GitHub User Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {results.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
              <h3 className="text-lg font-bold">{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
