import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";

const PostsPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    fetchPosts();
  }, [navigate]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div>
          <div className="flex justify-center my-6">
            <button
              className="bg-green-500 px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
              onClick={() => navigate("/posts/new")}
            >
              ➕ Create Post
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition"
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-400">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
