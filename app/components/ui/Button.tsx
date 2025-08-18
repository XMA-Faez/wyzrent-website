"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles following our design system
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-inset",
  {
    variants: {
      variant: {
        // Primary button - main CTA actions
        primary: 
          "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl focus:ring-blue-600/20",
        
        // Secondary button - alternative actions
        secondary: 
          "bg-white text-gray-900 border border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg focus:ring-gray-400/20",
        
        // Ghost button - subtle actions
        ghost: 
          "text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:ring-gray-400/20",
        
        // Outline button - secondary with more emphasis
        outline: 
          "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-600/20",
        
        // Destructive button - dangerous actions
        destructive: 
          "bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl focus:ring-red-500/20",
        
        // Success button - positive actions
        success: 
          "bg-green-600 text-white shadow-lg hover:bg-green-700 hover:shadow-xl focus:ring-green-600/20",
      },
      size: {
        // Small button - compact actions
        sm: "text-sm px-4 py-2 rounded-full",
        
        // Default button - standard actions
        default: "text-base px-6 py-3 rounded-full",
        
        // Large button - prominent CTAs
        lg: "text-lg px-8 py-4 rounded-full",
        
        // Icon only button
        icon: "w-10 h-10 rounded-full",
      },
      loading: {
        true: "cursor-not-allowed",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      loading: false,
    },
  }
);

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    loading = false, 
    children, 
    leftIcon, 
    rightIcon,
    disabled,
    ...props 
  }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, loading, className }))}
        ref={ref}
        disabled={disabled || loading}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {loading ? (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {children && <span className="ml-2">{children}</span>}
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0 transition-transform group-hover:translate-x-1">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
