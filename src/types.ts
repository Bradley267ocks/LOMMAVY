/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'handbags' | 'wigs' | 'bundles' | 'straight wigs' | 'curly wigs' | 'lace front wigs' | 'hair bundles' | 'accessories';
  images: string[];
  featured?: boolean;
  stock: number;
  rating: number;
  specs?: Record<string, string>;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
}
