import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import ScrollToTop from '../components/ScrollTop';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Tour from '../components/Tour';
import FAQAccordion from '../components/FAQAccordion';


const Home = () => {
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    // Always show the tour after DOM is ready
    setTimeout(() => setShowTour(true), 300);
  }, []);

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
      {showTour && <Tour onClose={() => setShowTour(false)} auto={true} />}
      <style>{`
        .faq-glow {
          box-shadow: 0 0 12px 3px #38BDF8;
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>

<header className="w-full px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-md" data-aos="fade-down">
  <Link to="/">
    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] hover:scale-105 transition-transform duration-300 tour-step-1">
      Refixly
    </h1>
  </Link>

  <nav className="tour-step-navbar">
    <ul className="hidden md:flex items-center space-x-6 text-sm sm:text-base font-medium text-white">
      {["how-it-works", "features", "faq", "ready"].map((id, i) => (
        <li key={i}>
          <a
            href={`#${id}`}
            className="relative group transition-colors duration-200"
          >
            <span className="hover:text-[#0EA5E9]">{{
              "how-it-works": "How It Works",
              features: "What Refixly Can Do",
              faq: "FAQ",
              ready: "Ready to Fix?",
            }[id]}</span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
      <li>
        <Link to="/signup" className="tour-step-2">
          <button className="ml-2 px-6 py-2 text-white border-2 border-white rounded-full bg-transparent font-semibold transition duration-300 hover:bg-white hover:text-[#001F3F] hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]">
            Sign Up
          </button>
        </Link>
      </li>
    </ul>
  </nav>
</header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 text-center md:text-left tour-step-3" data-aos="fade-up">
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
               className="inline-block mt-8 px-8 py-3 text-white font-montserrat uppercase text-[17px] border-4 border-white rounded-full bg-transparent transition-all duration-500 shadow-lg hover:bg-white hover:text-[#001F3F] hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.7)]"
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
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20 tour-step-9" data-aos="fade-right">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#38BDF8]">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-[#CBD5E1]">
            {['🎥 Scan', '📚 Learn', '🛠️ Repair'].map((step, i) => (
              <div
                key={i}
                className="bg-[#334155] p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(56,189,248,0.3)] hover:bg-[#1e293b]"
                >
                <h3 className="text-xl font-semibold mb-2">{step.split(' ')[1]}</h3>
                <p> 
                {[
                'Use your webcam to scan the item.',
                'Access step-by-step repair guides.',
                'Follow tutorials to fix confidently.',
                ][i]}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20 tour-step-10" data-aos="fade-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#38BDF8]">What Refixly Can Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-[#CBD5E1]">
          {features.map(({ title, desc }, i) => (
            <div
              key={i}
                className="bg-[#334155] p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(56,189,248,0.3)] hover:bg-[#1e293b]"
                
            >
              <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">{title}</h3>
              <p className="text-[#CBD5E1]">{desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* FAQ */}
      <section
  id="faq"
  className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20"
  data-aos="fade-up"
>
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#38BDF8]">
    Frequently Asked Questions
  </h2>
  <div className="transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl rounded-xl bg-white/5 backdrop-blur-sm p-4">
    <FAQAccordion faqs={faqs} />
  </div>
</section>

      {/* Call To Action */}
      <section id="ready" className="bg-[#0F172A] py-20 text-center tour-step-12" data-aos="zoom-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#38BDF8]">Ready to Fix it Yourself?</h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto mb-8">Join thousands of users who are repairing with confidence using Refixly.</p>
        <Link
          to="/login"
          className="inline-block px-10 py-3 bg-[#38BDF8] text-black font-semibold rounded-full shadow-lg hover:bg-[#0EA5E9] transition"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
