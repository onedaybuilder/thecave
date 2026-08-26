import { getProducts } from "@/lib/shopify/product";
import Image from "next/image";
import Watch from "./components/Watch";
import HomeHero from "./components/HomeHero";
import Stats from "./components/stats";
import About from "./components/about";
import Collection from "./components/collection";
import Marquee from "./components/marquee";
import BuildYourWatch from "./components/buildyourwatch";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default async function Home() {
  
  return (
    <div className="h-screen">
      {/* <Watch/> */}
      <HomeHero/>
      <Stats/>
      <About/>
      <Collection/>
      <Marquee/>
      <BuildYourWatch/>
      <Footer/>
    </div>
  );
}
