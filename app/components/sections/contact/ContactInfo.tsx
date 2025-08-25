"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 50 123 4567", "+30 210 123 4567"],
      description: "Call us anytime for immediate assistance",
      gradient: "from-green-500 to-green-600",
      delay: 0,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@wyzrent.com", "support@wyzrent.com"],
      description: "Send us an email and we'll respond within 24 hours",
      gradient: "from-blue-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Business Bay, Dubai", "United Arab Emirates"],
      description: "Visit our office for in-person consultations",
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
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our team of property management experts
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Quick Actions
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <action.icon className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{action.title}</div>
                      <div className="text-xs text-gray-600">{action.description}</div>
                    </div>
                    <div className="text-xs text-blue-600 font-medium">{action.action}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
