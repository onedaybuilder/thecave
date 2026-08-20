 import { getProducts } from "@/lib/shopify/product";

 
 async function Products(){
     const response = await getProducts()
   
    return (
        <>
            {response.map((product) => (
            <div key={product.id}>{product.title}</div>
            ))}
        </>
);

}
 
export default Products;