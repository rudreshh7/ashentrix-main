export default function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-[#1a1625] to-[#280b57] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We&apos;d love to hear from you! Whether you&apos;re looking to
            outsource customer support, streamline operations, or explore a
            partnership opportunity — our team is ready to assist.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-gray-200">
                We respond to all inquiries within 24 hours
              </p>
            </div>
            <div className="bg-white/10 p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm text-gray-200">
                Initial assessment and strategy discussion at no cost
              </p>
            </div>
            <div className="bg-white/10 p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Global Support</h3>
              <p className="text-sm text-gray-200">
                24/7 support across multiple time zones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
