import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150617] via-[#132299] to-[#7541dc] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">
          Contact <span className="text-[#38BDF8] dark:text-cyan-400">Us</span>
        </h1>
        <p className="text-lg text-[#94A3B8] dark:text-gray-300 leading-relaxed">
          Have questions or feedback? We'd love to hear from you. 
          Reach out and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-6 py-16" data-aos="fade-up">
        <div className="bg-[#334155] dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] dark:bg-gray-700 text-white dark:text-gray-200 rounded-lg border border-gray-600 dark:border-gray-500 focus:border-[#38BDF8] dark:focus:border-cyan-400 focus:outline-none transition"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] dark:bg-gray-700 text-white dark:text-gray-200 rounded-lg border border-gray-600 dark:border-gray-500 focus:border-[#38BDF8] dark:focus:border-cyan-400 focus:outline-none transition"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] dark:bg-gray-700 text-white dark:text-gray-200 rounded-lg border border-gray-600 dark:border-gray-500 focus:border-[#38BDF8] dark:focus:border-cyan-400 focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#38BDF8] dark:bg-cyan-500 text-black dark:text-white font-semibold rounded-lg hover:bg-[#0EA5E9] dark:hover:bg-cyan-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center" data-aos="fade-up">
        <div className="bg-[#334155] dark:bg-gray-800 rounded-2xl p-8 shadow-lg">

          <p className="text-[#94A3B8] dark:text-gray-300 mb-6">
            We typically respond within 24 hours
          </p>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="#" className="hover:text-[#38BDF8] dark:hover:text-cyan-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#38BDF8] dark:hover:text-cyan-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#38BDF8] dark:hover:text-cyan-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
