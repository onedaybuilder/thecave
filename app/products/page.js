 import { getProductByHandle } from "@/lib/shopify/product";
 import { resolveVariant } from "@/lib/shopify/resolveVariant";

 
 async function Products(){

    const product = await getProductByHandle('watch')
    // 1. See the exact option names/values Shopify uses
  console.log(JSON.stringify(product.options, null, 2))

  // 2. Should match — copy spellings from the log above
  const hit = resolveVariant(product, { 'Strap color': 'rose gold', 'face color': 'black' })

  // 3. Should be null — made-up value
  const miss = resolveVariant(product, { 'Strap Color': 'Purple', 'Face Color': 'Black' })

  console.log('hit:', hit)
  console.log('miss:', miss)

  return <pre>{JSON.stringify({ hit, miss }, null, 2)}</pre>
    
    return (
        <>
            
        </>
);

}
 
export default Products;