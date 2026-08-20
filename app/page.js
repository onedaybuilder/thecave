import { getProducts } from "@/lib/shopify/product";
import Image from "next/image";

export default async function Home() {
  const response = await getProducts()
  console.log(response)
  return (
    <>

    </>
  );
}
