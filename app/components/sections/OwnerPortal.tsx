"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BarChart3, Database, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../ui/Badge";

export default function OwnerPortal() {
  const features = [
    {
      id: "01",
      title: "Real-time Insights",
      description: "Stay informed about the performance of your property at any time through Host Away App",
      icon: BarChart3,
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      id: "02", 
      title: "Comprehensive Data",
      description: "Access comprehensive property insights, including revenues, check-ins, and check out",
      icon: Database,
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      id: "03",
      title: "Secure Data", 
      description: "Receive payments directly to your bank account before the 15th of each month with a detailed financial report",
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
    ]
  };

  return (
    <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gray-800 text-gray-300 border-gray-700">Management Dashboard</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Owner Portal
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent font-medium">
            Monitor and manage your property investments with comprehensive insights and real-time data
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
                <div className="absolute" style={{
                  top: '17px',
                  right: '21px',
                  left: '20px',
                  bottom: '20px'
                }}>
                  <div className="bg-white rounded-[1.5rem] overflow-hidden h-full shadow-inner">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-3 py-2 bg-gray-50">
                      <div className="text-sm relative left-5 font-medium">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-3 h-1.5 bg-green-500 rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-3 py-2 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm">Property Calendar</h3>
                        <div className="flex gap-1">
                          <button className="p-1 rounded bg-gray-100">
                            <ChevronLeft className="w-3 h-3" />
                          </button>
                          <button className="p-1 rounded bg-gray-100">
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{calendarData.currentMonth}</p>
                    </div>

                    {/* Calendar Grid */}
                    <div className="p-3 flex-1 overflow-y-auto">
                      <div className="grid grid-cols-7 gap-0.5 mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                          <div key={day} className="text-center text-[10px] text-gray-500 font-medium py-1">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      {/* Calendar Days with Bookings */}
                      <div className="grid grid-cols-7 gap-0.5">
                        {Array.from({length: 35}, (_, i) => {
                          const day = i - 6; // Start from Sunday
                          const hasBooking = day > 0 && day <= 31 && Math.random() > 0.7;
                          const booking = calendarData.bookings[Math.floor(Math.random() * calendarData.bookings.length)];
                          
                          return (
                            <motion.div
                              key={i}
                              className={`
                                aspect-square text-[10px] flex items-center justify-center rounded
                                ${day <= 0 || day > 31 
                                  ? 'text-gray-300' 
                                  : hasBooking 
                                    ? `${booking?.color} text-white font-medium` 
                                    : 'hover:bg-gray-100 cursor-pointer'
                                }
                              `}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.01 }}
                            >
                              {day > 0 && day <= 31 ? day : ''}
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Booking Legend */}
                      <div className="mt-3 space-y-1">
                        <h4 className="text-xs font-medium text-gray-700">Upcoming Bookings</h4>
                        <div className="overflow-y-auto space-y-1">
                          {calendarData.bookings.slice(0, 5).map((booking, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center justify-between p-1.5 bg-gray-50 rounded"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${booking.color}`}></div>
                                <div>
                                  <div className="text-xs font-medium">{booking.guest}</div>
                                  <div className="text-[10px] text-gray-500">Dec {booking.dates}</div>
                                </div>
                              </div>
                              <div className="text-[10px] text-gray-500">
                                {booking.guests} guests
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Monthly Stats */}
                        <div className="mt-3 pt-2 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-1">
                            <div className="bg-blue-50 p-2 rounded text-center">
                              <div className="text-xs font-bold text-blue-600">85%</div>
                              <div className="text-[10px] text-blue-500">Occupancy</div>
                            </div>
                            <div className="bg-green-50 p-2 rounded text-center">
                              <div className="text-xs font-bold text-green-600">$12,450</div>
                              <div className="text-[10px] text-green-500">Revenue</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
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
                      <p className="text-gray-300 leading-relaxed">
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
