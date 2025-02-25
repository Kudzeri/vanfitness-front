import { FaFire, FaDumbbell, FaMusic, FaTrophy } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6">
      <h2 className="text-3xl font-bold text-center text-rainbow mb-6">
        Why Choose Gachi Fitness?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
          <FaFire className="text-red-400 text-3xl" />
          <span className="text-lg">🔥 Hardcore Motivation</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
          <FaDumbbell className="text-yellow-400 text-3xl" />
          <span className="text-lg">💪 Track Your Progress</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
          <FaMusic className="text-blue-400 text-3xl" />
          <span className="text-lg">🎵 Custom Audio Motivation</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
          <FaTrophy className="text-green-400 text-3xl" />
          <span className="text-lg">🏆 Achievements System</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
