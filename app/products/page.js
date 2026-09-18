 import { getProductByHandle, getProducts } from "@/lib/shopify/product";
 import { resolveVariants } from "@/lib/shopify/resolveVariant";

 
 async function Products(){
     const response = await getProductByHandle()
     const variantResolve = await resolveVariants()

     
     console.log(variantResolve)
   
    return (
        <>
            {/* {response.map((product) => (
            <div key={product.id}>{product.title}</div>
            ))} */}
        </>
);

}
 
export default Products;