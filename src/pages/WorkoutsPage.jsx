import { useEffect, useState } from "react";
import axios from "axios";
import { FaDumbbell } from "react-icons/fa";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutFilters from "../components/WorkoutFilters";
import Pagination from "../components/Pagination";

const API_KEY = "78mvc0PXM70H6RTsPuGIzw==68qZGFm1WTp1Qt10";

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ type: "", muscle: "", difficulty: "" });
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const pageSize = 5;

  useEffect(() => {
    const fetchWorkouts = async () => {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        type: filters.type,
        muscle: filters.muscle,
        difficulty: filters.difficulty,
        offset: (page - 1) * pageSize,
      });

      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?${params}`, {
          headers: { "X-Api-Key": API_KEY },
        });

        setWorkouts(response.data);
      } catch (err) {
        setError("Failed to load workouts");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
    loadSavedWorkouts();
  }, [page, filters]);

  const loadSavedWorkouts = () => {
    const saved = JSON.parse(localStorage.getItem("savedWorkouts")) || [];
    setSavedWorkouts(saved);
  };

  const isWorkoutSaved = (workout) => {
    return savedWorkouts.some((saved) => saved.name === workout.name);
  };

  const toggleSaveWorkout = (workout) => {
    let updatedSaved = [...savedWorkouts];

    if (isWorkoutSaved(workout)) {
      updatedSaved = updatedSaved.filter((saved) => saved.name !== workout.name);
    } else {
      updatedSaved.push(workout);
    }

    setSavedWorkouts(updatedSaved);
    localStorage.setItem("savedWorkouts", JSON.stringify(updatedSaved));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-rainbow mb-6">
        <FaDumbbell className="inline mr-2" /> Workout List
      </h1>

      <WorkoutFilters filters={filters} handleFilterChange={(e) => setFilters({ ...filters, [e.target.name]: e.target.value })} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.name}
            workout={workout}
            isSaved={isWorkoutSaved(workout)}
            toggleSaveWorkout={() => toggleSaveWorkout(workout)}
          />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} hasNextPage={workouts.length === pageSize} />
    </div>
  );
};

export default WorkoutsPage;
