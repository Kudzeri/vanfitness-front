import useUser from "../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { username, isLoading, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !username) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [username, navigate, isLoading]);

  if (isLoading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!username) {
    return <div className="text-center text-xl">Please relogin. Redirecting...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null); 
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-rainbow">
        Welcome, {username || "Gachimuchi Enthusiast"}!
      </h1>
      <p className="text-lg text-justify mb-4">
        You've entered the <span className="text-rainbow font-bold">Gachi Fitness Dashboard</span>.
        Here, you can track your progress, manage your workouts, and push your limits beyond imagination.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Your Training Stats</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>🏋️‍♂️ Workouts Completed: <span className="text-gray-300">12</span></li>
        <li>🔥 Calories Burned: <span className="text-gray-300">4500</span></li>
        <li>💪 Discipline Level: <span className="text-gray-300">S+ Tier</span></li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-2">What’s Next?</h2>
      <p className="text-lg">
        Keep going, brother! Your journey to true discipline is just beginning.
        Push harder, lift heavier, and always remember:
        <span className="font-bold text-rainbow"> "More Pain, More Gain!"</span>
      </p>
      <div className="text-center mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-transform transform hover:scale-105 duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
