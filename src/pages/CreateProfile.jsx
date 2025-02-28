import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";
import api from "../axios";
import useUser from "../context/UserContext";

const CreateProfile = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    sex: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const input = e.target;
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    setError("");

    try {
      await api.post("/profile/create", formData);
      const profileResponse = await api.get("/profile/get");

      setUser({
        username: profileResponse.data.prefix,
        level: profileResponse.data.level,
        height: profileResponse.data.height,
        weight: profileResponse.data.weight,
        age: profileResponse.data.age,
        sex: profileResponse.data.sex,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-rainbow">
          Create Profile
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <ProfileForm
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default CreateProfile;
