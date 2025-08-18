"use client";

import { motion } from "motion/react";

interface MediaLoaderProps {
  type?: "video" | "image" | "general";
  className?: string;
}

export default function MediaLoader({ type = "general", className = "" }: MediaLoaderProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div className="relative">
        {/* Spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {type === "video" && (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {type === "image" && (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function MediaLoaderSkeleton({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`bg-gray-200 ${className}`}
      animate={{
        backgroundImage: [
          "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)",
          "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)",
          "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}