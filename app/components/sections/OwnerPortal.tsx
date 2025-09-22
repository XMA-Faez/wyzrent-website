"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  BarChart3,
  Database,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import ReservationApp from "./owner-portal/ReservationApp";

export default function OwnerPortal() {
  const features = [
    {
      id: "01",
      title: "Real-time Insights",
      description:
        "Stay informed about the performance of your property at any time through Host Away App",
      icon: BarChart3,
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      id: "02",
      title: "Comprehensive Data",
      description:
        "Access comprehensive property insights, including revenues, check-ins, and check out",
      icon: Database,
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      id: "03",
      title: "Secure Data",
      description:
        "Receive payments directly to your bank account before the 15th of each month with a detailed financial report",
      icon: CreditCard,
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
    },
  ];

  // Mock calendar data
  const calendarData = {
    currentMonth: "December 2024",
    nextMonth: "January 2025",
    bookings: [
      { dates: "1-3", guest: "Sarah M.", guests: 2, color: "bg-emerald-500" },
      { dates: "5-8", guest: "John D.", guests: 4, color: "bg-blue-500" },
      { dates: "12-15", guest: "Emma L.", guests: 3, color: "bg-purple-500" },
      { dates: "18-21", guest: "Mike R.", guests: 2, color: "bg-rose-500" },
      { dates: "25-28", guest: "Lisa K.", guests: 5, color: "bg-amber-500" },
      { dates: "2-4", guest: "Alex R.", guests: 3, color: "bg-teal-500" },
      { dates: "8-11", guest: "Maria G.", guests: 2, color: "bg-indigo-500" },
      { dates: "15-17", guest: "David L.", guests: 4, color: "bg-pink-500" },
    ],
  };

  return (
    <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-t from-slate-900 to-slate-950 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {/* <Badge className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 text-blue-200 border border-blue-500/30 backdrop-blur-sm">Management Dashboard</Badge> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            Owner Portal
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-200 font-medium">
            Monitor and manage your property investments with comprehensive
            insights and real-time data
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile App Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* iPhone Frame Background */}
              <div className="relative">
                <Image
                  src="/Iphone 14 - 1.png"
                  alt="iPhone Mockup"
                  width={300}
                  height={600}
                  className="w-full h-auto z-20 relative pointer-events-none select-none"
                />

                {/* App Content Overlay */}
                <div className="absolute pointer-events-none top-2 left-[6.5%] w-[87%] h-[96%] bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-sm rounded-3xl shadow-inner overflow-hidden z-10">
                  <ReservationApp />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-blue-500/20 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {feature.id}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                        <h3 className="font-semibold text-lg text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
