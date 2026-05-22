import "./globals.css";

export const metadata = {
  title: "Eco Cleaners | Premium Dry Cleaning",
  description:
    "Premium dry cleaning, laundry, alterations, and leather care with eco-conscious garment care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}