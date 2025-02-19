import VanDarkholme from "../assets/vandarkholme.png";
import { motion } from "framer-motion";

function Main() {
  return (
    <div>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-rainbow mb-6">Welcome to Gachi Fitness</h1>
        <motion.img
          src={VanDarkholme}
          alt="Van Darkholme"
          className="w-48 h-48 object-contain mx-auto mb-4"
          animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
        <p className="text-lg text-justify max-w-2xl mx-auto pb-2">
          Fucking slaves, get your ass back to gym!
        </p>
        <h2 className="text-md font-bold mb-4 text-gray-400">- Van Darkholme</h2>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800 rounded-md text-center">
            <h3 className="text-xl font-bold mb-2">🔥 Hardcore Motivation</h3>
            <p>Listen to Van's quotes and stay disciplined.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md text-center">
            <h3 className="text-xl font-bold mb-2">💪 Track Your Progress</h3>
            <p>Record your workouts and never skip gym day.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md text-center">
            <h3 className="text-xl font-bold mb-2">🎯 Achieve New Goals</h3>
            <p>Unlock achievements and push your limits.</p>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-500 px-6 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition">
            Start Training Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;