"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase";

    const variants = {
      primary:
        "bg-champagne text-obsidian hover:bg-champagne-light active:bg-champagne-dark",
      secondary:
        "bg-graphite text-platinum hover:bg-slate border border-slate",
      outline:
        "border border-champagne text-champagne hover:bg-champagne hover:text-obsidian",
      ghost:
        "text-platinum hover:text-champagne hover:bg-graphite/50",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
