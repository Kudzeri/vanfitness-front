import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios";
import PostForm from "../components/PostForm";

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const fetchPosts = () => navigate("/posts"); // Обновляет список и возвращает

  if (loading) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Post</h1>
      <PostForm fetchPosts={fetchPosts} selectedPost={post} setSelectedPost={setPost} />
    </div>
  );
};

export default EditPostPage;
