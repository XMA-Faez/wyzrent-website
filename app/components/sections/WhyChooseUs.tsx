"use client";
import { Crown, MessageSquare, Shield, Award } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import Pic from "@/public/pics/business-bay/View.jpg"

type LayoutStyle = "grid" | "minimal" | "elegant";

export default function WhyChooseUs() {
  // FEATURE FLAG: Change this to switch between layouts
  const LAYOUT_STYLE: LayoutStyle = "minimal"; // Options: "grid", "minimal", "elegant"

  const benefits = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Homeowner Property Managers",
      description:
        "Personal stake in every investment with unmatched dedication",
      color: "text-amber-600",
      titleColor: "text-amber-900 group-hover:text-amber-950",
      bgColor: "bg-amber-50/50",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication",
      description:
        "Immediate access to decision-makers, no bureaucratic delays",
      color: "text-blue-600",
      titleColor: "text-blue-900 group-hover:text-blue-950",
      bgColor: "bg-blue-50/50",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Boutique Family Agency",
      description: "Personalized service large corporations can't match",
      color: "text-emerald-600",
      titleColor: "text-emerald-900 group-hover:text-emerald-950",
      bgColor: "bg-emerald-50/50",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Long-lasting Relationships",
      titleColor: "text-purple-900 group-hover:text-purple-950",
      description: "Built on trust, transparency, and your success",
      color: "text-purple-600",
      bgColor: "bg-purple-50/50",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-stone-50 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Header and Benefits */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <motion.div
              className="mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-900">
                Why Choose WYZRENT?
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent font-medium">
                We're property owners ourselves, bringing a personal touch to
                professional management
              </p>
            </motion.div>

            {/* Benefits Section - Dynamic based on LAYOUT_STYLE */}
            {LAYOUT_STYLE === "grid" && (
              // Layout 1: Clean Grid (Current - but refined)
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 30, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div className={`${benefit.bgColor} p-4 rounded-lg h-full shadow-sm hover:shadow-md transition-shadow duration-300`}>
                      <div className="">
                        {/* Icon */}
                        <motion.div
                          className={`inline-flex ${benefit.bgColor} rounded-lg group-hover:scale-105 hover:rotate-1 transition-transform duration-300 flex-shrink-0`}
                        >
                          <div className={benefit.color}>{benefit.icon}</div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className={`mt-3 text-lg font-semibold mb-2 ${benefit.titleColor}`}>
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            )}

            {LAYOUT_STYLE === "minimal" && (
              // Layout 2: Minimal List with Side Borders
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="">
                      <div className="flex items-start gap-4">
                        <div className="">
                          <div className={`p-2 ${benefit.color}`}>{benefit.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {LAYOUT_STYLE === "elegant" && (
              // Layout 3: Elegant Cards with Numbering
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-sm font-semibold text-blue-900">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-blue-600">{benefit.icon}</div>
                            <h3 className="text-base font-semibold text-gray-900">
                              {benefit.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed pl-9">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] relative">
                <Image
                  src={Pic}
                  alt="Luxury property management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/contact-us#consultation">
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
