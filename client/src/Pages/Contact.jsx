
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
    <div className="min-h-screen bg-gradient-to-b from-[#150617] via-[#132299] to-[#7541dc] text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">
          Contact <span className="text-[#38BDF8]">Us</span>
        </h1>
        <p className="text-lg text-[#94A3B8] leading-relaxed">
          Have questions or feedback? We'd love to hear from you. 
          Reach out and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-6 py-16" data-aos="fade-up">
        <div className="bg-[#334155] rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E293B] text-white rounded-lg border border-gray-600 focus:border-[#38BDF8] focus:outline-none transition"
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
                className="w-full px-4 py-3 bg-[#1E293B] text-white rounded-lg border border-gray-600 focus:border-[#38BDF8] focus:outline-none transition"
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
                className="w-full px-4 py-3 bg-[#1E293B] text-white rounded-lg border border-gray-600 focus:border-[#38BDF8] focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#38BDF8] text-black font-semibold rounded-lg hover:bg-[#0EA5E9] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center" data-aos="fade-up">
        <div className="bg-[#334155] rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <FaEnvelope className="text-2xl text-[#38BDF8] mr-3" />
            <span className="text-lg">support@refixly.com</span>
          </div>
          <p className="text-[#94A3B8] mb-6">
            We typically respond within 24 hours
          </p>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="#" className="hover:text-[#38BDF8] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#38BDF8] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#38BDF8] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] py-8 text-center text-[#94A3B8]">
        <div className="max-w-4xl mx-auto px-6">
          <p>&copy; 2025 Refixly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;