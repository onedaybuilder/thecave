import client from '@/lib/shopify/client';

const PRODUCTS_QUERY = `
  query Products {
    products(first: 10) {
      edges { node 
              { id title handle description featuredImage  
                { url altText width height } priceRange { minVariantPrice { amount currencyCode }
  maxVariantPrice { amount currencyCode } } } }
    }
  }
`;

export async function getProducts() {
  const { data, errors } = await client.request(PRODUCTS_QUERY);
  if (errors) throw new Error(errors.message);
  return data.products.edges.map(edge => edge.node);
}
