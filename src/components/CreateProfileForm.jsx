import InputField from "./InputField";

const CreateProfileForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
      <InputField
        label="Height"
        type="number"
        name="height"
        value={formData.height || ""}
        onChange={handleChange}
      />
      <InputField
        label="Weight"
        type="number"
        name="weight"
        value={formData.weight || ""}
        onChange={handleChange}
      />
      <InputField
        label="Age"
        type="number"
        name="age"
        value={formData.age || ""}
        onChange={handleChange}
      />
      <InputField
        label="Sex"
        type="text"
        name="sex"
        value={formData.sex || ""}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4 transition-transform transform hover:scale-105 duration-200"
      >
        {loading ? "Loading..." : "Create Profile"}
      </button>
    </form>
  );
};

export default CreateProfileForm;
