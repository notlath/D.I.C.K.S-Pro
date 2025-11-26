import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "bordered";
  hover?: boolean;
  id?: string;
}

export function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
  id,
}: CardProps) {
  const variants = {
    default: "bg-white shadow-lg border border-gray-100",
    glass: "bg-white/80 backdrop-blur-lg border border-white/20",
    gradient: "bg-gradient-to-br from-[#011459] to-[#2798c4] text-white",
    bordered: "bg-white border-2 border-[#2798c4]",
  };

  return (
    <div
      id={id}
      className={`rounded-2xl overflow-hidden ${variants[variant]} ${
        hover ? "hover-lift" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 md:p-8 text-center group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2798c4] to-[#4cc2f0] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#011459] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

interface TeamCardProps {
  name: string;
  role: string;
  description?: string;
}

export function TeamCard({ name, role, description }: TeamCardProps) {
  return (
    <Card className="p-6 text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#011459] to-[#2798c4] flex items-center justify-center">
        <span className="text-2xl font-bold text-white">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <h3 className="font-bold text-[#011459]">{name}</h3>
      <p className="text-[#2798c4] text-sm font-medium">{role}</p>
      {description && (
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      )}
    </Card>
  );
}

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  href?: string;
}

export function ImageCard({
  src,
  alt,
  title,
  description,
  href,
}: ImageCardProps) {
  const content = (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011459]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-bold text-lg">{title}</h3>
            {description && (
              <p className="text-white/80 text-sm mt-1">{description}</p>
            )}
          </div>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card className="p-6 text-center" variant="bordered">
      {icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#2798c4]/10 flex items-center justify-center text-[#2798c4]">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-[#011459] mb-1">
        {value}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </Card>
  );
}

interface PriceCardProps {
  title: string;
  price: string;
  features?: string[];
  highlighted?: boolean;
}

export function PriceCard({
  title,
  price,
  features,
  highlighted = false,
}: PriceCardProps) {
  return (
    <Card
      className={`p-6 md:p-8 ${
        highlighted ? "ring-2 ring-[#2798c4] scale-105" : ""
      }`}
      variant={highlighted ? "gradient" : "default"}
    >
      <h3
        className={`text-xl font-bold mb-2 ${
          highlighted ? "text-white" : "text-[#011459]"
        }`}
      >
        {title}
      </h3>
      <div
        className={`text-4xl font-bold mb-4 ${
          highlighted ? "text-white" : "text-[#2798c4]"
        }`}
      >
        {price}
      </div>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 text-sm ${
                highlighted ? "text-white/90" : "text-gray-600"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  highlighted ? "bg-[#4cc2f0]" : "bg-[#2798c4]"
                }`}
              />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
