import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md ">
      <div className="flex justify-between items-center h-20 container mx-auto">
        <Link to={"/"}>
          <img src="/udemelogo.png" alt="website-logo" width={150} />
        </Link>
        <ul className=" hidden md:flex gap-5 uppercase font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#contact-me">Contact Me</Link>
          </li>
        </ul>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
      {menuOpen ? (
        <div className="flex flex-col space-y-3 font-semibold mt-2 text-center uppercase text-base md:hidden">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>
      ) : null}
      {/* {menuOpen ? (
        <div className="flex flex-col space-y-3 font-bold mt-4 text-4xl text-red-600 items-center  md:hidden absolute">
          <Link to={"/"} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to={"/cart"} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </div>
      ) : null} */}
    </div>
  );
};
export default Header;
