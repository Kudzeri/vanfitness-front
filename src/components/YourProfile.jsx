import {
    FaUser,
    FaDumbbell,
    FaRulerVertical,
    FaWeight,
    FaBirthdayCake,
    FaVenusMars,
  } from "react-icons/fa";
  
  const YourProfile = ({ prefix, level, height, weight, age, sex }) => {
    return (
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
          <FaUser className="text-blue-400" /> Your Profile
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <FaUser className="text-yellow-400" />
            <span className="font-semibold">Prefix:</span> {prefix}
          </div>
          <div className="flex items-center gap-2">
            <FaDumbbell className="text-green-400" />
            <span className="font-semibold">Level:</span> {level}
          </div>
          <div className="flex items-center gap-2">
            <FaRulerVertical className="text-indigo-400" />
            <span className="font-semibold">Height:</span> {height} cm
          </div>
          <div className="flex items-center gap-2">
            <FaWeight className="text-red-400" />
            <span className="font-semibold">Weight:</span> {weight} kg
          </div>
          <div className="flex items-center gap-2">
            <FaBirthdayCake className="text-pink-400" />
            <span className="font-semibold">Age:</span> {age} years
          </div>
          <div className="flex items-center gap-2">
            <FaVenusMars className="text-purple-400" />
            <span className="font-semibold">Sex:</span> {sex}
          </div>
        </div>
      </div>
    );
  };
  
  export default YourProfile;
  