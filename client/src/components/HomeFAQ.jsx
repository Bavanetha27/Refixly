import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-20 px-6 max-w-4xl mx-auto" data-aos="zoom-in">
      <h2
        className="text-4xl font-bold mb-14 text-center text-blue-900"
        data-aos="fade-left"
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-blue-300 rounded-lg p-5 cursor-pointer hover:bg-blue-50 transition-all duration-300"
            onClick={() => toggle(i)}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-blue-700">{faq.q}</h3>
              <span className="text-2xl text-blue-600 font-bold">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-3 text-gray-700">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFAQ;
