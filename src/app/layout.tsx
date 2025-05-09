// src/app/layout.js
import { ThemeProvider } from '@/Contexts/ThemeContext';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'SoftSell - Turn Unused Software Licenses into Cash',
  description: 'SoftSell helps businesses and individuals sell their unused software licenses quickly and securely for the best market rates.',
};

export default function RootLayout({ children }: any) {
  return (
    <>
      {/* <Head>
        <title>SoftSell| Buy & Sell Software Licenses Safely and Legally</title>
        <meta name="description" content="SoftReMarket is the trusted platform to buy and sell unused software licenses. Save money, stay compliant, and unlock software value today." />
        <meta name="keywords" content="software resale, license resale, unused software, buy software license, sell software license, license marketplace, secondhand software, B2B software resale, software compliance, software transfer, digital license marketplace" />
        <meta name="author" content="SoftReMarket Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soft-sell.vercel.app/" />
        <meta property="og:title" content="SoftSell | Buy & Sell Software Licenses Safely and Legally" />
        <meta property="og:description" content="Join the leading marketplace for software license resale. Trusted, legal, and secure." />
        <meta property="og:image" content="https://www.softremarket.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.softremarket.com/" />
        <meta name="twitter:title" content="SoftSell | Software License Marketplace" />
        <meta name="twitter:description" content="Buy & sell unused software licenses securely and save up to 70%. SoftSell is fast, trusted & compliant." />
        <meta name="twitter:image" content="https://www.softremarket.com/twitter-image.jpg" />

        <link rel="canonical" href="https://www.softremarket.com/" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head> */}
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-gray-800">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}