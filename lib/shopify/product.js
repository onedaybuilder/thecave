import client from '@/lib/shopify/client';

const PRODUCT_QUERY = `
  query getProductByHandle($handle: String!) {
  product(handle: $handle) {
    id
    title
    description
    options {
      name
      optionValues { name }
    }
    variants(first: 250) {
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

export async function getProductByHandle(handle) {
  const { data, errors } = await client.request(PRODUCT_QUERY, {
    variables: {handle},
  });
  if (errors) throw new Error(errors.message);
  return data.product; 
}

