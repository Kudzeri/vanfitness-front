import HeroSection from "../components/Main/HeroSection";
import MotivationCarousel from "../components/Main/MotivationCarousel";
import Testimonials from "../components/Main/Testimonials";
import FeaturesSection from "../components/Main/FeaturesSection";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const handleLogin = () => {
    const token = localStorage.getItem("token");
    token ? navigate("/dashboard") : navigate("/login");
  };

  return (
    <div>
      <HeroSection />
      <MotivationCarousel />
      <FeaturesSection />
      <Testimonials />

      <div className="text-center my-10">
        <button
          className="bg-red-500 px-6 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition-transform transform hover:scale-105 duration-200"
          onClick={handleLogin}
        >
          Start Training Now
        </button>
      </div>
    </div>
  );
}

export default Main;
