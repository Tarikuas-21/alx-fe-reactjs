// src/services/githubService.js
export async function searchUsers({ username, location, minRepos }) {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const searchQuery = query.join('+');

  const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}&per_page=30`);
  const data = await response.json();

  return data.items;
}
