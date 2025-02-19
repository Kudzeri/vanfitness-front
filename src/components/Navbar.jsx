import { NavLink } from "react-router-dom";

const Navbar = ({ isMobile, onLinkClick }) => {
  return (
    <nav className={isMobile ? "px-4 py-3" : ""}>
      <ul
        className={`flex gap-8 text-lg ${
          isMobile ? "flex-col items-start" : "flex-row"
        }`}
      >
        <li>
          <NavLink
            to="/"
            onClick={onLinkClick}
            className="cursor-pointer text-gray-300 hover:text-yellow-400"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={onLinkClick}
            className="cursor-pointer text-gray-300 hover:text-yellow-400"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
