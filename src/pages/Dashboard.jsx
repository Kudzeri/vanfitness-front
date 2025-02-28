import useUser from "../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GachiMotivation from "../components/GachiMotivation";
import YourProfile from "../components/YourProfile";
import TrainingStats from "../components/TrainingStats";

function Dashboard() {
  const {
    username,
    prefix,
    level,
    height,
    weight,
    age,
    sex,
    token,
    isLoading,
    setUser,
  } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [token, navigate, isLoading]);

  if (isLoading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!token) {
    return (
      <div className="text-center text-xl">Please relogin. Redirecting...</div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/1657851628476889925/63F85D8D393B38EFE40D87A750E9B51918D4C55F/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-rainbow mb-4"
        />
        <h1 className="text-3xl font-bold text-center text-rainbow">
          Welcome, {username || "Gachimuchi Enthusiast"}!
        </h1>
      </div>

      <YourProfile
        prefix={prefix}
        level={level}
        height={height}
        weight={weight}
        age={age}
        sex={sex}
      />

      <TrainingStats workoutsCompleted={12} caloriesBurned={4500} />

      <GachiMotivation level={level} />

      <div className="text-center mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-transform transform hover:scale-105 duration-200"
        >
          Logout
        </button>
        <button
          onClick={() => navigate("/edit-profile")}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-200 ml-4"
        >Edit profile</button>
      </div>
    </div>
  );
}

export default Dashboard;
