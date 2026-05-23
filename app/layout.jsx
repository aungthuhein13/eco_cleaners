import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Eco Cleaners | Premium Dry Cleaning",
  description:
    "Premium dry cleaning, laundry, alterations, and leather care in Trabuco Canyon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18172571872"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18172571872');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}