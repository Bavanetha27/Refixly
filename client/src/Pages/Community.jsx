import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUsers, FaComments, FaTools } from 'react-icons/fa';

const Community = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      icon: <FaUsers />,
      title: 'Connect',
      desc: 'Join thousands of repair enthusiasts sharing knowledge and tips.',
    },
    {
      icon: <FaComments />,
      title: 'Discuss',
      desc: 'Ask questions, share solutions, and learn from the community.',
    },
    {
      icon: <FaTools />,
      title: 'Share',
      desc: 'Post your repair successes and help others with their projects.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">
          Join the <span className="text-[#38BDF8]">Community</span>
        </h1>
        <p className="text-lg text-[#94A3B8] leading-relaxed">
          Connect with fellow DIY repair enthusiasts. Share tips, ask questions, 
          and learn together in our vibrant community of tinkerers and technicians.
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

      {/* CTA */}
      <section className="bg-[#0F172A] py-20 text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-6 text-[#38BDF8]">Ready to Connect?</h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto mb-8 px-4">
          Join our community today and start sharing your repair journey with others.
        </p>
        <button className="px-10 py-3 bg-[#38BDF8] text-black font-semibold rounded-full shadow-lg hover:bg-[#0EA5E9] transition">
          Join Community
        </button>
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

export default Community;