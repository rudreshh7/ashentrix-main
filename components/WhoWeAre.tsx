import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-6">
              Ashentrix is a global leader in business process outsourcing and
              automation. We partner with enterprises to transform their
              operations through intelligent solutions that combine human
              expertise with cutting-edge technology.
            </p>
            <p className="text-lg text-[#475569] leading-relaxed mb-6">
              With over a decade of experience serving Fortune 500 companies
              across 6 continents, we deliver measurable results that drive
              growth, reduce costs, and enhance customer experiences.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  500+
                </div>
                <p className="text-sm text-[#475569] uppercase tracking-wide">
                  Clients Worldwide
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  15+
                </div>
                <p className="text-sm text-[#475569] uppercase tracking-wide">
                  Years Experience
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#280b57] mb-2">
                  98%
                </div>
                <p className="text-sm text-[#475569] uppercase tracking-wide">
                  Client Retention
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/pro1.jpg"
              alt="Ashentrix Team"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
