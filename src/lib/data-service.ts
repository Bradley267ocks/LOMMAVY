import { Product } from '../types';
import { mockProducts } from '../data/mockProducts';

export async function getProducts(category?: string): Promise<Product[]> {
  // Simulate network delay for a more premium feel with skeletons
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (category && category !== 'all') {
    return mockProducts.filter(p => p.category === category);
  }
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts.find(p => p.id === id) || null;
}

export async function createOrder(orderData: any) {
  console.log('Order created locally:', orderData);
  return 'LOCAL-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Wishlist Logic
export function getWishlist(): string[] {
  const stored = localStorage.getItem('lommavy_wishlist');
  return stored ? JSON.parse(stored) : [];
}

export function toggleWishlist(productId: string) {
  const current = getWishlist();
  const next = current.includes(productId)
    ? current.filter(id => id !== productId)
    : [...current, productId];
  localStorage.setItem('lommavy_wishlist', JSON.stringify(next));
  return next;
}
