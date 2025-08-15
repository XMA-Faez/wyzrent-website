"use client";
import { CheckCircle, Star, Users, Building2, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { NumberTicker } from "../ui/NumberTicker";

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Why Choose Us?
              </motion.h2>
              <motion.div
                className="space-y-6 text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  As <strong>homeowner property managers</strong> with a
                  personal stake in every investment, we bring unmatched
                  dedication to maintaining and maximizing your property's
                  earning potential. Our boutique, family-owned agency offers
                  the personalized service and attention to detail that large
                  corporations simply can't match.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Experience the difference of{" "}
                  <strong>direct communication</strong> with decision-makers who
                  understand your goals. No bureaucratic delays, no endless
                  phone trees – just immediate access to the experts managing
                  your property. Our global experience combined with deep local
                  Dubai market knowledge ensures your investment performs at its
                  peak.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  We're committed to building{" "}
                  <strong>long-lasting relationships</strong> founded on trust
                  and transparency. Every interaction is designed to create a
                  serene, positive experience that removes the stress from
                  property management while maximizing your returns. When you
                  choose WYZRENT, you're not just hiring a service – you're
                  partnering with a team that treats your success as our own.
                </motion.p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Users className="w-5 h-5" />
                Partner With Us Today
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main Image Container */}
            <motion.div
              className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Placeholder for team/office image */}
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  className="text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Building2 className="w-20 h-20 mx-auto mb-4 opacity-30" />
                  <p className="text-xl font-semibold">WYZRENT Team</p>
                  <p className="text-gray-300 mt-2">
                    Professional Property Management
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              value={110}
              suffix="+"
              label="Luxury Apartments"
              delay={100}
            />
            <StatCard
              icon={<Star className="w-8 h-8 text-yellow-500" />}
              value={1500}
              suffix="+"
              label="Satisfied Reviews"
              delay={200}
            />
            <StatCard
              icon={<Heart className="w-8 h-8 text-red-500" />}
              value={7}
              suffix="+"
              label="Years of Operation"
              delay={300}
            />
            <StatCard
              icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              value={4.9}
              decimalPlaces={1}
              label="Star Guest Rating"
              delay={400}
            />
          </div>
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
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  decimalPlaces?: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
        <NumberTicker value={value} decimalPlaces={decimalPlaces} suffix={suffix} />
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}
