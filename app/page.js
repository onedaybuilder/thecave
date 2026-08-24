import { getProducts } from "@/lib/shopify/product";
import Image from "next/image";
import Watch from "./components/Watch";
import HomeHero from "./components/HomeHero";
import Stats from "./components/stats";
import About from "./components/about";

export default async function Home() {
  
  return (
    <div className="h-screen">
      {/* <Watch/> */}
      <HomeHero/>
      <Stats/>
      <About/>
    </div>
  );
}
