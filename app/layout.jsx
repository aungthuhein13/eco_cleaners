import "./globals.css";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Eco Cleaners | Premium Dry Cleaning",
  description:
    "Eco Cleaners offers dry cleaning, laundry, alterations, leather care, household items, wedding gowns, and drapery cleaning in Trabuco Canyon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-W4948XG9" />

      <body>
        <Header />

        <div className="pb-[72px] lg:pb-0">{children}</div>

        <MobileBottomBar />
      </body>
    </html>
  );
}