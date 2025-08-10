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
    <div className="bg-gradient-to-b from-[#2918cc] to-[#7541dc] text-gray-900 w-full overflow-x-hidden overflow-y-hidden">
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
            Own and Repair Smart
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Refixly is your AI-powered DIY assistant. Scan, Learn, and Repair—all from your pocket.
          </p>
          <button className="transition-all duration-500 text-white border-4 border-white font-montserrat uppercase text-center leading-none text-[17px] bg-transparent px-6 py-2 rounded hover:text-[#001F3F] hover:bg-white" onClick={() => navigate('/scan')}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-14 text-blue-900" data-aos="fade-right">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#0F172A] p-8 border border-blue-300 rounded-2xl hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              onClick={() => handleNagivaion(f.title)}
            >
              <div className="text-6xl mb-5">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/*About*/}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">About Refixly</h2>
          <p className="mt-4 text-lg  mx-auto text-gray-400">
            Refixly empowers everyday users with the tools and guidance to fix their own devices—no technician needed.
            Our blend of AI, AR, and community knowledge makes repair smart, simple, and sustainable. Whether you're fixing a phone, tablet, or laptop,
            we provide all the support you need—step-by-step and stress-free.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16 gap-10" data-aos="zoom-in">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4">Smart Diagnostics</h3>
            <p className="text-lg mb-4">
              Our AI-powered diagnostics system can detect common device issues just by asking you a few questions or analyzing device behavior.
              No more searching endless forums—get a fast, intelligent diagnosis.
            </p>
            <p className="text-lg">
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
            <h3 className="text-2xl font-semibold mb-4">Augmented Reality Assistance</h3>
            <p className="text-lg mb-4">
              Use our AR-guided instructions to repair devices with confidence. Point your camera and see real-time overlays guiding you where to tap,
              unscrew, or replace components.
            </p>
            <p className="text-lg">
              Perfect for visual learners and first-time repairers, our AR makes complex tasks feel like a breeze.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16 gap-10" data-aos="zoom-in">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4">Eco-Friendly Repairs</h3>
            <p className="text-lg mb-4">
              Refixly encourages users to repair rather than replace. Each repair helps reduce the growing pile of e-waste and lowers your carbon footprint.
            </p>
            <p className="text-lg">
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
            <h3 className="text-2xl font-semibold mb-4">Community-Driven Solutions</h3>
            <p className="text-lg mb-4">
              Join a vibrant community of tinkerers, technicians, and learners. Share repair tips, ask for advice, or explore crowd-sourced solutions
              from people who’ve fixed the same issue you’re facing.
            </p>
            <p className="text-lg">
              Our forums and repair logs make it easy to connect, learn, and grow your skills alongside others.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10" data-aos="zoom-in">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4">One-Stop Repair Toolkit</h3>
            <p className="text-lg mb-4">
              Everything you need in one place: step-by-step repair guides, video walkthroughs, tool recommendations, and where to buy parts.
              Stop wasting time looking in multiple places—we’ve got it all in one dashboard.
            </p>
            <p className="text-lg">
              Our toolkit is user-friendly, constantly updated, and adaptable to new devices and technologies.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={toolkit} alt="Repair Toolkit" className="rounded-xl shadow-lg w-[80%] mx-auto" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="tutorial" className="bg-blue-50 py-20 px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-blue-900" data-aos="fade-left">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="text-7xl mb-6">{s.icon}</div>
              <h4 className="text-2xl font-semibold mb-3 text-blue-700">{s.title}</h4>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* FAQ */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto" data-aos="zoom-in">
        <HomeFAQ faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">Ready to start fixing smarter?</h3>
        <p className="mb-8 max-w-xl mx-auto">
          Join thousands of users who trust Refixly to guide their DIY repair journeys.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
          Get Started Now
        </button>
      </section>

    </div>
  );
};

export default UserHome;
