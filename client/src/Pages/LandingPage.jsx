import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import ScrollToTop from '../components/ScrollTop';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaArrowRight, FaPlay, FaStar, FaUsers, FaShieldAlt } from 'react-icons/fa';
import Tour from '../components/Tour';
import FAQAccordion from '../components/FAQAccordion';
import ThemeToggle from '../components/ThemeToggle';


const Home = () => {
  const [showTour, setShowTour] = useState(false);

  const closeTour = () => {
    localStorage.setItem('hasSeenTour', 'true');
    setShowTour(false);
  };


  useEffect(() => {
    // Always show the tour after DOM is ready
    if (!localStorage.getItem("hasSeenTour")){
      setTimeout(() => setShowTour(true), 300);
    }
  }, []);

  useEffect(() => {
    AOS.init({
  duration: 1200,
  once: true,
  mirror: true,

});


  }, []);

  const features = [
    {
      icon: '🔍',
      title: 'Real-time Object Detection',
      desc: 'Scan broken items using your webcam and let AI identify the issue.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📚',
      title: 'Repair Tutorials',
      desc: 'Get video guides and repair steps curated for your object.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🥽',
      title: 'AR Repair Assistant',
      desc: 'Visualize step-by-step repairs with Augmented Reality overlays.',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const stats = [
    { number: '10K+', label: 'Successful Repairs' },
    { number: '500+', label: 'Video Tutorials' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' },
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
    <div className="bg-[#f8fafc] dark:bg-gray-900 pt-20 overflow-y-hidden">

  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Remove animated background blobs */}
  </div>

  {showTour && <Tour onClose={closeTour} auto={true} />}

  <style>{`
    .faq-glow {
      box-shadow: 0 0 12px 3px #a78bfa;
      transition: box-shadow 0.3s ease-in-out;
    }

    .glass-effect, .modern-card {
      background: #fff;
      backdrop-filter: none;
      border: 1.5px solid #ede9fe;
      box-shadow: 0 4px 24px 0 rgba(168,139,250,0.08), 0 1.5px 8px 0 rgba(55,48,163,0.06);
      transition: background 0.3s, border 0.3s, box-shadow 0.3s;
    }

    .dark .glass-effect, .dark .modern-card {
      background: #1f1f2f;
      border: 1.5px solid #3e3b5e;
      box-shadow: 0 4px 24px 0 rgba(168,139,250,0.12), 0 1.5px 8px 0 rgba(55,48,163,0.1);
    }

    .gradient-text {
      background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .modern-section {
      transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
      opacity: 0;
      transform: translateY(40px);
    }

    .modern-section.aos-animate {
      opacity: 1;
      transform: translateY(0);
    }

    .modern-cta {
      transition: transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s, background 0.25s;
      background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
      color: #fff;
    }

    .modern-cta:hover {
      transform: scale(1.07) translateY(-2px);
      box-shadow: 0 8px 32px 0 rgba(168,139,250,0.18), 0 1.5px 8px 0 rgba(55,48,163,0.12);
      background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
    }

    @media (max-width: 640px) {
      .modern-card, .glass-effect {
        padding: 1.25rem !important;
        border-radius: 1rem !important;
      }
    }

    body, .min-h-screen {
      background: #f8fafc !important;
    }

    .dark body, .dark .min-h-screen {
      background: #0f0f1a !important;
    }
  `}</style>


      {/* Modern Header */}
<header className="fixed top-0 left-0 right-0 z-50 w-full px-2 sm:px-4 md:px-8 py-4 bg-white dark:bg-gray-900 border-b border-purple-100 dark:border-gray-700 shadow-sm" data-aos="fade-down" style={{ backdropFilter: 'blur(8px)' }}>
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <Link to="/" className="group">
      <h1 className="text-3xl sm:text-4xl font-extrabold gradient-text hover:scale-105 transition-transform duration-300 tour-step-1">
        Refixly
      </h1>
    </Link>

    <nav className="tour-step-navbar flex items-center">
      <ul className="hidden md:flex items-center space-x-8 text-sm sm:text-base font-medium text-purple-700 dark:text-purple-300">
        {["how-it-works", "features", "faq", "ready"].map((id, i) => (
          <li key={i}>
            <a
              href={`#${id}`}
              className="relative group transition-all duration-300 hover:text-purple-500 dark:hover:text-purple-400"
            >
              <span className="relative z-10">
                {{
                  "how-it-works": "How It Works",
                  features: "Features",
                  faq: "FAQ",
                  ready: "Get Started"
                }[id]}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
        <li>
          <Link to="/signup" className="tour-step-2">
            <button className="modern-cta relative px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <span className="relative z-10">Sign Up</span>
            </button>
          </Link>
        </li>
      </ul>

      {/* Theme Toggle Button */}
      <div className="ml-4 md:ml-6">
        <ThemeToggle />
      </div>
    </nav>
  </div>
</header>

     {/* Hero Section */}
<section className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-16 text-center md:text-left tour-step-3 modern-section" data-aos="fade-up">
  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
    <div className="flex-1 max-w-2xl">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
        <FaStar className="mr-2" />
        AI-Powered Repair Assistant
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-purple-900 dark:text-purple-200" style={{ letterSpacing: '-1px' }}>
        <span className="gradient-text">Repair</span> with
        <br />
        <span className="text-purple-700 dark:text-purple-400">Confidence</span>
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-lg">
        Your AI-powered DIY repair assistant. Scan, diagnose, and fix with step-by-step guidance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/login" className="group">
          <button className="modern-cta relative px-8 py-4 font-semibold rounded-full transition-all duration-300 transform flex items-center">
            <span>Get Started Free</span>
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        <button className="modern-cta px-8 py-4 font-semibold rounded-full border-2 border-purple-200 dark:border-purple-600 bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-900 dark:hover:text-purple-100 transition-all duration-300 flex items-center group shadow-none">
          <FaPlay className="mr-2" />
          <span>Watch Demo</span>
        </button>
      </div>
    </div>
    <div className="flex-1 flex justify-center relative">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
        alt="Repair"
        className="relative w-80 h-80 object-contain drop-shadow-xl"
      />
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-12" data-aos="fade-up">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((stat, index) => (
      <div key={index} className="text-center group">
        <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg">
          <div className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-2">{stat.number}</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
        </div>
      </div>
    ))}
  </div>
</section>


     {/* How It Works */}
<section
  id="how-it-works"
  className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-16 tour-step-9 modern-section"
  data-aos="fade-right"
>
  <div className="text-center mb-12">
    <h2
      className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text"
      style={{ letterSpacing: '-1px' }}
    >
      How It Works
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
      Three simple steps to repair anything with AI assistance
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { icon: '📱', title: 'Scan', desc: 'Use your camera to scan the broken device and let AI identify the issue.' },
      { icon: '🧠', title: 'Analyze', desc: 'Get instant diagnosis and step-by-step repair instructions.' },
      { icon: '🛠️', title: 'Repair', desc: 'Follow guided tutorials with AR assistance to fix confidently.' }
    ].map((step, i) => (
      <div
        key={i}
        className="relative group modern-card p-8 h-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg"
      >
        <div className="text-6xl mb-6">{step.icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300" style={{ fontWeight: 800 }}>
          {step.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{step.desc}</p>
        <div className="absolute top-4 right-4 text-2xl font-bold text-purple-200 dark:text-purple-400 opacity-40">
          {String(i + 1).padStart(2, '0')}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Features */}
<section
  id="features"
  className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-16 tour-step-10 modern-section"
  data-aos="fade-left"
>
  <div className="text-center mb-12">
    <h2
      className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text"
      style={{ letterSpacing: '-1px' }}
    >
      Powerful Features
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
      Everything you need to become your own repair expert
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((feature, i) => (
      <div
        key={i}
        className="relative group modern-card p-8 h-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg"
      >
        <div className="text-5xl mb-6">{feature.icon}</div>
        <h3 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300" style={{ fontWeight: 800 }}>
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{feature.desc}</p>
        <div className="mt-6 flex items-center text-purple-500 dark:text-purple-400 group-hover:translate-x-2 transition-transform">
          <span className="text-sm font-medium">Learn More</span>
          <FaArrowRight className="ml-2 text-xs" />
        </div>
      </div>
    ))}
  </div>
</section>


      {/* FAQ */}
<section
  id="faq"
  className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-16 modern-section"
  data-aos="fade-up"
>
  <div className="text-center mb-12">
    <h2
      className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text"
      style={{ letterSpacing: '-1px' }}
    >
      Frequently Asked Questions
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
      Everything you need to know about Refixly
    </p>
  </div>
  <div className="glass-effect rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg">
    <FAQAccordion faqs={faqs} />
  </div>
</section>

     {/* Call To Action */}
<section
  id="ready"
  className="relative py-16 sm:py-20 text-center tour-step-12 modern-section"
  data-aos="zoom-in"
>
  <div className="max-w-4xl mx-auto px-2 sm:px-4">
    <div className="glass-effect rounded-3xl p-8 sm:p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-lg">
      <h2
        className="text-4xl sm:text-5xl font-extrabold mb-6 gradient-text"
        style={{ letterSpacing: '-1px' }}
      >
        Ready to Fix it Yourself?
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
        Join thousands of users who are repairing with confidence using Refixly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/login">
          <button className="modern-cta relative px-10 py-4 font-semibold rounded-full transition-all duration-300 transform flex items-center mx-auto sm:mx-0">
            <span>Get Started Now</span>
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
        <button className="modern-cta px-10 py-4 font-semibold rounded-full border-2 border-purple-200 dark:border-purple-400 bg-white dark:bg-gray-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-600 hover:text-purple-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center shadow-none">
          <FaUsers className="mr-2" />
          <span>Join Community</span>
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
