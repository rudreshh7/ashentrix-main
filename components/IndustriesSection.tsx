"use client";

import { useState } from "react";
import Image from "next/image";

interface IndustryCardProps {
  title: string;
  image: string;
}

const IndustryCard = ({ title, image }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center p-8">
        <h3 className="text-3xl font-bold text-white leading-tight text-center">
          {title}
        </h3>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 rounded-lg" />
    </div>
  );
};

export default function IndustriesSection() {
  const industries: IndustryCardProps[] = [
    { title: "Banking & Finance", image: "/images/pro1.jpg" },
    { title: "Manufacturing", image: "/images/pro2.jpg" },
    { title: "Insurance", image: "/images/pro3.jpg" },
    { title: "Retail & E-commerce", image: "/images/pro4.jpg" },
    { title: "Technology & SaaS", image: "/images/pro5.jpg" },
    { title: "Logistics & Supply Chain", image: "/images/pro1.jpg" },
  ];

  return (
    <section id="industries" className="bg-[#1E293B] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Together Creating Value</h2>
          <p className="text-lg text-gray-300">
            Industries We Serve - Versatile experience across sectors
          </p>
        </div>

        {/* Industry Cards Grid - Single Row Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {industries.map((industry, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <IndustryCard title={industry.title} image={industry.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
