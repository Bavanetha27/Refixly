import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`bg-[#0F172A] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_32px_rgba(0,213,255,1)] hover:bg-[#0F172A] ${
            openIndex === i
              ? "ring-2 ring-[#38BDF8] glow"
              : "hover:ring-1 hover:ring-[#38BDF8]/40"
          }`}
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center px-6 py-5 sm:py-6 text-left focus:outline-none "
          >
            <h3 className="text-base sm:text-xl font-medium text-white">{faq.q}</h3>
            <span className="text-[#38BDF8] text-2xl font-bold">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 pt-1 text-[#cbd5e1] text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
