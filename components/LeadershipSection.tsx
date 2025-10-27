"use client";

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
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      description: "20+ years of experience in operational transformation and strategic consulting. Former partner at leading consulting firms.",
      image: "/images/leader1.jpg",
      expertise: ["Strategic Planning", "Operations Excellence", "Digital Transformation"]
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      description: "Technology visionary with expertise in AI, automation, and enterprise systems. Led digital initiatives for Fortune 500 companies.",
      image: "/images/leader2.jpg",
      expertise: ["AI & Automation", "Enterprise Architecture", "Innovation Strategy"]
    },
    {
      name: "Michael Anderson",
      position: "Head of Operations",
      description: "Operations specialist with deep experience in process optimization and quality management across multiple industries.",
      image: "/images/leader3.jpg",
      expertise: ["Process Optimization", "Quality Management", "Lean Six Sigma"]
    },
    {
      name: "Sarah Chen",
      position: "Director of Client Success",
      description: "Client relationship expert ensuring successful project delivery and long-term partnerships with global enterprises.",
      image: "/images/leader4.jpg",
      expertise: ["Client Relations", "Project Management", "Business Development"]
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Leadership Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced leaders driving innovation and delivering exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-[#280b57] to-[#1a0a3e] flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 flex items-center justify-center text-white text-4xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join our team of industry experts and shape the future of business operations
          </p>
          <button className="bg-[#280b57] text-white px-8 py-3 font-semibold hover:bg-[#280b57]/90 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}