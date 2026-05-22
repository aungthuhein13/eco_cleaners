import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Promo from "../components/Promo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PromoPopup from "../components/PromoPopup";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#173B2F]">
      <PromoPopup />
      <Header />
      <Hero />
      <Services />
      <Promo />
      <Contact />
      <Footer />
    </main>
  );
}