import { Link } from "react-router-dom";

const GachiMotivation = ({ level }) => {
  let message;

  switch (level) {
    case "1":
      message =
        "Welcome to the Gachi Arena, Fresh Boy! Today you begin your journey—lift those dreams and flex your raw potential!";
      break;
    case "2":
      message =
        "Step it up, bro! Your muscles are warming up. Time to pump harder and let your gains do the talking!";
      break;
    case "3":
      message =
        "Halfway to glory, champ! Your iron game is strong and the gym gods are cheering. Keep those reps coming!";
      break;
    case "4":
      message =
        "Almost legendary, warrior! Your dedication is as fierce as your biceps. Smash through limits and break the mold!";
      break;
    case "5":
      message =
        "Gachi Master unlocked! You're the embodiment of strength and humor. Flex so hard that even legends take notice!";
      break;
    default:
      message =
        "Keep pushing, brother! Every rep brings you closer to greatness!";
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">What’s Next?</h2>
      <p className="text-lg">
        {message}{" "}
        <span className="font-bold text-rainbow">
          {level === 5 ? "Unleash your inner beast!" : "More Pain, More Gain!"}
        </span>
      </p>
  
    </div>
  );
};

export default GachiMotivation;
