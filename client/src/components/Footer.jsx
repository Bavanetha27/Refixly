import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Mic,
  Book,
  Smile,
  Users,
  Heart,
  Trophy,
  Twitter,
  Facebook,
  Home,
  Scan,
  HelpCircleIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/yourhandle",
      icon: Twitter,
      color: "hover:text-blue-900",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yourhandle/",
      icon: Linkedin,
      color: "hover:text-blue-900",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/your.handle/",
      icon: Facebook,
      color: "hover:text-blue-900",
    },
    {
      name: "Github",
      href: "https://github.com/Bavanetha27/Refixly/",
      icon: Github,
      color: "hover:text-gray-900",
    },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        {
          name: "Home",
          href: "/home",
          icon: Home,
          color: "text-indigo-400",
        },
        {
          name: "Scan",
          href: "/scan",
          icon: Scan,
          color: "text-blue-400",
        },
        {
          name: "Tutorial",
          href: "/tutorial",
          icon: HelpCircleIcon,
          color: "text-yellow-400",
        },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          name: "Community",
          href: "/community",
          icon: Users,
          color: "text-gray-700",
        },
        {
          name: "Contact",
          href: "/contact",
          icon: Mic,
          color: "text-gray-800",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-600 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold gradient-text ">
              Refixly
            </h2>
            <p className="max-w-md text-sm leading-6 text-gray-600">
              Empowering you to become your own tech hero—snap a photo, diagnose the problem, and follow interactive guides to bring your devices back to life. Repair smarter, waste less, and join a community of fixers making the world more sustainable, one repair at a time.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 text-gray-500 hover:text-gray-700 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Footer Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className={`font-medium mb-4 text-sm text-gray-800 `}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-colors duration-200 flex items-center gap-2 text-gray-600 hover:text-gray-900  `}
                    >
                      <link.icon
                        className={`w-4 h-4 ${link.color}`}
                      />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t mt-8 pt-6 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-center md:text-left text-xs text-gray-500">
              <p>© {currentYear} Refixly. Made with ❤️ All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900   transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900   transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;