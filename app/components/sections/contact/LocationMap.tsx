"use client";

import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

export default function LocationMap() {
  const locationDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Office 419, Blue Bay Tower by Al Sayyah", "Business Bay, Dubai", "United Arab Emirates"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday - Sunday: Closed"]
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-50">
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
            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.615529071723!2d55.2699115696603!3d25.18763379860735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d28339af7%3A0x383e4374df1e942!2sBlue%20Bay%20Tower%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1756902613598!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WYZRENT Office Location - Blue Bay Tower, Business Bay, Dubai"
                />
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
        </div>
      </div>
    </section>
  );
}
