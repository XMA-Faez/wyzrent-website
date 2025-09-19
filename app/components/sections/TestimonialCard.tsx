"use client";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

type Testimonials = {
  name: string;
  property: string;
  rating: number;
  text: string;
  avatar: string;
  location: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonials }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3.5 h-3.5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div className="flex-shrink-0 w-72 sm:w-80 bg-gradient-to-br from-white via-gray-50/30 to-white rounded-2xl p-5 shadow-lg border border-gray-200 hover:border-blue-200/50 mx-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-0.5">
          {renderStars(testimonial.rating)}
        </div>
        <Quote className="w-6 h-6 text-blue-600 opacity-20" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-4 text-sm whitespace-break-spaces">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <div className="font-bold text-sm bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
            {testimonial.name}
          </div>
          <div className="text-xs font-medium bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent">
            {testimonial.location} • {testimonial.property.split(" ").pop()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
