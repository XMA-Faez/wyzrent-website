"use client";
import { CheckCircle, Star, Users, Building2, TrendingUp, Heart, Crown, MessageSquare, Shield, Award, StarIcon, Building, Stars, StarsIcon } from "lucide-react";
import { motion } from "motion/react";
import { NumberTicker } from "../ui/NumberTicker";
import { Button } from "../ui/Button";
import { BiStar } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { FaStar, FaUser } from "react-icons/fa";
import { RiBuilding2Fill, RiBuilding2Line } from "react-icons/ri";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Homeowner Property Managers",
      description: "Personal stake in every investment with unmatched dedication",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication", 
      description: "Immediate access to decision-makers, no bureaucratic delays",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Boutique Family Agency",
      description: "Personalized service large corporations can't match", 
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Long-lasting Relationships",
      description: "Built on trust, transparency, and your success",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full uppercase"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Difference
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Why Choose WYZRENT?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent font-medium">
            We're property owners ourselves, bringing a personal touch to professional management
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
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
                <div className="text-center">
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex p-3 ${benefit.bgColor} rounded-lg mb-4 group-hover:scale-105 hover:rotate-1 transition-transform duration-300`}
                  >
                    <div className={benefit.color}>
                      {benefit.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="primary"
            rightIcon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          >
            Schedule Your Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  suffix = "",
  label,
  delay = 0,
  decimalPlaces = 0,
  bgColor = "bg-gray-50",
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  decimalPlaces?: number;
  bgColor?: string;
}) {
  return (
    <motion.div
      className={`text-center p-4 sm:p-5 rounded-2xl ${bgColor} border border-white/50 shadow-sm hover:shadow-md transition-shadow`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-center mb-3 hover:scale-110 hover:rotate-1 transition-transform duration-300"
      >
        {icon}
      </motion.div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1.5">
        <NumberTicker value={value} decimalPlaces={decimalPlaces} suffix={suffix} />
      </div>
      <div className="text-sm sm:text-base font-medium bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">{label}</div>
    </motion.div>
  );
}
