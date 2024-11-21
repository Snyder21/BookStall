import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Hook to handle navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!message || !email) {
      toast.error("Please fill in both fields.");  // Error toast
      return;
    }

    // Here you could send the message data to your backend or email API
    toast.success(`Message sent!\nEmail: ${email}\nMessage: ${message}`);  // Success toast
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
        
        {/* Close (X) Button in the upper right corner of the form */}
        <button
          onClick={() => navigate(-1)}  // Navigate to the previous page
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times; {/* "X" symbol */}
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We'd love to hear from you! Please reach out if you have any questions or inquiries.
        </p>

        <div className="text-gray-700 text-lg mb-4">
          <p><strong>Email:</strong> pkcoding21@email.com</p>
          <p><strong>Phone:</strong> (+91) 9305183202</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Send Us a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">Your Email</label>
            <input
              id="email"
              type="email"
              className="border border-gray-300 p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700">Your Message</label>
            <textarea
              id="message"
              className="border border-gray-300 p-2 rounded-md"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
