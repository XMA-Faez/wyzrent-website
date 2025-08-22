"use client";

import { motion } from "motion/react";
import { Building2, Globe, Award, Users } from "lucide-react";
import Image from "next/image";

export default function WhoWeAre() {
  const stats = [
    { number: "90+", label: "Properties Managed", icon: Building2 },
    { number: "2", label: "Countries", icon: Globe },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Users },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We are a boutique property management company specializing in luxury short-term 
                rentals in Dubai's most sought-after touristic destinations. With a proven track 
                record of managing over 90 self-owned short-term apartments in Athens, Greece, 
                we bring our international expertise and commitment to excellence to the Dubai market.
              </p>
              <p>
                Our curated portfolio of handpicked properties allows us to deliver highly 
                personalized, comprehensive management solutions tailored to maximize your 
                property's value and ensure a seamless, stress-free experience for both 
                owners and guests.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"
                alt="Luxury property in Dubai"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}