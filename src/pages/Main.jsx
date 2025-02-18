import Header from "../layout/Header";
import VanDarkholme from "../assets/vandarkholme.png";

function Main() {
  return (
    <div>
      <Header />

      <div className="container">

        <div className="flex flex-row items-center p-6 max-w-[40rem] mx-auto">
          <div>
            <p className="text-justify text-lg pb-2">
            Fucking slaves, get your ass back to gum!
            </p>
            <h2 className="text-md font-bold mb-4 text-right text-gray-400">- Van Darkholme</h2>
          </div>
          <img
            src={VanDarkholme}
            alt="Van Darkholme"
            className="w-48 h-48 object-contain mr-6"
          />
        </div>
      </div>

    </div>
  );
}

export default Main;
