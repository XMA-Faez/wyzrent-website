"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="pt-20 p-4 md:pt-40 md:p-6 lg:p-8 lg:pt-24">
      <motion.section 
        className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/dubai-luxury-property-poster.jpg"
          >
            <source src="https://demo1.angelostone.ca/wp-content/uploads/2025/03/Palm-apartments.mp4" type="video/mp4" />
            <source src="/dubai-luxury-properties.webm" type="video/webm" />
          </video>
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 flex items-end h-full">
          <div className="container mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Luxury Short-Term Rental Management
              </motion.h1>
              <motion.p 
                className="text-lg text-white/80 mt-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                Premium property management for short-term rentals across Dubai.
              </motion.p>
              <motion.button 
                className="mt-8 bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Free Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
