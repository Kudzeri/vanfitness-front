import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarStyles.css"; // Импорт кастомных стилей
import Cookies from "js-cookie";

const WorkoutPlanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutSchedule, setWorkoutSchedule] = useState({});
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState("");

  useEffect(() => {
    // Загружаем сохраненные тренировки из localStorage
    const saved = JSON.parse(localStorage.getItem("savedWorkouts")) || [];
    setSavedWorkouts(saved);

    // Загружаем расписание тренировок из куки
    const schedule = Cookies.get("workoutSchedule");
    setWorkoutSchedule(schedule ? JSON.parse(schedule) : {});
  }, []);

  const handleAddWorkout = () => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    const updatedSchedule = { ...workoutSchedule };

    if (!updatedSchedule[dateKey]) {
      updatedSchedule[dateKey] = [];
    }

    if (selectedWorkout && !updatedSchedule[dateKey].includes(selectedWorkout)) {
      updatedSchedule[dateKey].push(selectedWorkout);
    }

    setWorkoutSchedule(updatedSchedule);
    Cookies.set("workoutSchedule", JSON.stringify(updatedSchedule), { expires: 30 }); // Сохраняем расписание на 30 дней
    setSelectedWorkout("");
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-750 text-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
        Workout Planner
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Календарь */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <Calendar
            onChange={handleDateClick}
            value={selectedDate}
            tileContent={({ date }) => {
              const dateKey = date.toISOString().split("T")[0];
              return workoutSchedule[dateKey] ? (
                <div className="text-xs text-yellow-400 mt-1">
                  {workoutSchedule[dateKey].length} workout(s)
                </div>
              ) : null;
            }}
          />
        </div>

        {/* Панель добавления тренировок */}
        <div className="flex-1 bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Add Workout</h2>
          <p className="mb-2">
            Selected Date:{" "}
            <span className="text-yellow-400">
              {selectedDate.toDateString()}
            </span>
          </p>
          <select
            className="w-full p-2 mb-4 bg-gray-800 text-gray-200 rounded"
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
          >
            <option value="">Select a workout</option>
            {savedWorkouts.map((workout) => (
              <option key={workout.name} value={workout.name}>
                {workout.name}
              </option>
            ))}
          </select>
          <button
            className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
            onClick={handleAddWorkout}
          >
            Add Workout
          </button>

          {/* Список тренировок на выбранную дату */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Workouts on this day:</h3>
            <ul className="list-disc list-inside">
              {(workoutSchedule[selectedDate.toISOString().split("T")[0]] || []).map(
                (workout, index) => (
                  <li key={index} className="text-gray-300">
                    {workout}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanner;