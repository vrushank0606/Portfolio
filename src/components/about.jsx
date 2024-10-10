const AboutMe = () => {
  return (
    <div
      className=" text-gray-300 font-sans relative"
      style={{
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      }}
    >
      <section className="py-40 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
          {/* Text Section */}
          <div className="flex flex-col items-start justify-center text-left md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get to Know <span className="text-purple-400">Who I Am</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              Hello! I am{" "}
              <span className="text-purple-400">Vrushank Hiremath</span>, a
              highly motivated and skilled software engineer based in{" "}
              <span className="text-purple-400">Boston, USA.</span> With a
              Master of Science in Information Systems from{" "}
              <span className="text-purple-400">
                Northeastern University, Boston
              </span>
              , and a Bachelor of Engineering in Computer Science from{" "}
              <span className="text-purple-400">
                KLE Technological University, Hubli, India
              </span>
              , I possess a solid foundation in software development and
              data-driven solutions.
            </p>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              Currently, I am employed as a{" "}
              <span className="text-purple-400">Software Engineer</span> at Bear
              Brown and Company, where I am actively engaged in full-stack
              development, system design, and project management to deliver
              high-quality software solutions that drive business growth.
            </p>
            <p className="text-lg md:text-2xl mb-6">
              With a diverse technical skill set encompassing frontend, backend,
              and cloud technologies, I thrive in collaborative environments and
              excel in bridging the gap between technical and business teams. I
              am passionate about leveraging technology to solve real-world
              problems and continuously explore emerging trends in software
              engineering.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mt-4 mb-4">
              Professional Interests
            </h2>
            <ul className="text-lg md:text-xl list-disc list-inside">
              <li>💼 Building Scalable Software Architectures</li>
              <li>📊 Data-Driven Decision Making</li>
              <li>🚀 Cloud and DevOps Technologies</li>
            </ul>

            <blockquote className="mt-8 text-lg md:text-xl italic text-purple-400">
              Transforming ideas into impactful solutions through technology and
              collaboration.
            </blockquote>
            <span className="block mt-2 text-sm text-gray-400">
              — Vrushank Hiremath
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
