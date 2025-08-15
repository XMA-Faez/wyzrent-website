"use client";

import { ArrowRight, Building, Sparkles, Shield, Headphones } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      step: "01",
      icon: <Sparkles className="w-6 h-6" />,
      title: "Luxury Styling & Design",
      description: "Transform your space with premium furnishings and luxury design elements that elevate your property's appeal.",
    },
    {
      step: "02", 
      icon: <Building className="w-6 h-6" />,
      title: "Expert Listing Management",
      description: "Professional listing management with dynamic pricing and strategic positioning across top platforms.",
    },
    {
      step: "03",
      icon: <Headphones className="w-6 h-6" />,
      title: "Premium Guest Experience", 
      description: "Exceptional hospitality with personalized service that generates five-star reviews and repeat bookings.",
    },
    {
      step: "04",
      icon: <Shield className="w-6 h-6" />,
      title: "Complete Property Care",
      description: "Comprehensive maintenance and professional cleaning to protect your investment and ensure guest satisfaction.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Full-Service Property Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From preparation to guest departure, we handle every detail with precision and care
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">{service.step}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
