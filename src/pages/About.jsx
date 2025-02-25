import Brotherhood from "../assets/brotherhood.jpg";
import { useNavigate } from "react-router-dom";
import { FaFire, FaDumbbell, FaMusic, FaTrophy, FaUsers } from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const token = localStorage.getItem("token");
    token ? navigate("/dashboard") : navigate("/login");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-rainbow">
          About Van Darkholme Fitness Tracker
        </h1>

        <div className="flex justify-center">
          <img
            src={Brotherhood}
            alt="Brotherhood"
            className="w-full max-w-md md:max-w-lg object-contain rounded-lg shadow-md mb-4"
          />
        </div>

        <p className="text-lg text-justify mb-6">
          Welcome to{" "}
          <span className="text-rainbow font-bold">
            Van Darkholme Fitness Tracker
          </span>
          , where discipline, pain, and gains come together in the name of true
          fitness! Inspired by the legendary{" "}
          <span className="text-gray-300">Van Darkholme</span>, this app helps
          you stay motivated, track your workouts, and embrace the philosophy of
          strength.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mb-6">
          <div className="flex items-center gap-3">
            <FaFire className="text-red-400 text-2xl" />
            <span>Hardcore motivation with legendary quotes</span>
          </div>
          <div className="flex items-center gap-3">
            <FaDumbbell className="text-yellow-400 text-2xl" />
            <span>Discipline-focused workout tracking</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMusic className="text-blue-400 text-2xl" />
            <span>Custom audio motivation from the master</span>
          </div>
          <div className="flex items-center gap-3">
            <FaTrophy className="text-green-400 text-2xl" />
            <span>Achievements to keep you pushing harder</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Join the Brotherhood!</h2>
        <p className="text-lg text-center">
          Whether you're lifting, running, or pushing yourself beyond limits,
          remember:
          <span className="font-bold text-rainbow"> "Discipline is everything!"</span>
        </p>

        <div className="text-center mt-6">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-transform transform hover:scale-105 duration-200 flex items-center gap-2 justify-center mx-auto"
            onClick={handleLogin}
          >
            <FaUsers className="text-xl" /> Start Training Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
