import {
  AiFillHome,
  AiFillProject,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineMail,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-6 px-12 shadow-lg">
      {/* Flex container for the header elements */}
      <div className="flex justify-between items-center w-full">
        {/* Left Logo and Name - Aligned to the far left */}
        <div className="flex items-center space-x-4">
          {/* Logo Box */}
          <div className="w-6 h-6 bg-white"></div>
          {/* Logo Text */}
          <span className="text-2xl font-bold">VH</span>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex space-x-12 text-gray-400">
          <a
            href="#home"
            className="hover:text-purple-500 text-2xl font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <AiFillHome />
            <span>Home</span>
          </a>
          <a
            href="#about-me"
            className="hover:text-purple-500 text-2xl font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <AiOutlineUser />
            <span>About-me</span>
          </a>
          <a
            href="#projects"
            className="hover:text-purple-500 text-2xl font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <AiFillProject />
            <span>Projects</span>
          </a>

          <a
            href="#skills"
            className="hover:text-purple-500 text-2xl font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <GiSkills />
            <span>Skills</span>
          </a>

          <a
            href="#resume"
            className="hover:text-purple-500 text-2xl font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <AiOutlineFileText />
            <span>Resume</span>
          </a>
          <a
            href="#contacts"
            className="hover:text-purple-500 text-2xl font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <AiOutlineMail />
            <span>Contact</span>
          </a>
        </nav>

        {/* Right Language Selector */}
        <div className="flex items-center space-x-3">
          <span className="text-gray-400 text-lg">EN</span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
