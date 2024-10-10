import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/VrushankHiremath.pdf"; // Import the resume PDF from assets folder

const Resume = () => {
  return (
    <section className="w-full py-40 px-8 bg-gray-900 text-gray-300">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          My <span className="text-purple-500">Resume</span>
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Below is my resume. Feel free to download it using the button below.
        </p>

        {/* Download Button */}
        <a
          href={resume} // Use the imported PDF file path
          download="Vrushank_Hiremath_Resume.pdf"
          className="inline-flex items-center mt-8 bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          <AiOutlineDownload className="mr-2" />
          Download Resume
        </a>
      </div>

      {/* Display the PDF using an iframe */}
      <div className="max-w-4xl mx-auto bg-gray-800 p-4 rounded-lg shadow-lg">
        <iframe
          src={resume} // Use the imported PDF file path
          title="Vrushank Hiremath Resume"
          className="w-full h-96 border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
