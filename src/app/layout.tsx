// src/app/layout.js
import { ThemeProvider } from '@/Contexts/ThemeContext';
import { websiteURL } from '@/utils/constants';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'SoftSell - Turn Unused Software Licenses into Cash',
  description: 'SoftSell helps businesses and individuals sell their unused software licenses quickly and securely for the best market rates.',
};

export default function RootLayout({ children }: any) {
  return (
    <>

      <html lang="en" className="scroll-smooth dark">
        <Head>
          <title>SoftSell| Buy & Sell Software Licenses Safely and Legally</title>
          <meta name="description" content="SoftSell is the trusted platform to buy and sell unused software licenses. Save money, stay compliant, and unlock software value today." />
          <meta name="keywords" content="software resale, license resale, unused software, buy software license, sell software license, license marketplace, secondhand software, B2B software resale, software compliance, software transfer, digital license marketplace" />
          <meta name="author" content="SoftSell Team" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={websiteURL} />
          <meta property="og:title" content="SoftSell | Buy & Sell Software Licenses Safely and Legally" />
          <meta property="og:description" content="Join the leading marketplace for software license resale. Trusted, legal, and secure." />
          <meta property="og:image" content={websiteURL + "soft-sell-img.jpeg"} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={websiteURL} />
          <meta name="twitter:title" content="SoftSell | Software License Marketplace" />
          <meta name="twitter:description" content="Buy & sell unused software licenses securely and save up to 70%. SoftSell is fast, trusted & compliant." />
          <meta name="twitter:image" content={websiteURL + "soft-sell-img.jpeg"} />

          <link rel="canonical" href={websiteURL} />

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/sofy-sell-img.jpeg" />
          <link rel="manifest" href="/site.webmanifest" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Soft-Sell",
                "description": "SoftSell is the trusted platform to buy and sell unused software licenses. Save money, stay compliant, and unlock software value today.",
                "url": "https://soft-sell-smoky.vercel.app",
                "logo": "https://soft-sell-smoky.vercel.app/soft-sell-img.jpeg",
                "sameAs": [
                  "https://twitter.com/soft-sell",
                  "https://www.linkedin.com/company/soft-sell",
                  "https://www.facebook.com/soft-sell"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "7060496976",
                  "contactType": "customer service",
                  "email": "support@soft-sell.com"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Software",
                  "addressLocality": "India",
                  "addressRegion": "In",
                  "postalCode": "110051",
                  "addressCountry": "In"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "INR",
                  "lowPrice": "499.9",
                  "highPrice": "9999.9"
                }
              })
            }}
          />
        </Head>
        <body className="antialiased text-gray-800">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}