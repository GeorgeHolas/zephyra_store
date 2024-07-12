const getTimestamp = () => new Date().getTime();

export const getCollections = async () => {
  const timestamp = getTimestamp();
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections?_=${timestamp}`);
  return await collections.json();
};

export const getCollectionDetails = async (collectionId: string) => {
  const timestamp = getTimestamp();
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}?_=${timestamp}`);
  return await collection.json();
};

export const getProducts = async () => {
  const timestamp = getTimestamp();
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?_=${timestamp}`);
  return await products.json();
};

export const getProductDetails = async (productId: string) => {
  const timestamp = getTimestamp();
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}?_=${timestamp}`);
  return await product.json();
};

export const getSearchedProducts = async (query: string) => {
  const timestamp = getTimestamp();
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}?_=${timestamp}`);
  return await searchedProducts.json();
};

export const getOrders = async (customerId: string) => {
  const timestamp = getTimestamp();
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}?_=${timestamp}`);
  return await orders.json();
};

export const getRelatedProducts = async (productId: string) => {
  const timestamp = getTimestamp();
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related?_=${timestamp}`);
  return await relatedProducts.json();
};

/*export const getCollections = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
};

export const getCollectionDetails = async (collectionId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching collection details for ID ${collectionId}:`, error);
    return null;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product details for ID ${productId}:`, error);
    return null;
  }
};

export const getSearchedProducts = async (query: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error searching products with query "${query}":`, error);
    return [];
  }
};

export const getOrders = async (customerId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching orders for customer ID ${customerId}:`, error);
    return [];
  }
};

export const getRelatedProducts = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching related products for product ID ${productId}:`, error);
    return [];
  }
};*/
