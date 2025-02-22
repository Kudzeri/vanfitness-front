import { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import api from "../axios";

const AuthPage = ({ type }) => {
  const isLogin = type === "login";
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let input = e.target;
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register"; 
      const response = await api.post(endpoint, {
        username: formData.username,
        password: formData.password,
      });

      console.log("Success:", response.data);

      if (isLogin) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/login"; 
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-rainbow">
          {isLogin ? "Login" : "Register"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <AuthForm
          isLogin={isLogin}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {loading && <p className="text-center text-gray-400 mt-2">Loading...</p>}

        <div className="text-center mt-4">
          <NavLink
            to={isLogin ? "/register" : "/login"}
            className="text-yellow-400 hover:text-yellow-300"
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
