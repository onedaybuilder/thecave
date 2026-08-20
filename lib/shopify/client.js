import {createStorefrontApiClient} from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: '2026-07',
  privateAccessToken: process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN
});

export default client;