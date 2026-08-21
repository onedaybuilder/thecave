import { getProducts } from "@/lib/shopify/product";
import Image from "next/image";
import Watch from "./components/Watch";
import HomeHero from "./components/HomeHero";

export default async function Home() {
  
  return (
    <>
      {/* <Watch/> */}
      <HomeHero/>
    </>
  );
}
