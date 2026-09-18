import { getProductByHandle } from "./product"


export async function resolveVariants(productVariant, selections){

  const product = await getProductByHandle()

  //console.log(product)
  product.variants.edges.map(e => e.node) 
 
}

resolveVariants({ "Strap color": "rose gold", "face color": "black" })