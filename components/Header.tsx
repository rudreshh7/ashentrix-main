"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const changeLanguage = (langCode: string) => {
    // Use the global function from layout
    if (typeof window !== "undefined" && (window as any).changeGoogleLanguage) {
      (window as any).changeGoogleLanguage(langCode);
      setIsLanguageOpen(false);
    } else {
      // Fallback if window function not ready yet
      setTimeout(() => changeLanguage(langCode), 200);
    }
  };

  return (
    <>
      <header className="bg-[#1a1625] border-b border-[#280b57]/30 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-3 py-6">
            <div className="flex items-center">
              <span className="text-3xl font-black text-white tracking-tight italic">
                Ashentrix
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("who-we-are")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1 py-2">
                  Who We Are
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("what-we-do")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1 py-2">
                  What We Do
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <a
                href="#thinking"
                className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide py-2"
              >
                Our Thinking
              </a>
              <a
                href="#case-studies"
                className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide py-2"
              >
                Case Studies
              </a>

              {/* Language Selector */}
              <div
                className="relative"
                onMouseEnter={() => setIsLanguageOpen(true)}
                onMouseLeave={() => setIsLanguageOpen(false)}
              >
                <button className="text-gray-300 hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1 py-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  EN
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-[#004D66] text-white rounded-lg shadow-xl overflow-hidden w-48 z-50">
                    <button
                      onClick={() => changeLanguage("en")}
                      className="block w-full text-left px-4 py-3 hover:bg-[#00384D] transition-colors text-[#38BDF8]"
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("es")}
                      className="block w-full text-left px-4 py-3 hover:bg-[#00384D] transition-colors"
                    >
                      Español
                    </button>
                    <button
                      onClick={() => changeLanguage("zh-CN")}
                      className="block w-full text-left px-4 py-3 hover:bg-[#00384D] transition-colors"
                    >
                      简体中文
                    </button>
                    <button
                      onClick={() => changeLanguage("fr")}
                      className="block w-full text-left px-4 py-3 hover:bg-[#00384D] transition-colors"
                    >
                      Français
                    </button>
                    <button
                      onClick={() => changeLanguage("de")}
                      className="block w-full text-left px-4 py-3 hover:bg-[#00384D] transition-colors"
                    >
                      Deutsch
                    </button>
                  </div>
                )}
              </div>
            </nav>

            <a
              href="#contact"
              className="bg-[#280b57] text-white px-8 py-3 text-sm font-semibold hover:bg-[#1f0944] transition-all uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944] rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Full-screen Mega Menu Overlay */}
      <div
        className={`fixed left-0 right-0 bg-[#1a1625]/98 backdrop-blur-md border-b border-[#280b57]/30 transition-all duration-500 ease-in-out z-40 ${
          activeMenu
            ? "top-[88px] opacity-100 visible"
            : "top-0 opacity-0 invisible"
        }`}
        style={{ maxHeight: activeMenu ? "600px" : "0" }}
        onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-12 py-12">
          {/* Who We Are Menu */}
          {activeMenu === "who-we-are" && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-4 gap-12">
                <div className="col-span-1">
                  <h3 className="text-xs uppercase tracking-wider text-white font-semibold mb-6">
                    Who We Are
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Discover our story, values, and the people behind our
                    success.
                  </p>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-cols-3 gap-8">
                    <a
                      href="#who-we-are"
                      className="group p-6 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#280b57]/10 flex items-center justify-center mb-4 group-hover:bg-[#280b57]/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-lg">
                        Our Story
                      </h3>
                      <p className="text-sm text-gray-400">
                        Journey from vision to industry leadership
                      </p>
                    </a>
                    <a
                      href="#who-we-are"
                      className="group p-6 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#280b57]/10 flex items-center justify-center mb-4 group-hover:bg-[#280b57]/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-lg">
                        Leadership Team
                      </h3>
                      <p className="text-sm text-gray-400">
                        Meet the visionaries driving innovation
                      </p>
                    </a>
                    <a
                      href="#who-we-are"
                      className="group p-6 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#280b57]/10 flex items-center justify-center mb-4 group-hover:bg-[#280b57]/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-lg">
                        Our Values
                      </h3>
                      <p className="text-sm text-gray-400">
                        Principles that guide everything we do
                      </p>
                    </a>
                    <a
                      href="#contact"
                      className="group p-6 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#280b57]/10 flex items-center justify-center mb-4 group-hover:bg-[#280b57]/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-lg">
                        Careers
                      </h3>
                      <p className="text-sm text-gray-400">
                        Join our team and shape the future
                      </p>
                    </a>
                    <a
                      href="#who-we-are"
                      className="group p-6 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#280b57]/10 flex items-center justify-center mb-4 group-hover:bg-[#280b57]/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-lg">
                        Global Presence
                      </h3>
                      <p className="text-sm text-gray-400">
                        Worldwide reach, local expertise
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* What We Do Menu */}
          {activeMenu === "what-we-do" && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-4 gap-12">
                <div className="col-span-1">
                  <h3 className="text-xs uppercase tracking-wider text-white font-semibold mb-6">
                    What We Do
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-8">
                    Comprehensive solutions designed to transform your business
                    operations and drive growth.
                  </p>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm text-white font-semibold hover:text-[#280b57] group"
                  >
                    Explore All Services
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-6">
                        Core Services
                      </h4>
                      <div className="space-y-4">
                        <a href="#services" className="block group">
                          <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                            Customer Support
                          </h3>
                          <p className="text-sm text-gray-400">
                            24/7 multichannel support solutions
                          </p>
                        </a>
                        <a href="#services" className="block group">
                          <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                            Process Automation
                          </h3>
                          <p className="text-sm text-gray-400">
                            Intelligent workflow optimization
                          </p>
                        </a>
                        <a href="#services" className="block group">
                          <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                            Data Operations
                          </h3>
                          <p className="text-sm text-gray-400">
                            Accurate data management
                          </p>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-6">
                        Industries We Serve
                      </h4>
                      <div className="space-y-4">
                        <a href="#industries" className="block group">
                          <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                            Banking & Finance
                          </h3>
                          <p className="text-sm text-gray-400">
                            Secure financial solutions
                          </p>
                        </a>
                        <a href="#industries" className="block group">
                          <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                            Technology & SaaS
                          </h3>
                          <p className="text-sm text-gray-400">
                            Scale your tech business
                          </p>
                        </a>
                        <a href="#industries" className="block group">
                          <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                            Retail & E-commerce
                          </h3>
                          <p className="text-sm text-gray-400">
                            Seamless customer experiences
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#280b57]/5 to-[#280b57]/10 p-6">
                      <h4 className="font-semibold text-white mb-3">
                        Need Custom Solutions?
                      </h4>
                      <p className="text-sm text-gray-400 mb-4">
                        Let&apos;s discuss how we can tailor our services to
                        your unique business needs.
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm text-white font-semibold hover:text-[#280b57]"
                      >
                        Contact Us
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
