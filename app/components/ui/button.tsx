"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md",
    isLoading = false,
    loadingText,
    icon,
    iconPosition = "right",
    asChild = false,
    children,
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
    
    const variants = {
      primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline: "border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500",
      ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    const Comp = asChild ? Slot : motion.button;

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...(asChild ? {} : {
          whileHover: { scale: disabled || isLoading ? 1 : 1.02 },
          whileTap: { scale: disabled || isLoading ? 1 : 0.98 }
        })}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {loadingText || children}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button }; 