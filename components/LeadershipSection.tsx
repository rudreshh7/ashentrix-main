"use client";

import Image from "next/image";

interface LeadershipMember {
  name: string;
  position: string;
  description: string;
  image: string;
  expertise: string[];
}

export default function LeadershipSection() {
  const leaders: LeadershipMember[] = [
    {
      name: "Ashish Kumar Jha",
      position: "Founder & Managing Director",
      description:
        "Visionary leader and founder of Ashentrix Solutions, dedicated to transforming business process outsourcing with innovative solutions and exceptional service delivery.",
      image: "/ashishjha.jpg",
      expertise: ["Business Strategy", "Market Leadership", "Innovation Focus"],
    },
    {
      name: "Priya Jha",
      position: "Co-Founder & Operations Lead",
      description:
        "Co-founder and operational excellence expert focused on building scalable processes and ensuring seamless service delivery for global clients.",
      image: "/priyajha.jpg",
      expertise: [
        "Operations Excellence",
        "Process Optimization",
        "Client Relations",
      ],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Leadership Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced leaders driving innovation and delivering
            exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden group hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="flex gap-6 p-6">
                <div className="relative w-52 h-64 shrink-0">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#280b57] font-medium mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {leader.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-[#280b57]/10 text-[#280b57] text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join our team of industry experts and shape the future of business
            operations
          </p>
          <button className="bg-[#280b57] text-white px-8 py-3 font-semibold hover:bg-[#280b57]/90 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
