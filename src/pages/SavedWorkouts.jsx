import { useEffect, useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import WorkoutCard from "../components/WorkoutCard";

const SavedWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedWorkouts")) || [];
    setSavedWorkouts(saved);
  }, []);

  const removeWorkout = (workoutName) => {
    const updatedWorkouts = savedWorkouts.filter((workout) => workout.name !== workoutName);
    setSavedWorkouts(updatedWorkouts);
    localStorage.setItem("savedWorkouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-rainbow mb-6">
        <FaDumbbell className="inline mr-2" /> Saved Workouts
      </h1>

      {savedWorkouts.length === 0 ? (
        <p className="text-center text-gray-400">No saved workouts yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.name}
              workout={workout}
              isSaved={true}
              toggleSaveWorkout={() => removeWorkout(workout.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedWorkoutsPage;
