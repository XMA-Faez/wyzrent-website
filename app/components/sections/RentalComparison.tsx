"use client";

import Link from "next/link";
import { 
  XCircle, 
  CheckCircle2, 
  TrendingDown, 
  TrendingUp,
  Calendar,
  CalendarCheck,
  AlertCircle,
  ShieldCheck,
  Lock,
  Unlock,
  UserX,
  Users,
  Receipt,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export default function RentalComparison() {
  const longTermChallenges = [
    {
      icon: <TrendingDown className="w-5 h-5" />,
      title: "Fixed Monthly Income",
      description: "Same rental income month after month"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Year-Long Contracts",
      description: "Locked into annual lease agreements"
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Payment Uncertainty",
      description: "Risk of bounced checks and late payments"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Property Locked Down",
      description: "Can't use or sell during lease period"
    },
    {
      icon: <UserX className="w-5 h-5" />,
      title: "Tenant Wear & Tear",
      description: "Daily living damage accumulates over time"
    },
    {
      icon: <Receipt className="w-5 h-5" />,
      title: "You Pay the Bills",
      description: "Handle all utilities and maintenance costs"
    }
  ];

  const shortTermBenefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Higher Income Potential",
      description: "Premium nightly rates exceed monthly rentals"
    },
    {
      icon: <CalendarCheck className="w-5 h-5" />,
      title: "Flexible Booking",
      description: "Accept or decline bookings as you choose"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Upfront Payments",
      description: "Guests pay before arrival through secure platforms"
    },
    {
      icon: <Unlock className="w-5 h-5" />,
      title: "Sell Anytime",
      description: "List your property whenever the market is right"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Personal Use Access",
      description: "Block calendar for your own stays"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "We Handle Everything",
      description: "All bills and maintenance covered by us"
    }
  ];

  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge>Rental Comparison</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Why Short-Term Beats Long-Term
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent font-medium">
            Discover how short-term rentals transform your property into a premium income generator
          </p>
        </motion.div>

        {/* Split Comparison */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-8">
            {/* Long Term Side */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-50 via-gray-50/50 to-white rounded-t-2xl lg:rounded-2xl p-8 lg:p-10 border border-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="text-center lg:text-left mb-8">
                <div className="inline-flex items-center gap-2 text-gray-600 mb-3">
                  <XCircle className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Traditional</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent mb-2">
                  Long-Term Rental
                </h3>
                <p className="font-medium text-gray-600">The old way limits your potential</p>
              </div>

              {/* Challenges List */}
              <div className="space-y-4">
                {longTermChallenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 p-2 bg-gray-200 rounded-lg text-gray-600">
                      {challenge.icon}
                    </div>
                    <div>
                      <h4 className="font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent mb-1">
                        {challenge.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {challenge.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Short Term Side */}
            <motion.div
              className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-b-2xl lg:rounded-2xl p-8 lg:p-10 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center lg:text-left mb-4">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-white/90">Premium Choice</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Short-Term Rental
                  </h3>
                  <p className="font-medium bg-gradient-to-r from-white/95 to-white/80 bg-clip-text text-transparent">The smart way to maximize returns</p>
                </div>

                {/* Benefits List */}
                <div className="space-y-1">
                  {shortTermBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-start gap-4 p-3 rounded-xl transition-colors duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="flex-shrink-0 p-2.5 bg-white/20 backdrop-blur-sm rounded-lg transition-colors duration-300"
                      >
                        <div className="text-white">
                          {benefit.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-white/80 font-medium">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* VS Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-white via-gray-50 to-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-200/50"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-xl font-bold text-gray-900">VS</span>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
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
              Switch to Short-Term Rentals
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
