import React from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook

const About = () => {
  const navigate = useNavigate();  // Hook to handle navigation

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
        
        {/* Close (X) Button in the upper right corner */}
        <button
          onClick={() => navigate(-1)}  // Navigate to the previous page
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times; {/* "X" symbol */}
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to our app! This app was created to help people connect more easily. With a simple and user-friendly interface, you can send us a message, ask questions, and engage with our team.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Our Features:</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
          <li>Contact us easily with the contact form.</li>
          <li>Get quick responses to collaboration inquiries.</li>
          <li>Simple navigation for a smooth experience.</li>
          <li>Built with love and attention to detail.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Our Mission</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our goal is to provide users with a seamless way to connect and collaborate with us. We are passionate about delivering value through transparent communication and quick responses.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Contact Us</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          If you have any questions, feel free to reach out through our contact page. We're always here to help!
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Social Media</h3>
        <ul className="list-none text-lg text-gray-700 mb-4">
          <li>
            <a
              href="https://www.facebook.com"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              className="text-blue-400 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              className="text-pink-600 hover:text-pink-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Our Team</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our team is made up of passionate individuals dedicated to providing the best experience for our users. We collaborate to bring you innovative features and excellent customer support.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Join Us</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We are always looking for talented individuals to join our team. If you are passionate about technology and want to make an impact, feel free to reach out.
        </p>

        <p className="text-center text-gray-500 mt-4">Thank you for visiting our app!</p>
      </div>
    </div>
  );
};

export default About;
