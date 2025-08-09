import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    selector: '.tour-step-1',
    title: 'Welcome to Refixly!',
    content: 'This is your AI-powered DIY repair assistant. Let us show you around!'
  },
  {
    selector: '.tour-step-2',
    title: 'Sign Up or Login',
    content: 'Sign up or log in to access personalized repair guides and community features.'
  },
  {
    selector: '.tour-step-navbar',
    title: 'Navigation Bar',
    content: 'Use the navigation bar to explore different sections of Refixly.'
  },
  {
    selector: '.tour-step-3',
    title: 'Main Feature Area',
    content: 'Here you can see the main features and get started with Refixly.'
  },
  {
    selector: '.tour-step-9',
    title: 'How It Works',
    content: 'This section explains how Refixly helps you repair your devices.'
  },
  {
    selector: '.tour-step-10',
    title: 'Features',
    content: 'Discover all the powerful features Refixly offers.'
  },
  {
    selector: '.tour-step-11',
    title: 'FAQ',
    content: 'Find answers to common questions about Refixly.'
  },
  {
    selector: '.tour-step-12',
    title: 'Get Started!',
    content: 'Ready to fix it yourself? Join thousands of users who are repairing with confidence.'
  },
  {
    selector: '.tour-step-footer',
    title: 'Footer',
    content: 'Here you can find additional links and information about Refixly.'
  },
];

const getElementRect = (selector) => {
  const el = document.querySelector(selector);
  if (!el) return null;
  return el.getBoundingClientRect();
};

// Helper to find the next/prev available step with a visible selector
const findNextVisibleStep = (from, direction = 1) => {
  let i = from + direction;
  while (i >= 0 && i < steps.length) {
    if (getElementRect(steps[i].selector)) return i;
    i += direction;
  }
  return from; // fallback to current if none found
};

const Tour = ({ onClose, auto = false }) => {
  const [step, setStep] = useState(0);
  const [targetRect, setTargetRect] = useState(null);
  const popoverRef = useRef(null);

  // Track the last valid step with a visible selector
  const [lastValidStep, setLastValidStep] = useState(0);

  // Scroll to the highlighted element on step change
  useEffect(() => {
    const selector = steps[step].selector;
    const el = document.querySelector(selector);
    if (el) {
      const rect = el.getBoundingClientRect();
      const isLargeSection = rect.height > 300 || rect.width > 600;
      el.scrollIntoView({ behavior: 'smooth', block: isLargeSection ? 'start' : 'center', inline: 'center' });
    }
  }, [step]);

  useEffect(() => {
    const updateRect = () => {
      const rect = getElementRect(steps[step].selector);
      setTargetRect(rect);
      if (rect) setLastValidStep(step);
    };
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, true);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect, true);
    };
  }, [step]);

  // Prevent auto-advancing if next step is not visible; stay on last valid step
  useEffect(() => {
    if (steps[step].selector && !targetRect) {
      // If no more valid steps ahead, stay on last valid step
      if (lastValidStep !== step) setStep(lastValidStep);
    }
  }, [targetRect, step, lastValidStep]);

  // Auto-close if no target
  useEffect(() => {
    if (steps[step].selector && !targetRect) {
      const timeout = setTimeout(() => setStep((s) => (s < steps.length - 1 ? s + 1 : s)), 1000);
      return () => clearTimeout(timeout);
    }
  }, [targetRect, step]);

  // Auto show on first load
  useEffect(() => {
    if (auto && !localStorage.getItem('refixly_tour_shown')) {
      localStorage.setItem('refixly_tour_shown', 'true');
    }
  }, [auto]);

  if (!targetRect) return null;

  // Improved popover positioning for large sections
  let popoverStyle = {};
  if (targetRect) {
    const popoverHeight = 220;
    const popoverWidth = 360;
    const isLargeSection = targetRect.height > 300 || targetRect.width > 600;
    let top;
    if (isLargeSection) {
      // Center vertically within the section
      top = targetRect.top + targetRect.height / 2 - popoverHeight / 2;
    } else {
      // Default: below
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const spaceAbove = targetRect.top;
      top = targetRect.bottom + 24;
      // If not enough space below, show above
      if (spaceBelow < popoverHeight && spaceAbove > popoverHeight) {
        top = targetRect.top - popoverHeight - 24;
      }
    }
    // Center horizontally for wide sections
    let left = targetRect.left + targetRect.width / 2 - popoverWidth / 2;
    left = Math.max(16, Math.min(left, window.innerWidth - popoverWidth - 16));
    popoverStyle = {
      position: 'fixed',
      top,
      left,
      zIndex: 10001,
      maxWidth: popoverWidth,
      width: '90%',
      minWidth: 260,
    };
  }

  // Arrow position
  const arrowStyle = {
    position: 'fixed',
    left: targetRect.left + targetRect.width / 2 - 12,
    top: targetRect.bottom,
    zIndex: 10002,
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0" style={{ background: 'rgba(124,58,237,0.06)', pointerEvents: 'auto', zIndex: 50 }} />
      {/* Highlighted element border */}
      <div
        style={{
          position: 'fixed',
          top: targetRect.top - 2,
          left: targetRect.left - 2,
          width: targetRect.width + 4,
          height: targetRect.height + 4,
          border: '2px solid #a78bfa',
          borderRadius: 14,
          boxShadow: '0 2px 8px 0 rgba(124,58,237,0.06)',
          zIndex: 10003,
          pointerEvents: 'none',
        }}
      />
      {/* Arrow */}
      <svg width="24" height="12" style={{ ...arrowStyle, top: Math.max(arrowStyle.top - 8, 88) }}>
        <polygon points="12,0 24,12 0,12" fill="#e9d5ff" />
      </svg>
      {/* Popover */}
      <div ref={popoverRef} style={{ ...popoverStyle, top: Math.max(popoverStyle.top, 88) }} className="z-50 bg-white text-gray-900 rounded-2xl shadow-md p-7 flex flex-col items-start border border-[#e9d5ff]" >
        <div className="flex w-full justify-between items-start mb-2">
          <h2 className="text-2xl font-extrabold text-[#7c3aed] mb-2 text-left" style={{ lineHeight: 1.15 }}>{steps[step].title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl ml-4 font-bold">&times;</button>
        </div>
        <div className="mb-6 text-base text-[#6b7280] text-left leading-relaxed" style={{ fontWeight: 500 }}>{steps[step].content}</div>
        <div className="flex flex-col w-full gap-2 mt-2">
          <span className="text-xs text-gray-400 mb-1">{step + 1} of {steps.length}</span>
          <div className="flex gap-2 w-full">
            <button
              onClick={onClose}
              className="px-0 py-2 text-[#7c3aed] text-base font-semibold bg-transparent rounded-lg hover:underline focus:outline-none"
              style={{ minWidth: 60 }}
            >
              Skip
            </button>
            <button
              onClick={() => setStep(findNextVisibleStep(step, -1))}
              disabled={step === findNextVisibleStep(0, 1)}
              className={`px-0 py-2 text-base font-semibold bg-transparent rounded-lg focus:outline-none ${step === findNextVisibleStep(0, 1) ? 'text-gray-300 cursor-not-allowed' : 'text-[#7c3aed] hover:underline'}`}
              style={{ minWidth: 90 }}
            >
              &#8592; Previous
            </button>
            <button
              onClick={() => {
                const next = findNextVisibleStep(step, 1);
                if (next === step) onClose();
                else setStep(next);
              }}
              className="px-6 py-2 rounded-lg bg-[#7c3aed] text-white text-base font-semibold shadow-sm hover:bg-[#6d28d9] focus:outline-none"
              style={{ minWidth: 90 }}
            >
              {findNextVisibleStep(step, 1) === step ? 'Finish' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour; 