import { useState } from "react";
import InputField from "./InputField";

const AuthForm = ({ isLogin, formData = {}, handleSubmit, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.username || !formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password || !formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!isLogin) {
      if (!formData.confirmPassword || !formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitWithValidation = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmitWithValidation} className="flex flex-col" noValidate>
      <InputField
        label="Username"
        type="text"
        name="username"
        value={formData.username || ""}
        onChange={handleChange}
      />
      {errors.username && <p className="text-red-500 text-sm mb-2">{errors.username}</p>}

      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password || ""}
        onChange={handleChange}
      />
      {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

      {!isLogin && (
        <>
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword || ""}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-2">{errors.confirmPassword}</p>
          )}
        </>
      )}

    </form>
  );
};

export default AuthForm;
