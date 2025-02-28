import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts }) => {
  if (workouts.length === 0) {
    return <p className="text-center text-gray-400">No saved workouts yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
