import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HomePage/Hero/Hero";
import MenuOptions from "@/components/HomePage/MenuOptions/MenuOptions";
import Mission from "@/components/HomePage/Mission/Mission";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/HomePage/Reviews/Reviews";
import SpecialOffer from "@/components/HomePage/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <SpecialOffer />
      <MenuOptions />
      <Reviews />
    </main>
  );
}
