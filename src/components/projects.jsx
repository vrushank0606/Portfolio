import { useState } from "react";
import "./Projects.css"; // Import the CSS file for styling
import projectManagementImage from "../assets/project.png";
import reactLibraryImage from "../assets/reactLib.png";
import healthAppImage from "../assets/healthme.png";
import messagingAppImage from "../assets/msgapp.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle pop-up visibility

  // List of project details
  const projects = [
    {
      id: 1,
      title: "Project Management Tool",
      image: projectManagementImage,
      description:
        "An application designed to streamline task management, resource allocation, and project tracking for teams.",
      moreDetails:
        "This tool includes Gantt charts, Kanban boards, and resource planning features. It integrates with Jira and Slack for seamless collaboration.",
      repoLink: "https://github.com/yourprofile/project-management-tool",
    },
    {
      id: 2,
      title: "React Animation Library",
      image: reactLibraryImage,
      description:
        "A custom React library designed to create dynamic, data-driven animations in real-time, based on various datasets.",
      moreDetails:
        "The library supports real-time data streams, smooth transitions, and custom animation components tailored for dashboards.",
      repoLink: "https://github.com/yourprofile/react-animation-library",
    },
    {
      id: 3,
      title: "HealthyMe App",
      image: healthAppImage,
      description:
        "A web application to help users monitor and improve their daily health habits, such as diet, exercise, sleep, and hydration.",
      moreDetails:
        "The app includes calorie tracking, water intake reminders, and progress tracking charts to promote healthier lifestyles.",
      repoLink: "https://github.com/yourprofile/healthyme",
    },
    {
      id: 4,
      title: "Messaging App",
      image: messagingAppImage,
      description:
        "A messaging application that tracks email responses and provides real-time analytics for communication efficiency.",
      moreDetails:
        "Features include read receipts, link tracking, and response time analytics. Perfect for email campaigns and team communication.",
      repoLink: "https://github.com/yourprofile/messaging-app",
    },
  ];

  // Open the pop-up with selected project details
  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  // Close the pop-up
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="main">
      <section className="card-area">
        <header className="w-full text-center mb-10">
          <h1 className="text-5xl font-bold text-white">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 mt-2">
            A showcase of my recent work and achievements.
          </p>
        </header>

        {projects.map((project) => (
          <section className="card-section" key={project.id}>
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-front__image"
                      />
                      <h2 className="card-front__heading">{project.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    {project.title}
                  </h3>
                  <p className="inside-page__text">{project.description}</p>
                  <button
                    className="inside-page__btn inside-page__btn--city"
                    onClick={() => handleViewProject(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      {/* Pop-Up for More Details */}
      {isPopupOpen && selectedProject && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close-btn" onClick={handleClosePopup}>
              ✖
            </button>
            <h2 className="popup-title">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="popup-image"
            />
            <p className="popup-description">{selectedProject.moreDetails}</p>
            <a
              href={selectedProject.repoLink}
              className="popup-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repository
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
