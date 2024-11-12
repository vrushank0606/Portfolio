import { useRef } from "react";
import emailjs from "emailjs-com"; // Import EmailJS library
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"; // Import icons

const Contact = () => {
  const form = useRef();

  // Function to handle email submission using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgcopsk", // Replace with your EmailJS Service ID
        "template_0myp3n7", // Replace with your EmailJS Template ID
        form.current,
        "RSgvdJe7HTz6S9Yt_" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          alert("Message sent successfully!"); // Success message without using result
        },
        () => {
          alert("An error occurred. Please try again."); // Error message without using error
        }
      );

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <section className="w-full py-20 px-8 bg-gray-900 text-gray-300">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Get in <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          I&apos;d love to hear from you. Fill out the form below to send me a
          message!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              className="p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white">Contact Information</h3>
        <div className="mt-4 flex flex-col items-center space-y-2">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <AiOutlineMail className="text-purple-500" size={24} />
            <span className="text-lg">hiremathvrushank3@gmail.com</span>
          </div>

          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <AiOutlinePhone className="text-purple-500" size={24} />
            <span className="text-lg">+1 (617) 201-4321</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
