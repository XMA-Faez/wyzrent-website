"use client";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/ScrollVelocity";

export default function OwnerTestimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      property: "Dubai Marina Penthouse",
      rating: 5,
      text: "WYZRENT transformed my property into a revenue-generating asset. Their professional management and attention to detail exceeded all expectations. My monthly income increased by 45% within the first quarter.",
      avatar: "/api/placeholder/80/80",
      location: "Dubai Marina",
    },
    {
      name: "Sarah Johnson",
      property: "Downtown Dubai Apartment",
      rating: 5,
      text: "Outstanding service from day one. The team handles everything professionally - from guest communication to property maintenance. I receive my payments on time every month without any hassle.",
      avatar: "/api/placeholder/80/80",
      location: "Downtown Dubai",
    },
    {
      name: "Mohammed Hassan",
      property: "Business Bay Tower",
      rating: 5,
      text: "After working with larger management companies, WYZRENT's personalized approach is refreshing. They treat my property as their own and the results speak for themselves - consistently high occupancy rates.",
      avatar: "/api/placeholder/80/80",
      location: "Business Bay",
    },
    {
      name: "Elena Rodriguez",
      property: "Palm Jumeirah Villa",
      rating: 5,
      text: "The transformation of my property has been remarkable. WYZRENT's expertise in luxury staging and their understanding of the high-end market helped me achieve premium rates I never thought possible.",
      avatar: "/api/placeholder/80/80",
      location: "Palm Jumeirah",
    },
    {
      name: "David Chen",
      property: "DIFC Luxury Suite",
      rating: 5,
      text: "As an international investor, I needed a management company I could trust completely. WYZRENT delivers on every promise - transparent reporting, excellent guest relations, and consistent revenue growth.",
      avatar: "/api/placeholder/80/80",
      location: "DIFC",
    },
    {
      name: "Fatima Al-Zahra",
      property: "City Walk Penthouse",
      rating: 5,
      text: "The level of service is exceptional. From the initial property assessment to ongoing management, every interaction with WYZRENT has been professional and results-driven. Highly recommend.",
      avatar: "/api/placeholder/80/80",
      location: "City Walk",
    },
  ];

  // Split testimonials into two rows for alternating scroll directions
  const testimonialRowA = testimonials.slice(0, 3);
  const testimonialRowB = testimonials.slice(3, 6);

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

  // Animated counter hook

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <motion.div
        className="container mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Owners Say
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real experiences from property owners who trust WYZRENT with their
            luxury investments.
          </motion.p>
        </div>

        {/* Scroll-Based Velocity Testimonials */}
        <div className="mb-16 relative">
          <ScrollVelocityContainer className="w-full">
            {/* First row - scrolls right */}
            <ScrollVelocityRow baseVelocity={3} direction={1} className="py-4">
              {testimonialRowA.map((testimonial, index) => (
                <TestimonialCard
                  key={`row-a-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </ScrollVelocityRow>

            {/* Second row - scrolls left */}
            <ScrollVelocityRow baseVelocity={3} direction={-1} className="py-4">
              {testimonialRowB.map((testimonial, index) => (
                <TestimonialCard
                  key={`row-b-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
        </div>

      </motion.div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
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
    <motion.div
      className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-5 shadow-lg border border-gray-200 mx-3"
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
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
          <div className="font-semibold text-black text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-500">
            {testimonial.location} • {testimonial.property.split(" ").pop()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

