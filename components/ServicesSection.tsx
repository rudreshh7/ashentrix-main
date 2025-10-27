import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Our Services</h2>
        <p className="text-lg text-[#475569] max-w-2xl mx-auto">
          Comprehensive outsourcing solutions tailored to your business needs
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#280b57] transition-all hover:shadow-lg">
          <div className="relative w-full h-40">
            <Image
              src="/images/pro2.jpg"
              alt="Customer Support"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">
              Customer Support Outsourcing
            </h3>
            <p className="text-sm text-[#475569]">
              24/7 multi-channel support delivered with excellence
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#280b57] transition-all hover:shadow-lg">
          <div className="relative w-full h-40">
            <Image
              src="/images/pro3.jpg"
              alt="Process Automation"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">
              Process & Back-office Automation
            </h3>
            <p className="text-sm text-[#475569]">
              Streamline operations with intelligent automation
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#280b57] transition-all hover:shadow-lg">
          <div className="relative w-full h-40">
            <Image
              src="/images/pro1.jpg"
              alt="Data Entry"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">
              Data Entry & Digital Ops
            </h3>
            <p className="text-sm text-[#475569]">
              Accurate, efficient digital operations management
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#280b57] transition-all hover:shadow-lg">
          <div className="relative w-full h-40">
            <Image
              src="/images/pro2.jpg"
              alt="CX Consulting"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-[#280b57] mb-2">
              CX Consulting
            </h3>
            <p className="text-sm text-[#475569]">
              Strategic guidance for exceptional customer experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
