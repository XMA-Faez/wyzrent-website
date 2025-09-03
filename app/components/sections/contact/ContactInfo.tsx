"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 58 588 5060"],
      description: "Call us anytime for immediate assistance",
      gradient: "from-green-500 to-green-600",
      delay: 0,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@wyzrent.com"],
      description: "Send us an email and we'll respond within 24 hours",
      gradient: "from-blue-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Office 419, Blue Bay Tower by Al Sayyah", "Dubai, United Arab Emirates"],
      gradient: "from-purple-500 to-purple-600",
      delay: 0.2,
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a consultation at your convenience",
      action: "Book Now",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      description: "Quick responses via WhatsApp",
      action: "Chat Now",
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Sunday - Thursday: 9AM - 6PM",
      action: "View Hours",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: method.delay }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, index) => (
                      <p key={index} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
