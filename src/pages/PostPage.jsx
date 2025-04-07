import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios";
import useUser from "../context/UserContext";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!isLoading && user?.my_id) {
      // ✅ Проверяем, загружен ли user.id
      console.log("User ID:", user.my_id);
      console.log("Post User ID:", post?.user_id);
    }
  }, [user, post, isLoading]);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await api.get(`/posts/${id}`);
      setPost(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Post not found");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    setDeleting(true);
    try {
      await api.delete(`/posts/${id}`);
      navigate("/posts"); // ✅ Перенаправляем после удаления
    } catch (err) {
      setError(err.response?.data?.error || "Error deleting post");
    } finally {
      setDeleting(false);
    }
  };

  if (isLoading || loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 flex items-center justify-center">
      {error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl max-w-2xl w-full">
          <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
          <p className="text-gray-300 text-lg">{post.body}</p>

          {post && user?.my_id === post.user_id && (
            <div className="mt-6 flex justify-between">
              <button
                className="bg-yellow-500 px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-transform transform hover:scale-105"
                onClick={() => navigate(`/posts/edit/${post.id}`)}
              >
                ✏️ Edit
              </button>
              <button
                className="bg-red-500 px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-transform transform hover:scale-105"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "🗑 Delete"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostPage;
