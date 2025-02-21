import { useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gray-800">
      <div className="mx-auto flex h-16 items-center justify-between px-4 py-3 md:px-7">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <img
              src="/src/assets/logo.png"
              className="h-10 w-10 mr-2"
              alt="logo"
            />
            <h1 className="cursor-default text-2xl text-rainbow">Vanfit</h1>
          </div>

          <div className="hidden md:flex">
            <Navbar />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to={"/login"} className="text-yellow-400 hover:text-yellow-300 cursor-pointer text-lg" >Login</NavLink>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute w-full bg-gray-800 md:hidden">
          <Navbar isMobile onLinkClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
