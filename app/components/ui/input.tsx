"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { FormFieldWrapper } from "./form-field";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", required, ...props }, ref) => {
    return (
      <FormFieldWrapper label={label} error={error} required={required}>
        <input
          type={type}
          className={cn(
            "w-full px-4 py-2 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-red-500 focus:ring-red-500",
            className
          )}
          ref={ref}
          required={required}
          {...props}
        />
      </FormFieldWrapper>
    );
  }
);

Input.displayName = "Input";

export { Input }; 