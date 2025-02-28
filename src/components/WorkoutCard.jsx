import { FaHeart, FaRegHeart } from "react-icons/fa";

const WorkoutCard = ({ workout, isSaved, toggleSaveWorkout }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
      <h2 className="text-xl font-semibold text-green-400">{workout.name}</h2>
      <p className="text-gray-400 mt-2">
        <strong>Muscle:</strong> {workout.muscle}
      </p>
      <p className="text-gray-400 mt-1">
        <strong>Type:</strong> {workout.type}
      </p>
      <p className="text-gray-400 mt-1">
        <strong>Equipment:</strong> {workout.equipment || "None"}
      </p>
      <p className="text-gray-400 mt-1">
        <strong>Difficulty:</strong> {workout.difficulty}
      </p>
      <p className="text-gray-300 mt-2">{workout.instructions}</p>

      {/* Кнопка Like/Unlike */}
      <button
        className="absolute top-2 right-2 text-red-500 text-2xl"
        onClick={() => toggleSaveWorkout(workout.name)}
      >
        {isSaved ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default WorkoutCard;
