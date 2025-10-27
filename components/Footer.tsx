"use client";

import { useState } from "react";

export default function Footer() {
  const [isFooterLangOpen, setIsFooterLangOpen] = useState(false);

  const changeLanguage = (langCode: string) => {
    // Wait for Google Translate to be fully loaded
    const checkAndTranslate = () => {
      const selectElement = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event("change"));
        setIsFooterLangOpen(false);
      } else {
        // If not loaded yet, try again after a short delay
        setTimeout(checkAndTranslate, 100);
      }
    };
    checkAndTranslate();
  };

  return (
    <footer className="bg-[#1E293B] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Top Section - Brand and Newsletter */}
        <div className="grid md:grid-cols-2 gap-16 mb-16 pb-16 border-b border-gray-700">
          <div>
            <h3 className="text-4xl font-black text-white italic mb-6">
              Ashentrix
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Leading the future of business process outsourcing with
              innovation, excellence, and transformative solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest insights, case studies,
              and industry trends.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#280b57] text-white placeholder-gray-500"
              />
              <button className="bg-[#280b57] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1f0944] transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section - 6 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Process Automation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Data Operations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#280b57] transition-colors"
                >
                  CX Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Analytics & Insights
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Industries</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Banking & Finance
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Insurance
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Retail & E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Technology & SaaS
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#who-we-are"
                  className="hover:text-[#280b57] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#who-we-are"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#thinking"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Our Thinking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  White Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Partner Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Careers & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Careers</h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Join Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Open Positions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Culture & Values
                </a>
              </li>
            </ul>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-700">
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              Global Headquarters
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              123 Business Avenue
              <br />
              Tech District, Suite 500
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email:{" "}
              <a
                href="mailto:info@ashentrix.com"
                className="text-[#280b57] hover:text-[#280b57]"
              >
                info@ashentrix.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+18885551234"
                className="text-[#280b57] hover:text-[#280b57]"
              >
                +1 (888) 555-1234
              </a>
              <br />
              Support:{" "}
              <a
                href="tel:+18885555678"
                className="text-[#280b57] hover:text-[#280b57]"
              >
                +1 (888) 555-5678
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              Business Hours
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM PST
              <br />
              Saturday: 10:00 AM - 4:00 PM PST
              <br />
              Sunday: Closed
              <br />
              <span className="text-[#280b57]">24/7 Support Available</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Ashentrix. All rights reserved worldwide.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#" className="hover:text-[#280b57] transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-[#280b57] transition-colors">
              Sitemap
            </a>
            <a href="#" className="hover:text-[#280b57] transition-colors">
              Compliance
            </a>
            <a href="#" className="hover:text-[#280b57] transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-[#280b57] transition-colors">
              Investors
            </a>
          </div>
          <div className="flex gap-3 items-center relative">
            <span className="text-xs">Available in:</span>
            <div
              className="relative"
              onMouseEnter={() => setIsFooterLangOpen(true)}
              onMouseLeave={() => setIsFooterLangOpen(false)}
            >
              <button className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#280b57] hover:border-[#280b57] transition-colors flex items-center gap-2">
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
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                English
                <svg
                  className="w-3 h-3"
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
              {isFooterLangOpen && (
                <div className="absolute bottom-full right-0 mb-2 bg-[#004D66] text-white rounded-lg shadow-xl overflow-hidden w-48 z-50">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
