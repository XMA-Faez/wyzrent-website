"use client";

import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Car } from "lucide-react";

export default function LocationMap() {
  const locationDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Business Bay Tower", "Business Bay, Dubai", "United Arab Emirates"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"]
    },
    {
      icon: Car,
      title: "Parking",
      details: ["Visitor parking available", "Valet service provided", "Easy metro access"]
    },
    {
      icon: Navigation,
      title: "Directions",
      details: ["5 min from Dubai Mall", "10 min from DIFC", "Near Business Bay Metro"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Business Bay, our office is easily accessible and equipped with modern facilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden shadow-lg">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm-8 0c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
                
                {/* Map content */}
                <div className="text-center z-10">
                  <div className="inline-flex p-4 bg-blue-600 rounded-full mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Bay, Dubai</h3>
                  <p className="text-gray-600 mb-4">Premium location in the business district</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View on Maps
                  </button>
                </div>

                {/* Floating pins */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/3 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {locationDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                      <detail.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
                      <div className="space-y-1">
                        {detail.details.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-gray-600 text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Visit Our Office?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule an appointment to meet our team in person and discuss your property management needs over coffee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Visit
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
