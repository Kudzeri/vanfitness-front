import Brotherhood from "../assets/brotherhood.jpg";

function About() {
  return (
    <div>
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-rainbow">
          About Van Darkholme Fitness Tracker
        </h1>
        <img
          src={Brotherhood}
          alt="Brotherhood"
          className="w-120 h-64 object-contain mx-auto mb-4"
        />
        <p className="text-lg text-justify mb-4">
          Welcome to <span className="text-rainbow font-bold">Van Darkholme Fitness Tracker</span>,
          where discipline, pain, and gains come together in the name of true fitness!
          Inspired by the legendary <span className="text-gray-300">Van Darkholme</span>,
          this app helps you stay motivated, track your workouts, and embrace the philosophy of strength.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">Why Choose Gachi Fitness Tracker?</h2>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>🔥 Hardcore motivation with legendary quotes</li>
          <li>💪 Discipline-focused workout tracking</li>
          <li>🎵 Custom audio motivation from the master</li>
          <li>🎯 Achievements to keep you pushing harder</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-2">Join the Brotherhood!</h2>
        <p className="text-lg">
          Whether you're lifting, running, or pushing yourself beyond limits, remember:
          <span className="font-bold text-rainbow"> "Discipline is everything!"</span>
        </p>
        <div className="text-center mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Start Training Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
