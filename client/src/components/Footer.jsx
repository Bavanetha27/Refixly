import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#130b29] pt-2 border-t-4 border-cyan-400">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div
          className="bg-[#130b29] backdrop-blur-sm rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-8 py-10"
          style={{
            boxShadow:
              "0 0 32px 4px rgba(0, 213, 255, 1)",
          }}
        >
          {/* About */}
          <div className="flex-1 min-w-[220px]">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Refixly</h2>
            <p className="text-white text-base">
              Empowering you to become your own tech hero—snap a photo, diagnose
              the problem, and follow interactive guides to bring your devices
              back to life. Repair smarter, waste less, and join a community of
              fixers making the world more sustainable, one repair at a time.
            </p>
          </div>
          {/* NavLinks */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Navigation</h2>
            <nav className="flex flex-col gap-2 text-white text-base font-medium">
              <a href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#features" className="hover:text-cyan-400 transition-colors">
                Features
              </a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">
                FAQ
              </a>
            </nav>
          </div>
          {/* Social */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">Follow us on</h2>
            <div className="flex gap-5 mt-2">
            {/* Twitter (X) */}
            <a
              href="https://x.com/yourhandle"
              aria-label="Twitter"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656c-.793.352-1.645.59-2.538.696a4.495 4.495 0 001.984-2.481 8.947 8.947 0 01-2.847 1.087A4.478 4.478 0 0015.448 4c-2.485 0-4.5 2.014-4.5 4.5 0 .352.04.695.115 1.023-3.74-.188-7.055-1.977-9.275-4.698a4.47 4.47 0 00-.609 2.264c0 1.562.795 2.941 2.005 3.749a4.482 4.482 0 01-2.037-.562v.056c0 2.183 1.553 4.005 3.616 4.418a4.505 4.505 0 01-2.03.078c.572 1.786 2.233 3.085 4.2 3.121a8.994 8.994 0 01-5.574 1.923c-.362 0-.719-.021-1.07-.063a12.705 12.705 0 006.89 2.021c8.27 0 12.793-6.847 12.793-12.788 0-.195-.005-.389-.014-.582a9.154 9.154 0 002.248-2.33z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourhandle/"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.452 20.452H16.93v-5.568c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.666H9.424V9h3.37v1.561h.049c.469-.888 1.616-1.82 3.328-1.82 3.562 0 4.217 2.343 4.217 5.391v6.32zM5.337 7.433a1.958 1.958 0 110-3.917 1.958 1.958 0 010 3.917zM6.965 20.452H3.711V9h3.254v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/your.handle/"
              aria-label="Facebook"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.326 24h11.494v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
