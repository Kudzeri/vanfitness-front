import InputField from "./InputField";

const AuthForm = ({ isLogin, formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="flex flex-col">
    <InputField
      label="Email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    <InputField
      label="Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
    {!isLogin && (
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        onChange={handleChange}
      />
    )}
    <button
      type="submit"
      className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md font-bold"
    >
      {isLogin ? "Login" : "Register"}
    </button>
  </form>
);

export default AuthForm;
