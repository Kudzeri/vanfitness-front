import Navbar from "../components/Navbar"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 px-7 bg-gray-800 h-12">
        <div className="flex gap-8 items-center">
            <div className="flex items-center">
              <img src="/src/assets/logo.png" className="w-10 h-10 mr-2" alt="logo" />
              <h1 className="cursor-default text-2xl text-rainbow">Vanfit</h1>
            </div>

            <Navbar />
        </div>

        <div className="flex text-lg">
          <a className="text-yellow-400 hover:text-yellow-300 cursor-pointer">Login</a>
        </div>
    </div>
  )
}

export default Header