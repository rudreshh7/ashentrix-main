import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSpeedOptimizer from "@/components/SEO/PageSpeedOptimizer";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ashentrix.com'),
  title: {
    default: "Ashentrix Solutions - Professional Outsourcing & Business Process Management",
    template: "%s | Ashentrix Solutions"
  },
  description:
    "Leading outsourcing company in Delhi NCR, India. Expert BPO services including customer support, technical support, back office operations, data processing & analytics for Insurance, Banking, Healthcare, Telecom & E-commerce industries.",
  keywords: [
    "outsourcing services",
    "BPO company India",
    "customer support outsourcing",
    "technical support services",
    "back office operations",
    "data processing services",
    "business process management",
    "call center services",
    "Delhi NCR outsourcing",
    "Insurance BPO",
    "Banking outsourcing",
    "Healthcare BPO",
    "Telecom outsourcing",
    "E-commerce support",
    "multilingual support",
    "24/7 customer service"
  ],
  authors: [{ name: "Ashentrix Solutions" }],
  creator: "Ashentrix Solutions",
  publisher: "Ashentrix Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ashentrix.com',
    title: 'Ashentrix Solutions - Professional Outsourcing & BPO Services',
    description: 'Leading outsourcing company in Delhi NCR, India. Expert BPO services for Insurance, Banking, Healthcare, Telecom & E-commerce industries.',
    siteName: 'Ashentrix Solutions',
    images: [
      {
        url: '/images/ashentrix-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashentrix Solutions - Professional Outsourcing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashentrix Solutions - Professional Outsourcing & BPO Services',
    description: 'Leading outsourcing company in Delhi NCR, India. Expert BPO services for multiple industries.',
    images: ['/images/ashentrix-twitter-image.jpg'],
    creator: '@ashentrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Business Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.ashentrix.com" />
        <link rel="alternate" hrefLang="en" href="https://www.ashentrix.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.ashentrix.com" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />
        <meta name="theme-color" content="#280b57" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        <div id="google_translate_element"></div>
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ashentrix Solutions",
              "alternateName": "Ashentrix",
              "url": "https://www.ashentrix.com",
              "logo": "https://www.ashentrix.com/images/logo.png",
              "description": "Leading outsourcing company providing BPO services including customer support, technical support, back office operations for Insurance, Banking, Healthcare, Telecom industries.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Delhi NCR",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-971-117-9821",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "18:00"
                }
              },
              "sameAs": [
                "https://www.linkedin.com/company/ashentrix",
                "https://twitter.com/ashentrix",
                "https://www.facebook.com/ashentrix"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.5355",
                  "longitude": "77.3910"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Outsourcing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Customer Support Services",
                      "description": "24/7 multilingual customer support via voice, chat, and email"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technical Support Services",
                      "description": "End-to-end technical troubleshooting and product support"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Back Office Operations",
                      "description": "Streamlined processing and documentation services"
                    }
                  }
                ]
              }
            })
          }}
        />

        <PageSpeedOptimizer />
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'FACEBOOK_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=FACEBOOK_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

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
