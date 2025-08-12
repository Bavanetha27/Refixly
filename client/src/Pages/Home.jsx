// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import header from "../assets/header.jpg";
import AR from "../assets/AR.png";
import community from "../assets/community.png";
import eco from "../assets/eco.png";
import self from "../assets/self.png";
import toolkit from "../assets/toolkit.png";
import HomeFAQ from '../components/HomeFAQ';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false, mirror: true });
  }, []);

  const features = [
    { icon: '🧠', title: 'AI Damage Detection', desc: 'Instant device analysis using AI.' },
    { icon: '📺', title: 'Video Tutorials', desc: 'Step-by-step guidance tailored to you.' },
    { icon: '🔧', title: 'AR Repair Assistant', desc: 'Overlay repair instructions using AR.' },
    { icon: '📈', title: 'Progress Tracking', desc: 'Monitor your DIY repair journey.' },
    { icon: '💡', title: 'Expert Tips', desc: 'Tips from tech repair experts & the community.' },
    { icon: '📱', title: 'Mobile Friendly', desc: 'Repair anytime from any device.' },
  ];

  const steps = [
    { icon: '📷', title: 'Scan Object', desc: 'Use your camera to detect issues instantly.' },
    { icon: '📖', title: 'Get Tutorials', desc: 'Receive clear, relevant repair guides.' },
    { icon: '🛠️', title: 'Repair with AR', desc: 'Follow real-time AR instructions.' },
    { icon: '✅', title: 'Verify & Complete', desc: 'Mark your fix and save for reference.' },
  ];

  const faqs = [
    { q: 'Is Refixly free to use?', a: 'Basic features are free. Premium features require a subscription.' },
    { q: 'What devices are supported?', a: 'Smartphones, tablets, laptops, and small appliances.' },
    { q: 'Do I need any tools?', a: 'No. A camera and internet connection are enough.' },
    { q: 'Can I upload my own tutorials?', a: 'Yes! Share your knowledge with the community.' },
  ];

  const handleNagivaion = (title) => {
    const slug = title
      .toLowerCase()                // Convert to lowercase
      .trim()                       // Remove leading/trailing whitespace
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')         // Replace spaces with dashes
      .replace(/-+/g, '-');         // Replace multiple dashes with one

    console.log(slug);
    navigate(`/${slug}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150617] via-[#132299] to-[#7541dc] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id='hero-section'
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative text-white"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/70"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Own and <span className="text-[#38BDF8]">Repair Smart</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Refixly is your AI-powered DIY assistant. Scan, Learn, and Repair—all from your pocket.
          </p>
          <button 
            className="bg-transparent hover:bg-[#38BDF8] text-[#38BDF8] font-semibold hover:text-white py-3 px-8 border-2 border-[#38BDF8] hover:border-transparent rounded-full transition-all duration-300"
            onClick={() => navigate('/scan')}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B] px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-right">
            Powerful <span className="text-[#38BDF8]">Features</span>
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Discover how Refixly makes device repair simple, smart, and accessible for everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155] rounded-2xl p-8 hover:bg-[#1E293B]/80 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => handleNagivaion(f.title)}
            >
              <div className="text-5xl mb-6 text-[#38BDF8] group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#38BDF8] transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-[#94A3B8] group-hover:text-white transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*About*/}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white">About Refixly</h2>
          <p className="mt-4 text-lg mx-auto text-blue-100">
            Refixly empowers everyday users with the tools and guidance to fix their own devices—no technician needed.
            Our blend of AI, AR, and community knowledge makes repair smart, simple, and sustainable. Whether you're fixing a phone, tablet, or laptop,
            we provide all the support you need—step-by-step and stress-free.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16 gap-10" data-aos="zoom-in">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Smart Diagnostics</h3>
            <p className="text-lg text-blue-100 mb-4">
              Our AI-powered diagnostics system can detect common device issues just by asking you a few questions or analyzing device behavior.
              No more searching endless forums—get a fast, intelligent diagnosis.
            </p>
            <p className="text-lg text-blue-100">
              This feature is designed to assist both beginners and experienced users in identifying exact faults in their devices without trial and error.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={self} alt="Smart Diagnostics" className="rounded-xl shadow-lg w-[80%] mx-auto" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center mb-16 gap-10" data-aos="zoom-in">
          <div className="md:w-1/2">
            <img src={AR} alt="AR Assistance" className="rounded-xl shadow-lg w-[80%] mx-auto" />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Augmented Reality Assistance</h3>
            <p className="text-lg text-blue-100 mb-4">
              Use our AR-guided instructions to repair devices with confidence. Point your camera and see real-time overlays guiding you where to tap,
              unscrew, or replace components.
            </p>
            <p className="text-lg text-blue-100">
              Perfect for visual learners and first-time repairers, our AR makes complex tasks feel like a breeze.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16 gap-10" data-aos="zoom-in">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Eco-Friendly Repairs</h3>
            <p className="text-lg text-blue-100 mb-4">
              Refixly encourages users to repair rather than replace. Each repair helps reduce the growing pile of e-waste and lowers your carbon footprint.
            </p>
            <p className="text-lg text-blue-100">
              By extending the lifespan of your electronics, you’re contributing to a more sustainable planet—and saving money too.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={eco} alt="Eco Repair" className="rounded-xl shadow-lg w-[65%] mx-auto" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center mb-16 gap-10" data-aos="zoom-in">
          <div className="md:w-1/2">
            <img src={community} alt="Community" className="rounded-xl shadow-lg w-[80%] mx-auto" />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Community-Driven Solutions</h3>
            <p className="text-lg text-blue-100 mb-4">
              Join a vibrant community of tinkerers, technicians, and learners. Share repair tips, ask for advice, or explore crowd-sourced solutions
              from people who’ve fixed the same issue you’re facing.
            </p>
            <p className="text-lg text-blue-100">
              Our forums and repair logs make it easy to connect, learn, and grow your skills alongside others.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10" data-aos="zoom-in">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">One-Stop Repair Toolkit</h3>
            <p className="text-lg text-blue-100 mb-4">
              Everything you need in one place: step-by-step repair guides, video walkthroughs, tool recommendations, and where to buy parts.
              Stop wasting time looking in multiple places—we’ve got it all in one dashboard.
            </p>
            <p className="text-lg text-blue-100">
              Our toolkit is user-friendly, constantly updated, and adaptable to new devices and technologies.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={toolkit} alt="Repair Toolkit" className="rounded-xl shadow-lg w-[80%] mx-auto" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="tutorial" className="py-20 px-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-left">
            How It <span className="text-[#38BDF8]">Works</span>
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Get started with Refixly in just a few simple steps. Our intuitive process makes device repair accessible to everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative bg-[#1E293B] border border-[#334155] rounded-2xl p-8 hover:border-[#38BDF8]/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#38BDF8] rounded-full flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#38BDF8] transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-[#94A3B8] group-hover:text-white transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="" data-aos="zoom-in">
        <HomeFAQ faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-white">Ready to start fixing smarter?</h3>
          <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
            Join thousands of users who trust Refixly to guide their DIY repair journeys.
          </p>
          <button 
            className="bg-[#38BDF8] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#0EA5E9] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => navigate('/signup')}
          >
            Get Started Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default UserHome;
