import { FaDumbbell, FaFire } from "react-icons/fa";

const TrainingStats = ({ workoutsCompleted, caloriesBurned }) => {
  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
        <FaDumbbell className="text-blue-400" /> Your Training Stats
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-yellow-400" />
          <span className="font-semibold">Workouts Completed:</span>{" "}
          <span className="text-gray-300">{workoutsCompleted}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaFire className="text-red-400" />
          <span className="font-semibold">Calories Burned:</span>{" "}
          <span className="text-gray-300">{caloriesBurned}</span>
        </div>
      </div>
    </div>
  );
};

export default TrainingStats;
