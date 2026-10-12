import "./globals.css";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Echo Cleaners | Dry Cleaning & Alterations",
    template: "%s | Echo Cleaners",
  },
  description:
    "Professional dry cleaning, alterations, laundry, household-item cleaning, and pickup & delivery from Echo Cleaners.",
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