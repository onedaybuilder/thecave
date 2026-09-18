import client from '@/lib/shopify/client';

const PRODUCT_QUERY = `
  query getProductByHandle {
  product(handle: "watch") {
    id
    title
    description
    options {
      name
      optionValues { name }
    }
    variants(first: 10) {
      edges {
        cursor
        node {
          id
          title
          quantityAvailable
          availableForSale
          price {
            amount
            currencyCode
          }
          selectedOptions { 
            name 
            value
          }
        }
      }
    }
  }
}
`;

export async function getProductByHandle() {
  const { data, errors } = await client.request(PRODUCT_QUERY);
  if (errors) throw new Error(errors.message);
  return data.product; 
}

