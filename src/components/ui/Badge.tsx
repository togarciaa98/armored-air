import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "success" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-graphite text-silver border-slate",
    gold: "bg-champagne/10 text-champagne border-champagne/30",
    success: "bg-available/10 text-available border-available/30",
    outline: "bg-transparent text-silver border-slate",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center border font-medium uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
