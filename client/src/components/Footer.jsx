import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 pt-2 border-t-4 border-blue-400">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-900 rounded-3xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-8 py-10" style={{ boxShadow: '0 0 32px 4px #38BDF8, 0 2px 8px 0 rgba(0,0,0,0.2)' }}>
          {/* About */}
          <div className="flex-1 min-w-[220px]">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">Refixly</h2>
            <p className="text-white text-base">
              Empowering you to become your own tech hero—snap a photo, diagnose the problem, and follow interactive guides to bring your devices back to life. Repair smarter, waste less, and join a community of fixers making the world more sustainable, one repair at a time.
            </p>
          </div>
          {/* NavLinks */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">Navigation</h2>
            <nav className="flex flex-col gap-2 text-white text-base font-medium">
              <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            </nav>
          </div>
          {/* Social */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">Follow us on</h2>
            <div className="flex gap-5 mt-2">
              {/* Twitter */}
              <a href="https://x.com/yourhandle" aria-label="Twitter" className="text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.636 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.11A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/yourhandle/" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/your.handle/" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
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