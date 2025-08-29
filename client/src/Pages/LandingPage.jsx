import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import ScrollToTop from "../components/ScrollTop";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaUsers,
  FaCamera,
  FaBrain,
  FaTools,
  FaSearch,
  FaBookOpen,
  FaVrCardboard,
} from "react-icons/fa";
import Tour from "../components/Tour";
import FAQAccordion from "../components/FAQAccordion";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const [showTour, setShowTour] = useState(false);

  const closeTour = () => {
    localStorage.setItem("hasSeenTour", "true");
    setShowTour(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("hasSeenTour")) {
      setTimeout(() => setShowTour(true), 300);
    }
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
      icon: <FaSearch />,
      title: "Real-time Object Detection",
      desc: "Scan broken items using your webcam and let AI identify the issue.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaBookOpen />,
      title: "Repair Tutorials",
      desc: "Get video guides and repair steps curated for your object.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaVrCardboard />,
      title: "AR Repair Assistant",
      desc: "Visualize step-by-step repairs with Augmented Reality overlays.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { number: "10K+", label: "Successful Repairs" },
    { number: "500+", label: "Video Tutorials" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" },
  ];

  const faqs = [
    {
      q: "Is Refixly free to use?",
      a: "Yes, the basic features are free. We plan to add premium features soon.",
    },
    {
      q: "Which devices are supported?",
      a: "Refixly works on any device with a webcam or camera, including desktops, laptops, tablets, and smartphones.",
    },
    {
      q: "Can I request tutorials for specific devices?",
      a: "Absolutely! You can submit requests, and our team curates new content regularly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-900 pt-20 overflow-x-hidden">
      {showTour && <Tour onClose={closeTour} auto={true} />}

      <style>{`
        .faq-glow {
          box-shadow: 0 0 12px 3px #a78bfa;
          transition: box-shadow 0.3s ease-in-out;
        }
        .glass-effect, .modern-card {
          background: #fff;
          border: 1.5px solid #ede9fe;
          box-shadow: 0 4px 24px rgba(168,139,250,0.08), 0 1.5px 8px rgba(55,48,163,0.06);
          transition: all 0.3s ease-in-out;
        }
        .dark .glass-effect, .dark .modern-card {
          background: #1f1f2f;
          border: 1.5px solid #3e3b5e;
          box-shadow: 0 4px 24px rgba(168,139,250,0.12), 0 1.5px 8px rgba(55,48,163,0.1);
        }
        .gradient-text {
          background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .modern-section {
          transition: opacity 0.7s, transform 0.7s;
          opacity: 0;
          transform: translateY(40px);
        }
        .modern-section.aos-animate {
          opacity: 1;
          transform: translateY(0);
        }
        .modern-cta {
          background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
          color: #fff;
          transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .modern-cta:hover {
          transform: scale(1.07) translateY(-2px);
          box-shadow: 0 8px 32px rgba(168,139,250,0.18), 0 1.5px 8px rgba(55,48,163,0.12);
          background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
        }
      `}</style>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-4 bg-white dark:bg-gray-900 border-b border-purple-100 dark:border-gray-700 shadow-sm"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="group">
            <h1 className="text-3xl sm:text-4xl font-extrabold gradient-text transition-transform hover:scale-105">
              Refixly
            </h1>
          </Link>
          <nav className="flex items-center">
            <ul className="hidden md:flex items-center space-x-8 text-sm sm:text-base font-medium text-purple-700 dark:text-purple-300">
              {["how-it-works", "features", "faq", "ready"].map((id, i) => (
                <li key={i}>
                  <a
                    href={`#${id}`}
                    className="relative group hover:text-purple-500 dark:hover:text-purple-400 transition"
                  >
                    {{
                      "how-it-works": "How It Works",
                      features: "Features",
                      faq: "FAQ",
                      ready: "Get Started",
                    }[id]}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li>
                <Link to="/signup">
                  <button className="modern-cta px-8 py-3 font-semibold rounded-full">
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
            <div className="ml-4 md:ml-6">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 text-center md:text-left modern-section" data-aos="fade-up">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900 border text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
              <FaStar className="mr-2" /> AI-Powered Repair Assistant
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-purple-900 dark:text-purple-200">
              <span className="gradient-text">Repair</span> with <br />
              <span className="text-purple-700 dark:text-purple-400">Confidence</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Your AI-powered DIY repair assistant. Scan, diagnose, and fix with step-by-step guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <button className="modern-cta px-8 py-4 font-semibold rounded-full flex items-center">
                  Get Started Free <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button className="px-8 py-4 font-semibold rounded-full border-2 border-purple-300 dark:border-purple-600 bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-300 flex items-center hover:bg-purple-50 dark:hover:bg-gray-700">
                <FaPlay className="mr-2" /> Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-72 h-72 bg-purple-200 dark:bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
              alt="Repair"
              className="relative w-80 h-80 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative max-w-7xl mx-auto px-4 py-12" data-aos="fade-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white dark:bg-gray-800 border border-purple-100 dark:border-gray-700 shadow-md hover:shadow-xl transform hover:scale-105 text-center"
            >
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">{stat.number}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 py-16 modern-section" data-aos="fade-right">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Three simple steps to repair anything with AI assistance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ icon: <FaCamera />, title: "Scan", desc: "Use your camera to scan the broken device and let AI identify the issue." },
            { icon: <FaBrain />, title: "Analyze", desc: "Get instant diagnosis and step-by-step repair instructions." },
            { icon: <FaTools />, title: "Repair", desc: "Follow guided tutorials with AR assistance to fix confidently." }].map((step, i) => (
            <div key={i} className="relative group modern-card p-8 h-full rounded-2xl bg-white dark:bg-gray-800 border shadow-md hover:scale-105 transform transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{step.desc}</p>
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-purple-100 dark:text-purple-800 opacity-30">{String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16 modern-section" data-aos="fade-left">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text">Powerful Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Everything you need to become your own repair expert</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="relative group modern-card p-8 rounded-2xl bg-white dark:bg-gray-800 border shadow-md hover:scale-105 transform transition">
              <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-2xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{feature.desc}</p>
              <div className="mt-6 flex items-center text-purple-500 dark:text-purple-400 group-hover:translate-x-2 transition">
                <span className="text-sm font-medium">Learn More</span>
                <FaArrowRight className="ml-2 text-xs" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 py-16 modern-section" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Everything you need to know about Refixly</p>
        </div>
        <div className="glass-effect rounded-3xl p-8 bg-white dark:bg-gray-800 border shadow-md">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section id="ready" className="py-16 text-center modern-section" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-effect rounded-3xl p-12 bg-white dark:bg-gray-800 border shadow-md">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 gradient-text">Ready to Fix it Yourself?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of users who are repairing with confidence using Refixly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <button className="modern-cta px-10 py-4 font-semibold rounded-full flex items-center">
                  Get Started Now <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button className="px-10 py-4 font-semibold rounded-full border-2 border-purple-300 dark:border-purple-400 bg-white dark:bg-gray-700 text-purple-700 dark:text-purple-300 flex items-center">
                <FaUsers className="mr-2" /> Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Refixly. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-500"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
