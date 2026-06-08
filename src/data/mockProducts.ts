import { Product } from '@/src/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Quilted Noir',
    description: 'A timeless quilted leather handbag with gold-chain strap and signature hardware. Perfectly tailored for evening galas and corporate elegance.',
    price: 1250,
    category: 'handbags',
    images: ['/src/assets/images/category_handbags_1780845823024.png'],
    featured: true,
    stock: 5,
    rating: 4.8,
    specs: {
      material: 'Genuine Quilted Leather',
      dimensions: '25cm x 15cm x 8cm',
      hardware: 'Antique Gold Tone'
    }
  },
  {
    id: '2',
    name: 'Midnight Silk Brazilian',
    description: 'Premium grade 12A Brazilian hair wig, 22 inches of silk-straight elegance. Features a pre-plucked natural hairline and high-def lace.',
    price: 3500,
    category: 'straight wigs',
    images: ['/src/assets/images/category_wigs_1780845838002.png'],
    featured: true,
    stock: 3,
    rating: 4.9,
    specs: {
      type: '13x4 Frontal',
      density: '180%',
      length: '22 Inches'
    }
  },
  {
    id: '3',
    name: 'Royal Wave Bundles',
    description: 'Three bundles of 100% virgin Brazilian body wave hair. Triple wefted for maximum volume and zero shedding.',
    price: 1800,
    category: 'hair bundles',
    images: ['/src/assets/images/category_bundles_1780845850897.png'],
    featured: true,
    stock: 10,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Golden Hour Clutch',
    description: 'Exquisite evening clutch with gold embroidery and silk satin lining. A statement piece for any formal outfit.',
    price: 850,
    category: 'handbags',
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fd111c36?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 8,
    rating: 4.5
  },
  {
    id: '5',
    name: 'Curly Empress Wig',
    description: 'Glueless deep wave frontal wig, pre-plucked with natural hairline. Effortless curls that maintain bounce for months.',
    price: 4200,
    category: 'curly wigs',
    images: ['https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800'],
    featured: true,
    stock: 2,
    rating: 5.0
  },
  {
    id: '101',
    name: 'Premium Wig Cap (2-Pack)',
    description: 'Breathable, ultra-thin nylon wig caps for a secure and natural fit under any hairpiece.',
    price: 120,
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 50,
    rating: 4.9
  },
  {
    id: '102',
    name: 'Silk Detangling Brush',
    description: 'Professional grade wide-tooth brush designed specifically for high-end virgin hair extensions.',
    price: 250,
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1590159445619-3253b26c076f?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 30,
    rating: 4.8
  },
  {
    id: '103',
    name: 'Matching Luxe Wallet',
    description: 'Sleek leather wallet that perfectly complements the Classic Quilted collection.',
    price: 450,
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 15,
    rating: 4.7
  },
  {
    id: '7',
    name: 'Tote of Elegance',
    description: 'Spacious saffiano leather tote with polished gold hardware. The ultimate companion for a high-powered career.',
    price: 1550,
    category: 'handbags',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'],
    featured: true,
    stock: 4,
    rating: 4.9
  },
  {
    id: '11',
    name: 'Oceanic Wave Frontal',
    description: 'Large 13x6 HD lace frontal wig. Wet and wavy texture that mimics natural island curls.',
    price: 4500,
    category: 'lace front wigs',
    images: ['https://images.unsplash.com/photo-1634449591010-871ee5d06b7d?auto=format&fit=crop&q=80&w=800'],
    featured: true,
    stock: 2,
    rating: 4.9
  },
  {
    id: '12',
    name: 'Champagne Glow Bundles',
    description: 'Honey blonde ombre hair bundles. Silky texture that holds curls beautifully.',
    price: 2300,
    category: 'bundles',
    images: ['https://images.unsplash.com/photo-1594434297575-58384b102f33?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 7,
    rating: 4.5
  },
  {
    id: '13',
    name: 'Petite Pearl Crossbody',
    description: 'Miniature luxury crossbody bag adorned with genuine faux pearls and a sleek chain.',
    price: 950,
    category: 'handbags',
    images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 10,
    rating: 4.4
  },
  {
    id: '14',
    name: 'Copper Dream Wig',
    description: 'Auburn-colored deep wave wig. Vibrant color that compliments all skin tones.',
    price: 3600,
    category: 'wigs',
    images: ['https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800'],
    featured: true,
    stock: 4,
    rating: 4.8
  },
  {
    id: '15',
    name: 'Kinky Straight Bundles',
    description: 'Coarse texture human hair bundles that mimic blown-out natural hair perfectly.',
    price: 2150,
    category: 'bundles',
    images: ['https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 8,
    rating: 4.7
  },
  {
    id: '16',
    name: 'Midnight Crocodile Bag',
    description: 'Embossed croc-effect leather handbag in deep obsidian. A masterpiece of textures.',
    price: 1850,
    category: 'handbags',
    images: ['https://images.unsplash.com/photo-1591561911252-1f9dbff79c1a?auto=format&fit=crop&q=80&w=800'],
    featured: true,
    stock: 3,
    rating: 4.9
  },
  {
    id: '17',
    name: 'Pixie Cut Pro Wig',
    description: 'Ready-to-wear short pixie wig. 100% human hair that can be styled and heat-treated.',
    price: 1800,
    category: 'wigs',
    images: ['https://images.unsplash.com/photo-1620331311520-246422ff82f9?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 15,
    rating: 4.6
  },
  {
    id: '18',
    name: 'Platinum Wave Bundles',
    description: 'Icy blonde body wave bundles. High density and exceptionally soft feel.',
    price: 2450,
    category: 'bundles',
    images: ['https://images.unsplash.com/photo-1522337300245-2276cb643b27?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 5,
    rating: 4.5
  },
  {
    id: '19',
    name: 'Executive Breifcase',
    description: 'Slim leather briefcase for the modern female leader. Fits a 14-inch Mac and accessories.',
    price: 2100,
    category: 'handbags',
    images: ['https://images.unsplash.com/photo-1590739225287-bd2d5d88272e?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 6,
    rating: 4.8
  },
  {
    id: '20',
    name: 'Burnt Orange Bob',
    description: 'Stylish ginger-toned straight bob wig. Hand-tied lace for an undetectable finish.',
    price: 2950,
    category: 'wigs',
    images: ['https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800'],
    featured: false,
    stock: 4,
    rating: 4.7
  },
  {
    id: 'lmy-premium-long-wig',
    name: 'Premium Long Wig',
    description: 'Experience ultimate glam with our Premium Long Wig. Crafted for a natural flow and effortless elegance, this high-grade hairpiece defines luxury beauty and sophistication.',
    price: 470,
    category: 'wigs',
    images: ['https://i.ibb.co/PZ3wQ7hk/Gemini-Generated-Image-glby8uglby8uglby-8-LONG-WIG-R470.png'],
    featured: true,
    stock: 12,
    rating: 4.8,
    specs: {
      type: 'Synthetic Blend',
      length: '26 Inches',
      texture: 'Straight'
    }
  },
  {
    id: 'lmy-premium-wig',
    name: 'Premium Wig',
    description: 'Our signature Premium Wig offers a perfect blend of comfort and style. Ideal for daily wear or special occasions, it provides a seamless, natural look that enhances your beauty.',
    price: 450,
    category: 'wigs',
    images: ['https://i.ibb.co/BHZvc8MG/Gemini-Generated-Image-glby8uglby8uglby-7.png'],
    featured: false,
    stock: 15,
    rating: 4.7
  },
  {
    id: 'lmy-short-wig',
    name: 'Short Wig',
    description: 'Chic and sophisticated, the Short Wig is designed for the modern woman. Easy to style and maintain, it is a perfect statement piece for those who value confidence and grace.',
    price: 300,
    category: 'wigs',
    images: ['https://i.ibb.co/Kjwm2hyV/Gemini-Generated-Image-glby8uglby8uglby-6-SHORT-WIG-R300.png'],
    featured: false,
    stock: 20,
    rating: 4.6
  },
  {
    id: 'lmy-luxury-blue-bag',
    name: 'Luxury Blue Handbag',
    description: 'A striking sapphire blue leather handbag that commands attention. Featuring a spacious interior and artisan stitching for the discerning eye. A masterpiece of luxury fashion.',
    price: 590,
    category: 'handbags',
    images: ['https://i.ibb.co/4ZKwp77v/Gemini-Generated-Image-glby8uglby8uglby-5-BAG-BLUE-R590.png'],
    featured: true,
    stock: 8,
    rating: 4.9,
    specs: {
      material: 'Vegan Leather',
      hardware: 'Silver Tone',
      color: 'Sapphire Blue'
    }
  },
  {
    id: 'lmy-luxury-bw-bag',
    name: 'Luxury Black & White Handbag',
    description: 'The epitome of monochrome elegance. This black and white handbag pairs perfectly with any high-end ensemble, from boardroom meetings to weekend bistros.',
    price: 580,
    category: 'handbags',
    images: ['https://i.ibb.co/RGrb4SP2/Gemini-Generated-Image-glby8uglby8uglby-4-BAG-BLACK-AND-WHITE-R580.png'],
    featured: false,
    stock: 6,
    rating: 4.8
  },
  {
    id: 'lmy-luxury-yellow-bag',
    name: 'Luxury Yellow Handbag',
    description: 'Radiate sunshine with our vibrant Luxury Yellow Handbag. A bold, premium accessory that brings a refreshing pop of color to your sophisticated wardrobe.',
    price: 400,
    category: 'handbags',
    images: ['https://i.ibb.co/nFrmzr9/Gemini-Generated-Image-glby8uglby8uglby-3-BAG-YELLO-R400.png'],
    featured: false,
    stock: 10,
    rating: 4.7
  },
  {
    id: 'lmy-luxury-black-bag',
    name: 'Luxury Black Handbag',
    description: 'Essential and timeless. This Luxury Black Handbag is crafted from premium materials, offering a versatile and durable companion for every high-fashion occasion.',
    price: 570,
    category: 'handbags',
    images: ['https://i.ibb.co/3YPsP48H/Gemini-Generated-Image-glby8uglby8uglby-1-BAG-BLACK-R570.png'],
    featured: true,
    stock: 15,
    rating: 5.0
  },
  {
    id: 'lmy-luxury-red-bag',
    name: 'Luxury Red Handbag',
    description: 'Ignite your style with the Luxury Red Handbag. Bold, passionate, and meticulously crafted to be the center of attraction at any elite event.',
    price: 780,
    category: 'handbags',
    images: ['https://i.ibb.co/DfCtP4Sm/Gemini-Generated-Image-glby8uglby8uglby-2-HAND-BAG-RED-R780.png'],
    featured: true,
    stock: 5,
    rating: 4.9,
    specs: {
      material: 'Suede Finish',
      hardware: 'Gold Tone',
      color: 'Ruby Red'
    }
  },
  {
    id: 'lmy-luxury-white-bag',
    name: 'Luxury White Handbag',
    description: 'Pristine and polished. Our Luxury White Handbag is the perfect accessory for a clean, high-fashion look that radiates purity and modern elegance.',
    price: 400,
    category: 'handbags',
    images: ['https://i.ibb.co/s93HZnXW/Gemini-Generated-Image-glby8uglby8uglby-hand-bag-white-R400.png'],
    featured: false,
    stock: 9,
    rating: 4.7
  }
];
