"use client";

import { MapPin, Home, Star } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function PropertyShowcase() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const dubaiAreas = [
    {
      name: "Downtown Dubai",
      properties: "35+ Properties",
      description: "Iconic skyline views & luxury living",
      image:
        "https://bookingenginecdn.hostaway.com/listing/82948-298788-O--o5Vzz6y3zdfaqCydqLI7XRAJfJqarNICSVjfmIrqk-6734c3055c817?width=1280&quality=70&format=webp&v=2",
      features: [
        "Burj Khalifa Views",
        "Dubai Mall Access",
        "Premium Amenities",
      ],
    },
    {
      name: "Dubai Marina",
      properties: "28+ Properties",
      description: "Waterfront lifestyle & vibrant nightlife",
      image:
        "https://images.unsplash.com/photo-1514940403093-cccd37db1528?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Beach Access", "Marina Walk", "Yacht Club"],
    },
    {
      name: "Palm Jumeirah",
      properties: "15+ Properties",
      description: "Exclusive island living & beach resorts",
      image:
        "https://bookingenginecdn.hostaway.com/listing/82948-255593-MsRkoXKdJJs53yrdyi1DXCJNfXBVObI8jhg3CofcE8E-6734c323a737f?width=1280&quality=70&format=webp&v=2",
      features: ["Private Beaches", "Luxury Resorts", "Atlantis Views"],
    },
    {
      name: "Business Bay",
      properties: "22+ Properties",
      description: "Modern business hub & canal views",
      image:
        "https://bookingenginecdn.hostaway.com/listing/82948-304877-sQSjQroLqCQyJL47aFh1Z1cv5POQor2rWXUuW3I8PHc-6734c3422e004?width=1280&quality=70&format=webp&v=2",
      features: ["Canal Views", "Business District", "Modern Architecture"],
    },
    {
      name: "JBR",
      properties: "18+ Properties",
      description: "Beachfront paradise & lakeside towers",
      image:
        "https://bookingenginecdn.hostaway.com/listing/82948-371971-DERgtzLVve--2t2z30E7OB1pmd5OXgB8vbTkwM8DHxvM-67d8c8f0076b6?width=1280&quality=70&format=webp&v=2",
      features: ["Beach Living", "The Walk", "Family Friendly"],
    },
    {
      name: "City Walk",
      properties: "12+ Properties",
      description: "Trendy urban living & shopping district",
      image:
        "https://bookingenginecdn.hostaway.com/listing/82948-311704-OjApzMULn7woaqPC4fsA8xtgLC7ccq--59EqcQBwpSSo-6734c07a81135?width=1280&quality=70&format=webp&v=2",
      features: ["Gate Avenue", "Art Galleries", "Fine Dining"],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Properties Across Dubai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beachfront luxury to downtown sophistication, we manage premium
            properties in Dubai's most coveted locations
          </p>
        </motion.div>

        {/* Area Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Large Card - Downtown Dubai */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="group relative h-full min-h-[500px] rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredArea("Downtown Dubai")}
              onMouseLeave={() => setHoveredArea(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={dubaiAreas[0].image}
                  alt={dubaiAreas[0].name}
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <motion.div
                  className="space-y-4"
                  animate={{
                    y: hoveredArea === dubaiAreas[0].name ? -20 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Property Count - Hidden by default, shown on hover */}
                  <motion.div
                    className="inline-flex mb-8 items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredArea === dubaiAreas[0].name ? 1 : 0,
                      y: hoveredArea === dubaiAreas[0].name ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {dubaiAreas[0].properties}
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: hoveredArea === dubaiAreas[0].name ? -20 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className=""
                  >
                    <h3 className="text-3xl mb-2 lg:text-4xl font-bold">
                      {dubaiAreas[0].name}
                    </h3>
                    <p className="text-lg text-white/90">
                      {dubaiAreas[0].description}
                    </p>
                  </motion.div>

                  {/* Features - Hidden by default, shown on hover */}
                  <motion.div
                    className="flex flex-wrap gap-2 pt-2 absolute -bottom-4 left-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredArea === dubaiAreas[0].name ? 1 : 0,
                      y: hoveredArea === dubaiAreas[0].name ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {dubaiAreas[0].features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-lg text-sm border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Area Cards */}
          {dubaiAreas.slice(1).map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="group relative h-[240px] rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredArea(area.name)}
                onMouseLeave={() => setHoveredArea(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <motion.div
                    className="space-y-2"
                    animate={{
                      y: hoveredArea === area.name ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Property Count - Hidden by default, shown on hover */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredArea === area.name ? 1 : 0,
                        y: hoveredArea === area.name ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Home className="w-3 h-3" />
                      <span className="font-semibold">{area.properties}</span>
                    </motion.div>

                    <h3 className="text-xl font-bold">{area.name}</h3>
                    <p className="text-sm text-white/90">{area.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-black">130+</div>
              <div className="text-gray-600">Total Properties</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-black">6</div>
              <div className="text-gray-600">Prime Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-black">95%</div>
              <div className="text-gray-600">Occupancy Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
