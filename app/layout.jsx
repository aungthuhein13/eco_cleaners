import "./globals.css";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata = {
  title: "Eco Cleaners | Premium Dry Cleaning",
  description:
    "Eco Cleaners offers dry cleaning, laundry, alterations, leather care, household items, wedding gowns, and drapery cleaning in Trabuco Canyon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="pb-[72px] lg:pb-0">{children}</div>

        <MobileBottomBar />
      </body>
    </html>
  );
}