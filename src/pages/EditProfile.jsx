import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";
import api from "../axios";
import useUser from "../context/UserContext";

const EditProfile = () => {
  const { setUser, user } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    sex: "",
    level: "1",
    prefix: "Fresh Boy"
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }

    // Загружаем текущий профиль
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profile/get");
        setFormData({
          height: response.data.height,
          weight: response.data.weight,
          age: response.data.age,
          sex: response.data.sex,
        });
      } catch (err) {
        setError("Не удалось загрузить профиль");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      await api.put("/profile/update", formData);
      setUser({ ...user, ...formData }); // Обновляем контекст
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка при обновлении профиля");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-rainbow">
          Edit profile
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <ProfileForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default EditProfile;
