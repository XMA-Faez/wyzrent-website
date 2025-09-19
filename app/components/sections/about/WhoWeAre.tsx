"use client";

import { motion } from "motion/react";
import { Building2, Globe, Award, Users } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import TinderStack from "@/app/components/ui/TinderStack";
import Pic1 from "@/public/pics/city-walk/Pool 1.jpg";
import Pic2 from "@/public/pics/address/5-picked.jpg";
import Pic3 from "@/public/pics/1301-damac/Living 5-picked.jpg";
import Pic4 from "@/public/pics/business-bay/View.jpg";
import Pic5 from "@/public/pics/jbr/LivingRoom.jpg";

type PropertyImage = {
  id: number;
  img: string;
};

export default function WhoWeAre() {
  const [stackDimensions, setStackDimensions] = useState({
    width: 512,
    height: 320,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setStackDimensions({ width: 280, height: 200 });
      } else if (width < 768) {
        // Small tablets
        setStackDimensions({ width: 360, height: 240 });
      } else if (width < 1024) {
        // Tablets
        setStackDimensions({ width: 420, height: 280 });
      } else if (width < 1280) {
        // Small desktop
        setStackDimensions({ width: 480, height: 300 });
      } else {
        // Large desktop
        setStackDimensions({ width: 512, height: 320 });
      }
    };

    // Set initial dimensions
    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const stats = [
    { number: "90+", label: "Properties Managed", icon: Building2 },
    { number: "2", label: "Countries", icon: Globe },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Users },
  ];

  const propertyImages = [Pic1.src, Pic2.src, Pic3.src, Pic4.src, Pic5.src];

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
                We are a boutique property management company specializing in
                luxury short-term rentals in Dubai's most sought-after touristic
                destinations. With a proven track record of managing over 90
                self-owned short-term apartments in Athens, Greece, we bring our
                international expertise and commitment to excellence to the
                Dubai market.
              </p>
              <p>
                Our curated portfolio of handpicked properties allows us to
                deliver highly personalized, comprehensive management solutions
                tailored to maximize your property's value and ensure a
                seamless, stress-free experience for both owners and guests.
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
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stack of Property Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center py-10"
          >
            <div className="relative py-10">
              <TinderStack
                images={propertyImages}
                cardDimensions={stackDimensions}
              />

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
