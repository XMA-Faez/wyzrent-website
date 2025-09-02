"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface BadgeProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  variant?: "default" | "animated";
  className?: string;
}

export function Badge({ 
  children, 
  variant = "animated", 
  className,
  ...props 
}: BadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6",
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      {...props}
    >
      {variant === "animated" && (
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      )}
      {children}
    </motion.div>
  );
}