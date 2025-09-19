"use client";

import { motion } from "motion/react";
import { Target, Eye, Sparkles, TrendingUp } from "lucide-react";

export default function MissionVision() {
  const sections = [
    {
      title: "Our Mission",
      icon: Target,
      content: "Our mission is to elevate the standard of luxury short-term rental management in Dubai by providing exceptional, personalized service that maximizes returns for property owners and delivers memorable stays for guests. We are dedicated to optimizing every property in our care through innovative strategies, meticulous attention to detail, and a passion for hospitality.",
      gradient: "from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      title: "Our Vision",
      icon: Eye,
      content: "Our vision is to be recognized as Dubai's leading boutique property management company, renowned for setting new benchmarks in luxury, service, and value. We aspire to build lasting partnerships with property owners and guests alike, creating a legacy of trust, excellence, and continuous growth in the dynamic short-term rental market.",
      gradient: "from-purple-500 to-purple-600",
      delay: 0.2,
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Driven by Excellence
            </h2>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: section.delay }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${section.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Excellence in Every Detail</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Trust", "Excellence", "Innovation", "Partnership"].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-2">
                    {index === 0 && "🤝"}
                    {index === 1 && "⭐"}
                    {index === 2 && "💡"}
                    {index === 3 && "🏆"}
                  </div>
                  <div className="font-semibold text-gray-900">{value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
