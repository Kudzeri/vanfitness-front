import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";
import Cookies from "js-cookie";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Регистрация компонентов для Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DailyWorkoutTracker = () => {
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState({});
  const navigate = useNavigate(); // Для навигации

  useEffect(() => {
    // Загружаем сохраненные тренировки из localStorage
    const saved = JSON.parse(localStorage.getItem("savedWorkouts")) || [];
    setSavedWorkouts(saved);

    // Загружаем статистику выполнения из куки
    const stats = Cookies.get("workoutStats");
    setCompletedWorkouts(stats ? JSON.parse(stats) : {});
  }, []);

  const toggleWorkoutCompletion = (workoutName) => {
    const today = new Date().toISOString().split("T")[0]; // Текущая дата (YYYY-MM-DD)
    const updatedStats = { ...completedWorkouts };

    if (!updatedStats[today]) {
      updatedStats[today] = {};
    }

    updatedStats[today][workoutName] = !updatedStats[today][workoutName];

    setCompletedWorkouts(updatedStats);
    Cookies.set("workoutStats", JSON.stringify(updatedStats), { expires: 7 }); // Сохраняем в куки на 7 дней
  };

  // Генерация данных для графика
  const generateChartData = () => {
    const today = new Date();
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      return date.toISOString().split("T")[0];
    }).reverse();

    const labels = last7Days;
    const data = last7Days.map((date) => {
      const workouts = completedWorkouts[date] || {};
      return Object.values(workouts).filter((completed) => completed).length;
    });

    return {
      labels,
      datasets: [
        {
          label: "Completed Workouts",
          data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-rainbow mb-6">
        Daily Workout Tracker
      </h1>

      {savedWorkouts.length === 0 ? (
        <p className="text-center text-gray-400">No saved workouts yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedWorkouts.map((workout) => {
            const today = new Date().toISOString().split("T")[0];
            const isCompleted = completedWorkouts[today]?.[workout.name] || false;

            return (
              <div key={workout.name} className="relative">
                <WorkoutCard workout={workout} isSaved={true} toggleSaveWorkout={() => {}} />
                <button
                  className={`absolute top-2 right-2 px-4 py-2 rounded ${
                    isCompleted ? "bg-green-500" : "bg-gray-700"
                  }`}
                  onClick={() => toggleWorkoutCompletion(workout.name)}
                >
                  {isCompleted ? "Completed" : "Mark as Done"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Workout Statistics (Last 7 Days)</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <Bar data={generateChartData()} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
      </div>

      {/* Кнопка перехода в планировщик */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/workout-planner")}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-600 transition"
        >
          Go to Workout Planner
        </button>
      </div>
    </div>
  );
};

export default DailyWorkoutTracker;