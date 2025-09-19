"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Search,
  CheckCircle,
  Home,
  TrendingUp,
  Monitor,
} from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";

const steps = [
  {
    id: 1,
    title: "Get in Touch",
    description:
      "Reach out to our team for a free consultation about your property",
    icon: Phone,
    bgColor: "bg-gradient-to-b from-white to-emerald-100",
    iconColor: "text-green-800",
    mobileTextColor: "text-green-950",
  },
  {
    id: 2,
    title: "Unit Inspection",
    description:
      "Our experts evaluate your property's potential and unique features",
    icon: Search,
    bgColor: "bg-gradient-to-b from-white to-teal-100",
    iconColor: "text-teal-500",
    mobileTextColor: "text-teal-950",
  },
  {
    id: 3,
    title: "Owner Approval",
    description:
      "Review and approve our tailored management strategy for your property",
    icon: CheckCircle,
    bgColor: "bg-gradient-to-b from-white to-sky-100",
    iconColor: "text-sky-600",
    mobileTextColor: "text-sky-950",
  },
  {
    id: 4,
    title: "Rent & Listing",
    description:
      "We handle professional photography, listing creation, and pricing optimization",
    icon: Home,
    bgColor: "bg-gradient-to-b from-white to-violet-100",
    iconColor: "text-violet-600",
    mobileTextColor: "text-violet-950",
  },
  {
    id: 5,
    title: "Sit Back & Monitor",
    description:
      "Track your property's performance through our dashboard while we handle everything",
    icon: Monitor,
    bgColor: "bg-gradient-to-b from-white to-rose-100",
    iconColor: "text-rose-600",
    mobileTextColor: "text-rose-950",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 bg-stone-50">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-stone-50 to-primary/5" />

      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           {/* <Badge>Our Process</Badge> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-800">
            Simple Steps to <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-4 text-blue-950/80">
            From initial consultation to ongoing management, we handle everything so you can sit back and watch your profits grow
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Steps */}
          <div className="relative grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col items-center text-center`}
                >
                  {/* Step Number & Icon Container */}
                  <div className="relative mb-8">
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br p-[1px] shadow-sm`}
                    >
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${step.iconColor}`} />
                      </div>
                    </motion.div>

                    {/* Step Number */}
                    <div
                      className={`absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step.bgColor} ${step.iconColor} border border-white shadow`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 max-w-[200px]">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-balance">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stacking Cards */}
        <div className="md:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${step.bgColor} h-[90vh] top-20 flex rounded-3xl p-8 sticky justify-center items-center mb-12`}
                style={{
                  zIndex: index,
                }}
              >
                <div className="max-h-[400px] h-full flex flex-col justify-center items-center text-center">
                  {/* Icon */}
                  <div
                    className={`w-24 h-24 ${step.bgColor === "bg-white" ? "bg-slate-50" : "bg-white/10"} backdrop-blur-sm rounded-full flex items-center justify-center ${step.bgColor === "bg-white" ? "border border-slate-200" : ""}`}
                  >
                    <Icon className={`w-12 h-12 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4 max-w-xs">
                    <h3
                      className={`text-3xl font-bold ${step.mobileTextColor}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`${step.mobileTextColor} opacity-80 text-lg leading-relaxed`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-8">
                    <div className="flex gap-2 justify-center">
                      {steps.map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className={`h-1 w-8 rounded-full transition-all duration-300 ${
                              i <= index ? "bg-black" : "bg-black opacity-10"
                            }`}
                          />
                          {i === index && (
                            <div className="mt-2 text-xs font-medium text-black/60">
                              {i + 1}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-lg md:text-xl mb-6 text-muted-foreground">
            Ready to maximize your property's potential?
          </p>
          <Link href="/contact-us#consultation">
            <Button
              variant="primary"
              size="lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
