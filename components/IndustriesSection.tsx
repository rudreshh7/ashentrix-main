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
      className="relative overflow-hidden  cursor-pointer group h-96"
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
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 " />
    </div>
  );
};

export default function IndustriesSection() {
  const industries: IndustryCardProps[] = [
    { title: "Insurance", image: "/images/industries/insurance.jpg" },
    { title: "Telecom", image: "/images/industries/telecom.jpg" },
    { title: "Healthcare", image: "/images/industries/healthcare.jpg" },
    { title: "E-commerce & Retail", image: "/images/industries/ecommerce.jpg" },
    { title: "Banking & Finance", image: "/images/industries/bank.jpg" },
    { title: "IT & Software Development", image: "/images/industries/it.jpg" },
    { title: "Travel & Hospitality", image: "/images/industries/hospitality.jpg" },
    { title: "Automobiles", image: "/images/pro4.jpg" },
  ];

  return (
    <section id="industries" className="bg-[#1E293B] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-300">
            Ashentrix Solutions partners with a wide range of industries,
            helping them streamline operations and enhance customer experience
            through customized outsourcing solutions.
          </p>
        </div>

        {/* Industry Cards Grid - Centered Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            {industries.map((industry, index) => (
              <div key={index} className="w-64">
                <IndustryCard title={industry.title} image={industry.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
