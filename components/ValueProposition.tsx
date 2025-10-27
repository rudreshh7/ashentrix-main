import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Process outsourcing designed for performance
          </h2>
          <p className="text-lg text-[#475569]">
            Powered by people, perfected by technology
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/images/pro2.jpg"
                alt="Efficiency at Scale"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4 tracking-tight">
                Efficiency at Scale
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Enhance your workflow with scalable outsourcing solutions
                powered by smart automation.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/images/pro3.jpg"
                alt="Quality Assured"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4 tracking-tight">
                Quality Assured
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Delivering efficiency, scalability, and excellence in every
                process we touch.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden border border-gray-300 hover:border-[#280b57] transition-all hover:shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/images/pro1.jpg"
                alt="Cost Optimization"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4 tracking-tight">
                Cost Optimization
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Reduce operational costs while maintaining world-class service
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
