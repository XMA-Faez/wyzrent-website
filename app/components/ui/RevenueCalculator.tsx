"use client";

import { useState } from "react";
import { MapPin, Home, Calculator, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";
import { Badge } from "./Badge";

export default function RevenueCalculator() {
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const areas = [
    "Dubai Marina",
    "Downtown Dubai",
    "Business Bay",
    "JBR (Jumeirah Beach Residence)",
    "DIFC",
    "Palm Jumeirah",
    "Dubai Hills Estate",
    "City Walk",
    "Jumeirah",
    "Al Barsha",
  ];

  const bedroomOptions = [
    "Studio",
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4+ Bedrooms",
  ];

  const furnishingOptions = [
    "Unfurnished",
    "Semi-Furnished",
    "Fully Furnished",
    "Luxury Furnished",
  ];

  const [animatedValue, setAnimatedValue] = useState(0);

  // Base rates for different areas (AED per month)
  const baseRates: Record<string, number> = {
    "Dubai Marina": 8500,
    "Downtown Dubai": 12000,
    "Business Bay": 7500,
    "JBR (Jumeirah Beach Residence)": 9500,
    DIFC: 11000,
    "Palm Jumeirah": 15000,
    "Dubai Hills Estate": 6500,
    "City Walk": 10000,
    Jumeirah: 8000,
    "Al Barsha": 6000,
  };

  // Multipliers for bedrooms
  const bedroomMultiplier: Record<string, number> = {
    Studio: 0.7,
    "1 Bedroom": 1,
    "2 Bedrooms": 1.6,
    "3 Bedrooms": 2.3,
    "4+ Bedrooms": 3.2,
  };

  // Multipliers for furnishing
  const furnishingMultiplier: Record<string, number> = {
    Unfurnished: 0.8,
    "Semi-Furnished": 0.9,
    "Fully Furnished": 1,
    "Luxury Furnished": 1.2,
  };

  const calculateRevenue = (
    areaValue: string,
    bedroomsValue: string,
    furnishingValue: string,
  ) => {
    if (!areaValue || !bedroomsValue || !furnishingValue) return null;

    const baseRate = baseRates[areaValue] || 8000;
    const calculatedRevenue = Math.round(
      baseRate *
        bedroomMultiplier[bedroomsValue] *
        furnishingMultiplier[furnishingValue],
    );

    return calculatedRevenue;
  };

  const updateCalculation = (
    newArea: string,
    newBedrooms: string,
    newFurnishing: string,
  ) => {
    const newResult = calculateRevenue(newArea, newBedrooms, newFurnishing);
    if (newResult !== null) {
      setResult(newResult);
      setAnimatedValue(newResult);
    } else {
      setResult(null);
      setAnimatedValue(0);
    }
  };

  const handleAreaChange = (newArea: string) => {
    setArea(newArea);
    updateCalculation(newArea, bedrooms, furnishing);
  };

  const handleBedroomsChange = (newBedrooms: string) => {
    setBedrooms(newBedrooms);
    updateCalculation(area, newBedrooms, furnishing);
  };

  const handleFurnishingChange = (newFurnishing: string) => {
    setFurnishing(newFurnishing);
    updateCalculation(area, bedrooms, newFurnishing);
  };

  // Get area tier for visual feedback
  const getAreaTier = (areaName: string) => {
    const rate = baseRates[areaName] || 8000;
    if (rate >= 12000) return { tier: "Premium", color: "text-purple-600" };
    if (rate >= 9000) return { tier: "High-End", color: "text-blue-600" };
    return { tier: "Standard", color: "text-green-600" };
  };

  return (
    <section
      id="revenue-calculator"
      className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-t from-slate-950 to-slate-900"
    >
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
          >
            {/*  <Badge className="uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-blue-500/20 to-emerald-500/20 text-blue-200 border border-blue-500/30 backdrop-blur-sm"> */}
            {/*   Revenue Calculator */}
            {/* </Badge> */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
              Estimate Your Revenue
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-200 font-medium">
              Calculate your potential monthly income from luxury short-term
              rentals in Dubai
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form Section - 3 columns */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">
                  Property Details
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Area Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      value={area}
                      onChange={(e) => handleAreaChange(e.target.value)}
                      className="w-full pl-4 pr-4 py-4 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 bg-slate-800/50 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg hover:border-blue-500/50"
                    >
                      <option value="">Select Area</option>
                      {areas.map((areaOption) => {
                        const tierInfo = getAreaTier(areaOption);
                        return (
                          <option key={areaOption} value={areaOption}>
                            {areaOption} ({tierInfo.tier})
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {area && (
                    <motion.div
                      className="mt-2 text-xs text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={getAreaTier(area).color}>
                        {getAreaTier(area).tier} Location
                      </span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Bedrooms Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Property Size
                  </label>
                  <div className="relative">
                    <select
                      value={bedrooms}
                      onChange={(e) => handleBedroomsChange(e.target.value)}
                      className="w-full pl-4 pr-4 py-4 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 bg-slate-800/50 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg hover:border-blue-500/50"
                    >
                      <option value="">Select Bedrooms</option>
                      {bedroomOptions.map((bedroomOption) => (
                        <option key={bedroomOption} value={bedroomOption}>
                          {bedroomOption}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                {/* Furnishing Selection */}
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Furnishing Level
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {furnishingOptions.map((option) => {
                      const isSelected = furnishing === option;
                      return (
                        <motion.button
                          key={option}
                          onClick={() => handleFurnishingChange(option)}
                          className={`py-3 px-4 rounded-lg border text-sm font-medium text-center transition-all hover:scale-102 active:scale-98 ${
                            isSelected
                              ? "border-blue-400 bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/20"
                              : "border-slate-600/50 bg-slate-800/40 backdrop-blur-sm text-slate-200 hover:border-blue-500/50 hover:bg-slate-700/50"
                          }`}
                        >
                          {option}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Results Section - 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">
                      Revenue Estimate
                    </h3>
                  </div>

                  <AnimatePresence mode="wait">
                    {result ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        {/* Main Revenue Display */}
                        <div className="text-center p-6 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl border border-blue-400/30 shadow-lg shadow-blue-500/10">
                          <div className="text-sm text-slate-200 mb-2">
                            Estimated Monthly Revenue
                          </div>
                          <motion.div
                            className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent mb-2"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            AED {animatedValue.toLocaleString()}
                          </motion.div>
                          <div className="text-sm text-slate-300">
                            *Based on current market rates
                          </div>
                        </div>

                        {/* Property Summary */}
                        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-600/50">
                          <h4 className="text-sm font-semibold text-slate-200 mb-4">
                            Property Summary
                          </h4>
                          <div className="space-y-3">
                            <motion.div
                              className="flex items-center gap-3 p-3 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/30"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <MapPin className="w-4 h-4 text-blue-400" />
                              <div className="flex-1">
                                <span className="text-sm font-medium text-white">
                                  {area}
                                </span>
                                <div
                                  className={`text-xs ${getAreaTier(area).color}`}
                                >
                                  {getAreaTier(area).tier} Location
                                </div>
                              </div>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-3 p-3 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/30"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Home className="w-4 h-4 text-blue-400" />
                              <span className="text-sm font-medium text-white">
                                {bedrooms}
                              </span>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-3 p-3 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/30"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <span className="text-sm font-medium text-white">
                                {furnishing}
                              </span>
                            </motion.div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button variant="primary" size="lg" className="w-full">
                          Book Free Consultation
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-16"
                      >
                        <motion.div
                          className="text-blue-400 mb-6"
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Calculator className="w-20 h-20 mx-auto" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Ready to Calculate
                        </h4>
                        <p className="text-slate-200/70 text-sm leading-relaxed">
                          Select your property details above to see your
                          potential revenue estimate
                        </p>

                        {/* Progress hints */}
                        <div className="mt-6 space-y-2">
                          {!area && (
                            <div className="text-xs text-slate-300">
                              📍 Select your location first
                            </div>
                          )}
                          {area && !bedrooms && (
                            <div className="text-xs text-slate-300">
                              🏠 Choose property size
                            </div>
                          )}
                          {area && bedrooms && !furnishing && (
                            <div className="text-xs text-slate-300">
                              🛋️ Select furnishing level
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
