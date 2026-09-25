

export function resolveVariant(product, selections){

  const variants = product.variants.edges.map(e => e.node)

 const match = variants.find((item) => 
  item.selectedOptions.every((i) => i.value === selections[i.name])
 )

 return match ?? null
 }
  
 


