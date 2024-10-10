import Header from "./header"; // Import the Header component
import Skills from "./skills"; // Import the Skills component
import prof from "../assets/prof.png"; // Import the profile image
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";
import About from "./about";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter for typing effect

const Home = () => {
  return (
    <div
      className="min-h-screen text-gray-300 font-sans relative"
      style={{
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      }}
    >
      {/* Header Section */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-between py-40 px-40"
      >
        {/* Left Section with Text */}
        <div className="flex flex-col space-y-4">
          <p className="text-xl text-purple-500">Hi There! 👋</p>
          <h1 className="text-6xl font-bold">
            I&apos;M <span className="text-purple-500">VRUSHANK HIREMATH</span>
          </h1>

          {/* Typing Animation Section */}
          <h2 className="text-4xl text-purple-500">
            <Typewriter
              words={["Software Engineer", "Full Stack", "UI/UX"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70} // Typing speed
              deleteSpeed={50} // Speed of deleting each character
              delaySpeed={1500} // Delay before typing the next phrase
            />
          </h2>

          <p className="max-w-lg text-2xl">
            I specialize in crafting high-performance web applications using
            React, Spring Boot, and AWS.
          </p>
        </div>

        {/* Right Section with Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={prof}
            alt="Profile"
            className="w-97 h-97 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Resume Section */}
      <section id="resume">
        <Resume />
      </section>

      {/* Contact Section */}
      <section id="contacts">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-gray-900">
        <p className="text-sm text-gray-400">
          &copy; 2024 Vrushank Hiremath. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
