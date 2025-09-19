"use client";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/Button";
import Pic from "@/public/pics/palm/pool.jpg";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Pic.src})`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Make the WYZ choice for your property today.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/contact-us#consultation">
            <Button
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="px-10 bg-white text-black border-white hover:bg-gray-100"
            >
              Get Started Today
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-center gap-8 md:gap-16 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-3 bg-white/5 backdrop-blur-xs px-4 py-3 rounded-full border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Phone className="w-5 h-5 text-blue-300" />
            <span className="text-xs md:text-lg text-white">
              Free Consultation
            </span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3 bg-white/5 backdrop-blur-xs px-4 py-3 rounded-full border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-5 h-5 text-emerald-300" />
            <span className="text-xs md:text-lg text-white">
              Online Support
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
