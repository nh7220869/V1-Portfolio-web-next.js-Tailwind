"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example of sending form data to an API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after submission
      } else {
        // Handle errors if needed
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="ml-28 mb-28 mt-28 mr-28 border-2 border-gray-300 p-4 hidden md:block bg-[#FCFAEE] shadow-lg rounded-lg animate-fadeInRight ">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-lg text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-lg text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-lg text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-300 text-black p-3 rounded-lg hover:bg-gray-300 transition duration-200">
            Submit
          </button>
        </form>
        {submitted && (
          <p className="text-center mt-3 font-semibold text-green-600">Thank you for your message!</p>
        )}
      </div>
      <div className="hidden md-block lg-text-lg ">
        <p>
          Lets Connect with me!
        </p>
      </div>

      {/* Mobile View */}
      <div className="w-full max-w-md mx-auto mt-8 mb-12 p-6 border-2 border-gray-300 bg-white rounded-lg shadow-md lg:hidden  animate-fadeInRight">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-medium text-lg text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-lg text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-lg text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-100 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
        {submitted && (
          <p className="text-center mt-4 font-semibold text-green-600">Thank you for your message!</p>
        )}
      </div>

      <div>
        <p  className="text-center text-lg mt-5 mb-3text-bold animate-bounce">
          lets connect with me!
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6 mb-10  p-4 rounded-lg shadow-md bg-orange-50  ">
        <a href="https://www.facebook.com/share/xjPt4s7rhHbLSgsa/?mibextid=qi2Omg/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" className="w-10 h-10 animate-pulse " />
        </a>
        <a href="https://www.linkedin.com/in/noorul-sehar-7468b6246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png" alt="LinkedIn" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://www.instagram.com/noorulsehar2003?utm_source=qr&igsh=MWJkeTJyeWZpZzNobA==/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="Instagram" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://github.com/nh7220869" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://wa.me/03021260393" target="_blank" rel="noopener noreferrer">
          <img src="/whats.png" alt="WhatsApp" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPVFnfqMSRJdrWtKCmrRvdQtXrZbdzCBNLchLBqjdwrdfjpxDWtnKRZJcGSHFBLMvZlg" target="_blank" rel="noopener noreferrer">
          <img src="/gmail.png" alt="gmail" className="w-10 h-10 animate-pulse" />
        </a>
      </div>
    </>
  );
}
