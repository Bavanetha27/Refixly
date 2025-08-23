import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-lg text-white transition duration-300
          bg-[#38BDF8] hover:bg-[#0EA5E9] hover:drop-shadow-xl hover:shadow-[#0EA5E9]
          dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:hover:drop-shadow-xl dark:hover:shadow-cyan-400"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTop;
