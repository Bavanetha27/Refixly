import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" data-aos="zoom-in">
      <h2
        className="text-4xl font-bold mb-14 text-center text-blue-50"
        data-aos="fade-left"
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={() => toggle(i)}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="flex justify-between items-center ">
              <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
              <span className="text-2xl text-white font-bold">
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
                  <p className="mt-3 text-blue-100 leading-relaxed">{faq.a}</p>
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
