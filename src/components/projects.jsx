import "./Projects.css"; // Import the CSS file for styling
import projectManagementImage from "../assets/project.png";
import reactLibraryImage from "../assets/reactLib.png";
import healthAppImage from "../assets/healthme.png";
import messagingAppImage from "../assets/msgapp.png"; // Added image for the Messaging App

const Projects = () => {
  return (
    <main className="main">
      <section className="card-area">
        {/* Main Heading */}
        <header className="w-full text-center mb-10">
          <h1 className="text-5xl font-bold text-white">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 mt-2">
            A showcase of my recent work and achievements.
          </p>
        </header>

        {/* Card: Project Management Tool */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--city">
                    {/* Image for Project Management Tool */}
                    <img
                      src={projectManagementImage}
                      alt="Project Management Tool"
                      className="card-front__image"
                    />
                    <h2 className="card-front__heading">Project Management</h2>
                    <p className="card-front__text-price">Team Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--city">
                  Task & Resource Management Tool
                </h3>
                <p className="inside-page__text">
                  An application designed to streamline task management,
                  resource allocation, and project tracking for teams.
                </p>
                <a
                  href="https://github.com/yourprofile/project-management-tool"
                  className="inside-page__btn inside-page__btn--city"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Card: React Data-Driven Animation Library */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--ski">
                    {/* Image for React Library */}
                    <img
                      src={reactLibraryImage}
                      alt="React Animation Library"
                      className="card-front__image"
                    />
                    <h2 className="card-front__heading">
                      React Animation Library
                    </h2>
                    <p className="card-front__text-price">Data-Driven</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--ski">
                  Real-Time Data Animation Library
                </h3>
                <p className="inside-page__text">
                  A custom React library designed to create dynamic, data-driven
                  animations in real-time, based on various datasets.
                </p>
                <a
                  href="https://github.com/yourprofile/react-animation-library"
                  className="inside-page__btn inside-page__btn--ski"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Card: HealthyMe App */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--beach">
                    {/* Image for HealthyMe App */}
                    <img
                      src={healthAppImage}
                      alt="HealthyMe"
                      className="card-front__image"
                    />
                    <h2 className="card-front__heading">HealthyMe App</h2>
                    <p className="card-front__text-price">Health & Wellness</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--beach">
                  Health Tracking Application
                </h3>
                <p className="inside-page__text">
                  A web application to help users monitor and improve their
                  daily health habits, such as diet, exercise, sleep, and
                  hydration.
                </p>
                <a
                  href="https://github.com/yourprofile/healthyme"
                  className="inside-page__btn inside-page__btn--beach"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Card: Messaging App */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--camping">
                    {/* Image for Messaging App */}
                    <img
                      src={messagingAppImage}
                      alt="Messaging App"
                      className="card-front__image"
                    />
                    <h2 className="card-front__heading">Messaging App</h2>
                    <p className="card-front__text-price">Email Tracker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--camping">
                  Email Tracking Application
                </h3>
                <p className="inside-page__text">
                  A messaging application that tracks email responses and
                  provides real-time analytics for communication efficiency.
                </p>
                <a
                  href="https://github.com/yourprofile/messaging-app"
                  className="inside-page__btn inside-page__btn--camping"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Projects;
