import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";

const PostForm = ({ fetchPosts, selectedPost, setSelectedPost }) => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPost) {
      setFormData({ title: selectedPost.title, body: selectedPost.body });
    } else {
      setFormData({ title: "", body: "" });
    }
  }, [selectedPost]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (selectedPost) {
        await api.put(`/posts/${selectedPost.id}`, formData);
      } else {
        await api.post("/posts", formData);
      }
      fetchPosts();
      setSelectedPost(null);
      setFormData({ title: "", body: "" });
      navigate("/posts"); // ✅ Перенаправление на страницу со всеми постами
    } catch (err) {
      setError(err.response?.data?.error || "Error submitting post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{selectedPost ? "Edit Post" : "Create Post"}</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Body"
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 px-4 py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Saving..." : selectedPost ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
