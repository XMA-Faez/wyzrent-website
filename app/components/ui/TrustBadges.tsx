"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, Heart, Building2, Users } from "lucide-react";
import { NumberTicker } from "./NumberTicker";
import { Badge } from "./Badge";
import AirbnbSuperhostBadge from "@/public/airbnb-superhost-badge.png";
import Feather from "@/public/feather.png";
import FeatherRight from "@/public/feather-right.png";
import QualityServiceBadge from "@/public/quality-service-bg-removed.png";

export default function TrustBadges() {
  return (
    <motion.section
      className="px-4 md:px-6 lg:px-10 py-16 sm:py-20 bg-stone-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <Badge>Trust & Excellence</Badge> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-blue-900">
            Recognized Excellence in Hospitality
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent font-medium">
            Trusted by leading platforms and thousands of satisfied guests
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {/* Airbnb Superhost Badge */}
          <motion.div
            className="group relative w-full md:w-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300">
              <Image
                src={AirbnbSuperhostBadge}
                alt="Airbnb Superhost"
                className="h-20 sm:h-24 w-auto mx-auto"
              />
              <div className="mt-3 text-center">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Certified</div>
                <div className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Superhost Status</div>
              </div>
            </div>
          </motion.div>

          {/* Guest Favorite Badge */}
          <motion.div
            className="group relative w-full md:w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-white to-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-4">
                {/* Left Laurel */}
                <Image src={Feather} alt="Laurel" className="opacity-70 w-8" />

                {/* Rating */}
                <motion.div 
                  className="text-5xl sm:text-6xl font-bold bg-gradient-to-r"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                >
                  4.92
                </motion.div>

                {/* Right Laurel */}
                <Image
                  src={FeatherRight}
                  alt="Laurel"
                  className="opacity-70 w-8"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                    viewport={{ once: true }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Title */}
              <div className="text-center">
                <div className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-1">
                  Guest Favorite
                </div>

                {/* Subtitle */}
                <div className="text-xs font-medium bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent leading-tight max-w-64 mx-auto">
                  One of the most loved homes on Airbnb based on ratings, reviews,
                  and reliability
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative w-full md:w-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300">
              <Image
                src={QualityServiceBadge}
                alt="Quality Service Badge"
                className="h-24 sm:h-28 md:h-32 w-auto mx-auto"
              />
              <div className="mt-3 text-center">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Premium</div>
                <div className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Service Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <Building2 className="w-6 h-6 mx-auto mb-2 text-teal-600" />
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">110+</div>
            <div className="text-xs text-gray-600 font-medium mt-1">Luxury Apartments</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">1500+</div>
            <div className="text-xs text-gray-600 font-medium mt-1">Satisfied Reviews</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <Heart className="w-6 h-6 mx-auto mb-2 text-rose-500" />
            <div className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">7+</div>
            <div className="text-xs text-gray-600 font-medium mt-1">Years of Operation</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <Building2 className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">95%</div>
            <div className="text-xs text-gray-600 font-medium mt-1">Occupancy Rate</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

