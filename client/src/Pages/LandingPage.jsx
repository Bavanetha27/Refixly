import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import ScrollToTop from '../components/ScrollTop';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          className={`bg-[#334155] rounded-2xl shadow-lg cursor-pointer select-none ${
            openIndex === i ? 'faq-glow' : ''
          }`}
          onClick={() => toggle(i)}
          aria-expanded={openIndex === i}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggle(i);
          }}
        >
          <div className="flex justify-between items-center p-6">
            <h3 className="text-xl font-semibold">{q}</h3>
            <span className="text-[#38BDF8] text-2xl">{openIndex === i ? '−' : '+'}</span>
          </div>
          {openIndex === i && (
            <p className="px-6 pb-6 text-[#CBD5E1] border-t border-[#38BDF8]">{a}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      title: 'Real-time Object Detection',
      desc: 'Scan broken items using your webcam and let AI identify the issue.',
    },
    {
      title: 'Repair Tutorials',
      desc: 'Get video guides and repair steps curated for your object.',
    },
    {
      title: 'AR Repair Assistant (Coming Soon)',
      desc: 'Visualize step-by-step repairs with Augmented Reality overlays.',
    },
  ];

  const faqs = [
    {
      q: 'Is Refixly free to use?',
      a: 'Yes, the basic features are free. We plan to add premium features soon.',
    },
    {
      q: 'Which devices are supported?',
      a: 'Refixly works on any device with a webcam or camera, including desktops, laptops, tablets, and smartphones.',
    },
    {
      q: 'Can I request tutorials for specific devices?',
      a: 'Absolutely! You can submit requests, and our team curates new content regularly.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] text-white font-sans overflow-x-hidden">
      <style>{`
        .faq-glow {
          box-shadow: 0 0 12px 3px #38BDF8;
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>

      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center py-8 px-4 sm:px-6 md:px-20" data-aos="fade-down">
        <Link to="/"><h1 className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">Refixly</h1></Link>
        <nav>
          <ul className="hidden md:flex space-x-6 text-sm sm:text-base">
            <li><a href="#how-it-works" className="hover:text-[#0EA5E9] transition">How It Works</a></li>
            <li><a href="#features" className="hover:text-[#0EA5E9] transition">What Refixly Can Do</a></li>
            <li><a href="#faq" className="hover:text-[#0EA5E9] transition">FAQ</a></li>
            <li><a href="#ready" className="hover:text-[#0EA5E9] transition">Ready to Fix?</a></li>
            <li><Link to="/signup" className="hover:text-[#0EA5E9] transition">SignUp</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 text-center md:text-left" data-aos="fade-up">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-[#38BDF8]">Refixly</span>
            </h1>
            <p className="mt-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed">
              Your AI-powered DIY repair assistant. Detect. Learn. Repair.
            </p>
            <Link
              to="/login"
              className="inline-block mt-8 px-8 py-3 bg-[#38BDF8] text-black font-semibold rounded-full shadow-lg hover:bg-[#0EA5E9] transition"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
              alt="Repair"
              className="w-60 sm:w-80 md:w-[28rem] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20" data-aos="fade-right">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#38BDF8]">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-[#CBD5E1]">
          {['🎥 Scan', '📚 Learn', '🛠️ Repair'].map((step, i) => (
            <div key={i} className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">{step.split(' ')[1]}</h3>
              <p>{['Use your webcam to scan the item.', 'Access step-by-step repair guides.', 'Follow tutorials to fix confidently.'][i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20" data-aos="fade-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#38BDF8]">What Refixly Can Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map(({ title, desc }, i) => (
            <div
              key={i}
              className="bg-[#334155] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">{title}</h3>
              <p className="text-[#CBD5E1]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#38BDF8]">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* Call To Action */}
      <section id="ready" className="bg-[#0F172A] py-20 text-center" data-aos="zoom-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#38BDF8]">Ready to Fix it Yourself?</h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto mb-8">Join thousands of users who are repairing with confidence using Refixly.</p>
        <Link
          to="/login"
          className="inline-block px-10 py-3 bg-[#38BDF8] text-black font-semibold rounded-full shadow-lg hover:bg-[#0EA5E9] transition"
        >
          Get Started Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] py-8 text-center text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; 2025 Refixly. All rights reserved.</p>

          <div className="flex space-x-6 text-xl">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <ScrollToTop />
      </footer>
    </div>
  );
};

export default Home;
