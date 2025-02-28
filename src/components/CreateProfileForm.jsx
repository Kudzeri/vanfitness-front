import { useState } from "react";
import Select from "react-select";
import InputNumber from "rc-input-number";
import "rc-input-number/assets/index.css";
import { FaVenusMars } from "react-icons/fa";
import Switch from "react-switch";

const ProfileForm = ({ formData, setFormData, handleSubmit }) => {
  const [gender, setGender] = useState(formData.sex === "Male");

  const handleGenderChange = (checked) => {
    setGender(checked);
    setFormData({ ...formData, sex: checked ? "Male" : "Female" });
  };

  const heightOptions = Array.from({ length: 101 }, (_, i) => ({
    value: 140 + i,
    label: `${140 + i} cm`,
  }));

  const weightOptions = Array.from({ length: 101 }, (_, i) => ({
    value: 40 + i,
    label: `${40 + i} kg`,
  }));

  const ageOptions = Array.from({ length: 63 }, (_, i) => ({
    value: 18 + i,
    label: `${18 + i} years`,
  }));

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-rainbow">
        Customize Your Profile
      </h2>

      {/* Height */}
      <div className="mb-4">
        <label className="block text-gray-400 mb-2">Height</label>
        <Select
          options={heightOptions}
          defaultValue={heightOptions.find((opt) => opt.value === formData.height)}
          onChange={(option) => setFormData({ ...formData, height: option.value })}
          className="text-black"
        />
      </div>

      {/* Weight */}
      <div className="mb-4">
        <label className="block text-gray-400 mb-2">Weight</label>
        <Select
          options={weightOptions}
          defaultValue={weightOptions.find((opt) => opt.value === formData.weight)}
          onChange={(option) => setFormData({ ...formData, weight: option.value })}
          className="text-black"
        />
      </div>

      {/* Age */}
      <div className="mb-4">
        <label className="block text-gray-400 mb-2">Age</label>
        <Select
          options={ageOptions}
          defaultValue={ageOptions.find((opt) => opt.value === formData.age)}
          onChange={(option) => setFormData({ ...formData, age: option.value })}
          className="text-black"
        />
      </div>

      {/* Gender Toggle */}
      <div className="mb-4 flex items-center justify-between bg-gray-700 p-3 rounded-lg">
        <span className="text-gray-400 flex items-center gap-2">
          <FaVenusMars className="text-pink-400" />
          Gender:
        </span>
        <Switch
          checked={gender}
          onChange={handleGenderChange}
          onColor="#4CAF50"
          offColor="#FF4081"
          checkedIcon={<div className="text-white text-sm pl-2">♂</div>}
          uncheckedIcon={<div className="text-white text-sm pr-2">♀</div>}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
          className="bg-red-500 px-6 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition-transform transform hover:scale-105 duration-200"
          onClick={handleSubmit}
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
