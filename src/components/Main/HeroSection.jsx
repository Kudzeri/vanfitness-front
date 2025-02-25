import { motion } from "framer-motion";
import VanDarkholme from "../../assets/vandarkholme.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white text-rainbow drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Gachi Fitness
      </motion.h1>

      <motion.img
        src={VanDarkholme}
        alt="Van Darkholme"
        className="w-48 h-48 object-contain mx-auto my-6"
        animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />

      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        "Fucking slaves, get your ass back to gym!"
      </p>
      <h2 className="text-md font-bold text-gray-400">- Van Darkholme</h2>
    </div>
  );
};

export default HeroSection;
