"use client";

import { ArrowRight, Building, Sparkles, Shield, Heart } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Luxury Styling & Design",
      description: "Transform your space with premium furnishings and luxury design elements that elevate your property's appeal.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Expert Listing Management",
      description: "Professional listing management with dynamic pricing and strategic positioning across top platforms.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Premium Guest Experience", 
      description: "Exceptional hospitality with personalized service that generates five-star reviews and repeat bookings.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Complete Property Care",
      description: "Comprehensive maintenance and professional cleaning to protect your investment and ensure guest satisfaction.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-stone-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
        >
           {/* <Badge>Premium Management Solutions</Badge> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-900">
            Full-Service Property Management
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent font-medium">
            From preparation to guest departure, we handle every detail with precision and care
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={ `group ${service.bgColor}` }
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="p-6 bg-gradient-to-br from-white via-gray-50/30 to-white rounded-xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-200/50 transition-all duration-300 h-full backdrop-blur-sm hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div 
                    className={`flex-shrink-0 p-3 ${service.bgColor} rounded-lg group-hover:scale-105 hover:rotate-1 transition-transform duration-300`}
                  >
                    <div className={service.color}>
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/contact-us#consultation">
            <Button 
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Your Free Property Valuation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
