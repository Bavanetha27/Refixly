import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaVideo, FaBookOpen, FaClock } from 'react-icons/fa';

const Tutorial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      icon: <FaVideo />,
      title: 'Video Guides',
      desc: 'Step-by-step video tutorials for common device repairs.',
    },
    {
      icon: <FaBookOpen />,
      title: 'Written Instructions',
      desc: 'Detailed repair manuals with photos and diagrams.',
    },
    {
      icon: <FaClock />,
      title: 'Quick Fixes',
      desc: 'Fast solutions for everyday repair problems.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">
          Learn to <span className="text-[#38BDF8]">Repair</span>
        </h1>
        <p className="text-lg text-[#94A3B8] leading-relaxed">
          Master DIY repairs with our comprehensive tutorials. From smartphones 
          to household appliances, we'll guide you through every step.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#334155] rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="text-4xl text-[#38BDF8] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">
                {feature.title}
              </h3>
              <p className="text-[#CBD5E1]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center" data-aos="zoom-in">
        <div className="bg-[#334155] rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-extrabold text-[#38BDF8] mb-6">
            Coming Soon
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            We're working hard to bring you the best repair tutorials. 
            Our comprehensive library will be available soon!
          </p>
          <button className="px-8 py-3 bg-[#38BDF8] text-black font-semibold rounded-full shadow-lg hover:bg-[#0EA5E9] transition">
            Notify Me
          </button>
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

export default Tutorial;