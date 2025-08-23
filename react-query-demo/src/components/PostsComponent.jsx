import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,       // fresh for 5 seconds
    cacheTime: 1000 * 60,  // cached for 1 minute
    refetchOnWindowFocus: true,  // ✅ refetch when tab regains focus
    keepPreviousData: true,      // ✅ keep showing old data while refetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      <button
        onClick={() => refetch()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Refetch Posts {isFetching && "(Fetching...)"}
      </button>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white rounded shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
