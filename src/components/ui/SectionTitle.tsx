
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  titleSize?: "small" | "medium" | "large";
  eyebrowClassName?: string;
  descriptionClassName?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  titleSize = "medium",
  className,
  eyebrowClassName,
  descriptionClassName,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
          "mx-0": align === "left" || align === "right",
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className={cn("inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in", eyebrowClassName)}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-bold tracking-tight text-balance animate-fade-in delayed-100",
          {
            "text-3xl md:text-4xl": titleSize === "medium",
            "text-2xl md:text-3xl": titleSize === "small",
            "text-4xl md:text-5xl xl:text-6xl": titleSize === "large",
          }
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg text-muted-foreground text-balance animate-fade-in delayed-200", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
