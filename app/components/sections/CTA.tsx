"use client";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Make the{" "}
          <motion.span
            className="text-blue-600"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            WYZ
          </motion.span>{" "}
          choice for your property today.
        </motion.h2>

        {/* Features */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-lg">Free Consultation</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-lg">24/7 Online Support</span>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Today
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}

