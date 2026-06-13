import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MenuOptions from "@/components/MenuOptions/MenuOptions";
import Mission from "@/components/Mission/Mission";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/Reviews/Reviews";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <SpecialOffer />
      <MenuOptions />
      <Reviews />
      <Footer />
    </main>
  );
}
