import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-lg bg-slate-500 font-roboto text-red-900">
      <div className="flex justify-between items-center h-20 container mx-auto">
        <Link to={"/"}>
          <img src="/udemelogo.png" alt="website-logo" width={130} />
        </Link>
        <ul className=" hidden md:flex gap-5 uppercase font-semibold text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact Me
            </ScrollLink>
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
          <ul className="flex flex-col gap-3">
            <li className="shadow-md">
              <Link to="/">Home</Link>
            </li>
            <li className="shadow-md">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
export default Header;
