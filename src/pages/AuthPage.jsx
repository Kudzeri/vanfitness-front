import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white mb-4"
            required
          />
          <label className="mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white mb-4"
            required
          />
          {!isLogin && (
            <>
              <label className="mb-2">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                className="p-2 rounded bg-gray-700 text-white mb-4"
                required
              />
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md font-bold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="text-center mt-4">
          <NavLink
            to={isLogin ? "/register" : "/login"}
            className="text-yellow-400 hover:text-yellow-300"
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;