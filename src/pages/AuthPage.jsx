import { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const AuthPage = ({ type }) => {
  const isLogin = type === "login";
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-rainbow">
          {isLogin ? "Login" : "Register"}
        </h2>
        <AuthForm
          isLogin={isLogin}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
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
