import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Ashentrix Solutions - Professional Outsourcing & Business Process Management",
  description:
    "Ashentrix Solutions, based in Delhi NCR, India, provides professional outsourcing and business process management services to global enterprises across Insurance, Telecom, Healthcare, Finance, and more industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        <div id="google_translate_element"></div>
        <Header />
        {children}
        <Footer />

        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,pt,ja,ko,es,de,zh-CN,fr,tr,nl,id,it,th,vi',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
              
              window.changeGoogleLanguage = function(langCode) {
                var select = document.querySelector('.goog-te-combo');
                if (select) {
                  select.value = langCode;
                  select.dispatchEvent(new Event('change'));
                } else {
                  setTimeout(function() {
                    window.changeGoogleLanguage(langCode);
                  }, 100);
                }
              };
            `,
          }}
        />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            #google_translate_element {
              position: fixed;
              top: -1000px;
              left: -1000px;
              opacity: 0;
              pointer-events: none;
            }
            .goog-te-banner-frame,
            .goog-te-balloon-frame {
              display: none !important;
            }
            body {
              top: 0 !important;
            }
          `,
          }}
        />
      </body>
    </html>
  );
}
