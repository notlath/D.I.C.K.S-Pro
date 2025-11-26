import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "gradient" | "dark" | "transparent";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-gray-50",
    gradient: "gradient-primary text-white",
    dark: "bg-[#011459] text-white",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto container-padding">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-[#011459]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-24 h-1 rounded-full mt-6 ${centered ? "mx-auto" : ""} ${
          light ? "bg-[#4cc2f0]" : "bg-[#2798c4]"
        }`}
      />
    </div>
  );
}
