const InputField = ({ label, type, name, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="mb-2">{label}:</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 rounded bg-gray-700 text-white"
      required
    />
  </div>
);

export default InputField;
