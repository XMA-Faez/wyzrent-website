"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <div className="pt-20 p-4 md:pt-40 md:p-6 lg:p-8 lg:pt-24">
      <motion.section 
        className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden rounded-xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/dubai-luxury-property-poster.jpg"
            aria-label="Background video showing luxury Dubai properties"
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              // Start video from 50% of its duration
              video.currentTime = video.duration * 0.7;
            }}
          >
            <source src="https://demo1.angelostone.ca/wp-content/uploads/2025/03/Palm-apartments.mp4#t=33" type="video/mp4" />
            <source src="/dubai-luxury-properties.webm#t=35" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 flex items-end h-full">
          <div className="container mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
            <div className="max-w-2xl">
              <motion.span
                className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-white/90 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-full uppercase"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              >
                Dubai's Premium Property Management
              </motion.span>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                Turn Your Dubai Property Into a 5-Star Revenue Machine
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed font-medium bg-gradient-to-r from-white/95 to-white/80 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              >
                Average 35% higher returns than traditional rentals. Superhost management with 4.9★ guest ratings.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              >
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-white/95">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed by Dubai Tourism
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-white/95">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  110+ Luxury Properties
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-white/95">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Airbnb Superhost
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                className="mt-6 sm:mt-8"
              >
                <Link href="/contact-us#consultation">
                  <Button 
                    size="lg"
                    variant="primary"
                    rightIcon={<span aria-hidden="true">→</span>}
                    aria-label="Get your free property valuation"
                    className="bg-white text-black hover:bg-gray-300 hover:scale-105 transition-transform"
                  >
                    Get Your Free Property Valuation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
