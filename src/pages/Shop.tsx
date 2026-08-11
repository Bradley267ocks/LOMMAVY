import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  SlidersHorizontal, 
  ChevronDown, 
  X, 
  ShoppingCart, 
  Star, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck, 
  Truck, 
  Sparkles,
  Info,
  Layers,
  Heart,
  RefreshCw,
  Gift
} from 'lucide-react';
import { getProducts } from '@/src/lib/data-service';
import { Product } from '@/src/types';
import ProductCard from '@/src/components/ProductCard';
import { cn, formatPrice } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';
import SEO from '@/src/components/SEO';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const { addToCart } = useCart();

  // Detail States
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);
  const [bundleNotice, setBundleNotice] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const activeCategory = searchParams.get('category') || 'all';
  const selectedId = searchParams.get('id');

  const closeProduct = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('id');
    setSearchParams(nextParams);
  };

  const selectedProduct = useMemo(() => 
    products.find(p => String(p.id) === String(selectedId)), 
  [selectedId, products]);

  // Reset active image index when product rotates
  useEffect(() => {
    setActiveImageIndex(0);
    setIsZooming(false);
    setBundleNotice(null);
  }, [selectedId]);

  const categories = [
    'all', 
    'handbags', 
    'wigs',
    'straight wigs', 
    'curly wigs', 
    'lace front wigs', 
    'bundles',
    'hair bundles',
    'accessories'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // Default to newest
    });
  }, [activeCategory, searchQuery, sortBy, products]);

  // Gallery fallback images
  const selectedProductGallery = useMemo(() => {
    if (!selectedProduct) return [];
    if (selectedProduct.images && selectedProduct.images.length > 1) {
      return selectedProduct.images;
    }
    // High-quality fallbacks to populate multiple angles
    const mainImg = selectedProduct.images[0];
    const category = selectedProduct.category.toLowerCase();
    
    if (category === 'handbags') {
      return [
        mainImg,
        'https://i.ibb.co/6JyrZ9WF/1781445851302.png',
        'https://i.ibb.co/qMGqMXcS/IMG-20260613-WA0020.jpg'
      ];
    } else if (category.includes('wig')) {
      return [
        mainImg,
        'https://i.ibb.co/BHZvc8MG/Gemini-Generated-Image-glby8uglby8uglby-7.png',
        'https://i.ibb.co/PvXBVCfZ/IMG-20260613-WA0016.jpg'
      ];
    } else {
      return [
        mainImg,
        'https://i.ibb.co/Dg1TLkDs/1781445670046.png',
        'https://i.ibb.co/LzfQwPDc/IMG-20260613-WA0013.jpg'
      ];
    }
  }, [selectedProduct]);

  // Generated High-End specifications
  const specifications = useMemo(() => {
    if (!selectedProduct) return [];
    if (selectedProduct.specs && Object.keys(selectedProduct.specs).length > 0) {
      return Object.entries(selectedProduct.specs);
    }
    const cat = selectedProduct.category.toLowerCase();
    if (cat.includes('wig') || cat.includes('bundle') || cat.includes('hair') || cat.includes('lace')) {
      return [
        ['Hair Type', '100% Unprocessed Virgin Brazilian Human Hair'],
        ['Premium Grade', 'Grade 12A Certified Luxury Collection'],
        ['Lace Texture', 'Ultra-breathable Swiss HD Undetectable Lace'],
        ['Hair Density', '180% Full Silhouette Density'],
        ['Treatment', 'Can be bleached, dye colored, flat ironed, and restyled safely']
      ];
    } else {
      return [
        ['Base Material', 'Selected Handcrafted Saffiano / Quilted Premium Leather'],
        ['Stitching', 'Signature double-lock waxed nylon threading'],
        ['Hardware', 'Premium Antique Gold Tone (Corrosion protected)'],
        ['Silhouette Interior', 'Satin-Silk interior protective double lining'],
        ['Secure Enclosure', 'Polished magnetic push-on lock setup']
      ];
    }
  }, [selectedProduct]);

  // Related products
  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return products
      .filter(p => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.featured))
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [selectedProduct, products]);

  // Frequently Bought Together Bundle item
  const frequentlyBoughtTogetherItem = useMemo(() => {
    if (!selectedProduct) return null;
    const cat = selectedProduct.category.toLowerCase();
    
    // Intelligent matching logic
    if (cat.includes('wig') || cat.includes('bundle') || cat.includes('hair')) {
      // If beauty/hair, suggest a luxury bag to complete the look
      return products.find(p => p.id === 'wa-0006') || products.find(p => p.category === 'handbags') || null;
    }
    if (cat === 'handbags') {
      // If bag, suggest a premium wig
      return products.find(p => p.id === 'wa-0012') || products.find(p => p.category === 'wigs') || null;
    }
    return products.find(p => p.featured && p.id !== selectedProduct.id) || null;
  }, [selectedProduct, products]);

  const handleZoomMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomCoords({ x, y });
  };

  const handleAddBundleToCart = () => {
    if (!selectedProduct || !frequentlyBoughtTogetherItem) return;
    
    // Add primary item
    addToCart({
      productId: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.images[0],
      quantity: 1
    });

    // Add bundle accessory
    addToCart({
      productId: frequentlyBoughtTogetherItem.id,
      name: frequentlyBoughtTogetherItem.name,
      price: frequentlyBoughtTogetherItem.price,
      image: frequentlyBoughtTogetherItem.images[0],
      quantity: 1
    });

    setBundleNotice(`Success! Both ${selectedProduct.name} and ${frequentlyBoughtTogetherItem.name} have been added to your bag at standard rates!`);
    setTimeout(() => {
      setBundleNotice(null);
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-beige min-h-screen">
      <SEO 
        title={selectedProduct ? `${selectedProduct.name} | Luxury Collection` : "Shop Our Luxury Collection | Lommavy"}
        description={selectedProduct?.description || "Browse our curated selection of premium handbags, Brazilian hair, wigs, and bundles. Quality and elegance delivered across South Africa."}
        schema={selectedProduct ? {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": selectedProduct.name,
          "image": [selectedProduct.image],
          "description": selectedProduct.description,
          "sku": selectedProduct.id,
          "brand": {
            "@type": "Brand",
            "name": "Lommavy"
          },
          "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "ZAR",
            "price": selectedProduct.price,
            "availability": "https://schema.org/InStock"
          }
        } : undefined}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 capitalize">{activeCategory === 'all' ? 'The Collection' : activeCategory}</h1>
          <p className="text-black/60 text-sm md:text-base max-w-xl italic leading-relaxed">Discover Lommavy’s curated selection of luxury fashion essentials and premium hair extensions, designed for elegance and versatility.</p>
        </div>

        {/* Filters & Tools */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 md:mb-12 bg-white p-5 md:p-8 rounded-[2rem] shadow-sm border border-black/5">
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-14 pr-6 py-4 bg-beige/40 rounded-2xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative flex-grow sm:flex-grow-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto appearance-none bg-beige/40 px-6 py-4 pr-12 rounded-2xl text-[10px] font-bold uppercase tracking-widest outline-none focus:ring-2 focus:ring-gold/30 cursor-pointer"
              >
                <option value="newest">Sort: Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated Only</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-black/50 pointer-events-none" size={14} />
            </div>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm",
                isFilterOpen ? "bg-luxury-black text-white" : "bg-white text-black/60 border border-black/5 hover:bg-beige"
              )}
            >
              <SlidersHorizontal size={14} />
              <span>Categories</span>
            </button>
          </div>
        </div>

        {/* Category Pill Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-black/5"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat })}
                  className={cn(
                    "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                    activeCategory === cat
                      ? "bg-luxury-black text-white shadow-xl"
                      : "bg-white text-black/60 hover:bg-gold/10 hover:text-gold"
                  )}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-[400px] bg-white rounded-2xl animate-pulse" />
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <div className="inline-block p-10 bg-white rounded-full mb-6">
                <Search size={48} className="text-black/10" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">No products found</h2>
              <p className="text-black/60 text-sm">Try adjusting your filters or search query.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({ category: 'all' });
                }}
                className="mt-8 px-10 py-4 bg-gold text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gold-dark transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Personalized Recommendations Section (Conversion Booster) */}
        {!selectedId && (
          <div className="mt-24 pt-24 border-t border-black/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <span className="text-gold font-bold uppercase tracking-widest text-[9px] mb-3 block flex items-center">
                  <Sparkles size={12} className="mr-2" /> Personalized For You
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Trending Curations</h2>
                <p className="text-black/50 text-sm mt-3 italic">Hand-picked luxury items that complement the modern lifestyle.</p>
              </div>
              <div className="flex items-center space-x-2 pb-2">
                <div className="w-12 h-0.5 bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">Lommavy Society Favorites</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.filter(p => p.featured).slice(0, 4).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Custom Slide-over Panel (Full details / Specifications / Related products / Zoom on hover) */}
      <AnimatePresence>
        {selectedId && !loading && !selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
          >
            <div className="bg-white p-12 rounded-[2.5rem] text-center max-w-sm shadow-2xl border border-black/5">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 italic">Product Not Found</h3>
              <p className="text-black/60 text-sm mb-8 leading-relaxed italic">The requested collection item is either private, sold out, or removed from our catalog.</p>
              <button
                onClick={closeProduct}
                className="w-full py-4 bg-luxury-black text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-gold transition-colors"
              >
                Return to Collection
              </button>
            </div>
          </motion.div>
        )}

        {selectedProduct && (
          <>
            {/* Background Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProduct}
              className="fixed inset-0 bg-luxury-black/85 backdrop-blur-md z-[100] cursor-zoom-out"
            />
            
            {/* Slide-over Main Chassis */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full max-w-5xl bg-beige z-[110] shadow-2xl flex flex-col md:flex-row overflow-y-auto overflow-x-hidden"
            >
              {/* Floating Close Button */}
              <button
                onClick={closeProduct}
                className="absolute top-6 left-6 md:top-8 md:left-8 z-[200] p-4 bg-orange-50/50 hover:bg-gold backdrop-blur-md rounded-full text-luxury-black hover:text-white transition-all shadow-md active:scale-90"
                aria-label="Close details"
              >
                <ArrowLeft size={22} />
              </button>

              {/* LEFT Column: Detailed Image Showcase (Gallery and Magnification Zoom option) */}
              <div className="w-full md:w-1/2 md:h-full bg-white flex flex-col justify-between shrink-0 p-4 md:p-8 min-h-[50vh] md:min-h-0 border-r border-black/5">
                <div className="flex-grow flex items-center justify-center relative pt-12 md:pt-16">
                  {/* High Demand Stock Indicator Badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 px-3 md:px-3.5 py-1 md:py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-full shadow-sm flex items-center space-x-1.5">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-500 animate-ping shrink-0" />
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em]">Fast selling - {selectedProduct.stock || 4} left</span>
                  </div>

                  {/* Main Large Image frame with hover tracking zoom */}
                  <div 
                    className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-beige relative shadow-sm cursor-zoom-in"
                    onMouseMove={handleZoomMouseMove}
                    onMouseEnter={() => setIsZooming(true)}
                    onMouseLeave={() => setIsZooming(false)}
                  >
                    <img
                      src={selectedProductGallery[activeImageIndex]}
                      alt={selectedProduct.name}
                      style={isZooming ? {
                        transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                        transform: 'scale(1.75)'
                      } : {
                        transform: 'scale(1)'
                      }}
                      className="w-full h-full object-cover transition-transform duration-100 ease-out"
                    />
                  </div>
                </div>

                {/* Horizontal thumbnail selector list */}
                <div className="mt-6 flex justify-center space-x-3 overflow-x-auto pb-2">
                  {selectedProductGallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={cn(
                        "w-20 aspect-square rounded-xl overflow-hidden bg-beige ring-offset-2 transition-all shadow-sm border",
                        activeImageIndex === idx 
                          ? "ring-2 ring-gold border-transparent scale-102" 
                          : "border-black/5 hover:border-gold/50"
                      )}
                    >
                      <img src={img} alt="Product angle" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT Column: Specifications, Delivery details & Purchase engine */}
              <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-8 md:pt-12">
                  <div>
                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-[8px] md:text-[9px] mb-2 block">{selectedProduct.category}</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 italic leading-tight text-luxury-black">{selectedProduct.name}</h2>
                    
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 pb-6 border-b border-black/5">
                      <p className="text-2xl md:text-3xl font-light text-luxury-black italic font-serif">{formatPrice(selectedProduct.price)}</p>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex text-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} />
                          ))}
                        </div>
                        <span className="text-[9px] font-bold text-black/35 uppercase tracking-[0.2em]">{selectedProduct.rating} Rating</span>
                      </div>
                    </div>

                    <p className="text-black/70 leading-relaxed italic text-xs md:text-sm lg:text-base">"{selectedProduct.description}"</p>
                  </div>

                  {/* Frequently Bought Together Box (Extremely high conversion optimizer) */}
                  {frequentlyBoughtTogetherItem && (
                    <div className="p-4 bg-white rounded-2xl border border-gold/15 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-1.5 bg-gold/10 border-b border-l border-gold/15 text-[8px] font-bold text-gold uppercase tracking-widest rounded-bl-xl flex items-center space-x-1">
                        <Gift size={10} />
                        <span>Recommended Duo</span>
                      </div>

                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/50 mb-3 flex items-center">
                        <Sparkles size={12} className="text-gold mr-1.5" /> Frequently Bought Together
                      </h4>

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={frequentlyBoughtTogetherItem.images[0]} 
                            alt={frequentlyBoughtTogetherItem.name} 
                            className="w-11 h-12 rounded-lg object-cover bg-beige shadow-sm flex-shrink-0" 
                          />
                          <div>
                            <p className="text-[10px] font-bold text-luxury-black uppercase tracking-wide truncate max-w-[150px]">{frequentlyBoughtTogetherItem.name}</p>
                            <p className="text-gold font-serif text-xs italic">{formatPrice(frequentlyBoughtTogetherItem.price)}</p>
                          </div>
                        </div>

                        <button
                          onClick={handleAddBundleToCart}
                          className="px-4 py-2.5 bg-luxury-black hover:bg-gold text-white text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all active:scale-95 flex items-center space-x-1"
                        >
                          <ShoppingCart size={10} />
                          <span>Add Both</span>
                        </button>
                      </div>

                      {bundleNotice && (
                        <p className="text-[9px] font-bold text-green-600 mt-3 animate-pulse leading-none">{bundleNotice}</p>
                      )}
                    </div>
                  )}

                  {/* Tabulated Specifications Grid */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/50 italic flex items-center">
                      <Layers size={13} className="mr-1.5 text-gold" /> Curated Specifications
                    </h4>
                    <div className="bg-white rounded-2.5xl p-5 border border-black/5 text-xs space-y-3.5 shadow-sm">
                      {specifications.map(([label, val]) => (
                        <div key={label} className="flex justify-between items-start pb-2 border-b border-black/5 last:border-0 last:pb-0">
                          <span className="text-[10px] font-bold text-black/45 uppercase tracking-wider">{label}</span>
                          <span className="text-right text-black/80 font-medium italic">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery & Returns timelines (Increases trust instantly in checkout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl border border-black/5 text-xs">
                      <h5 className="font-bold flex items-center space-x-1.5 text-luxury-black mb-1">
                        <Truck size={14} className="text-gold" />
                        <span className="uppercase tracking-widest text-[9px]">Local Delivery</span>
                      </h5>
                      <p className="text-[11px] text-black/50 leading-relaxed italic">Nelspruit: 24h Express.<br />Mpumalanga: 2-3 business days fully tracked.</p>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-black/5 text-xs">
                      <h5 className="font-bold flex items-center space-x-1.5 text-luxury-black mb-1">
                        <RefreshCw size={14} className="text-gold" />
                        <span className="uppercase tracking-widest text-[9px]">Pristine Returns</span>
                      </h5>
                      <p className="text-[11px] text-black/50 leading-relaxed italic">7-day hassle-free guarantee for unused handbags and unopened lace fronts.</p>
                    </div>
                  </div>
                </div>

                {/* Core Purchase CTA Buttons */}
                <div className="mt-12 space-y-6 pt-6 border-t border-black/5">
                  <div className="flex flex-col sm:flex-row items-stretch gap-4">
                    <button
                      onClick={() => {
                        addToCart({
                          productId: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.images[0],
                          quantity: 1
                        });
                      }}
                      className="flex-grow py-5 bg-gold hover:bg-gold-dark text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all active:scale-95 flex items-center justify-center space-x-3"
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Bag</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        addToCart({
                          productId: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.images[0],
                          quantity: 1
                        });
                        navigate('/checkout');
                      }}
                      className="flex-grow py-5 bg-luxury-black hover:bg-luxury-black/90 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center space-x-3"
                    >
                      <span>Buy It Now</span>
                      <ArrowRight size={16} />
                    </button>
                    
                    <button 
                      onClick={closeProduct}
                      className="p-5 border border-black/10 rounded-xl hover:bg-white active:bg-black/5 transition-all flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Related / "Complete the Collection" quick-preview slider */}
                  {relatedProducts.length > 0 && (
                    <div className="pt-6 border-t border-black/5">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/50 italic mb-4 flex items-center">
                        <Info size={12} className="text-gold mr-1.5" /> Related Curations
                      </h4>
                      <div className="flex space-x-3.5 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                        {relatedProducts.map(p => (
                          <Link 
                            key={p.id} 
                            to={`/shop?${new URLSearchParams({...Object.fromEntries(searchParams), id: p.id}).toString()}`} 
                            className="min-w-[90px] md:min-w-[110px] aspect-[4/5] rounded-xl bg-white overflow-hidden hover:ring-2 hover:ring-gold transition-all shrink-0 shadow-sm border border-black/5 group"
                          >
                            <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynamic SSL Checkout Trust Banner */}
                  <div className="flex items-center justify-center space-x-4 text-[9px] text-black/45 uppercase tracking-widest text-center pt-2">
                    <span className="flex items-center"><ShieldCheck size={11} className="mr-1 text-gold" /> Encrypted Payments</span>
                    <span>•</span>
                    <span className="flex items-center">Nelspruit Atelier Authorized</span>
                  </div>
                </div>
              </div>

              {/* DYNAMIC STICKY ADD TO CART BAR ON MOBILE DEVICES (CRO optimization for long scrolls) */}
              <div className="sticky bottom-0 left-0 right-0 w-full p-4 bg-white/95 backdrop-blur-md border-t border-black/5 flex items-center justify-between md:hidden z-50">
                <div className="flex flex-col justify-center">
                  <span className="text-[8px] text-luxury-black font-bold uppercase tracking-wider">{selectedProduct.name}</span>
                  <span className="text-sm font-serif font-bold text-gold italic leading-none mt-1">{formatPrice(selectedProduct.price)}</span>
                </div>

                <button
                  onClick={() => {
                    addToCart({
                      productId: selectedProduct.id,
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      image: selectedProduct.images[0],
                      quantity: 1
                    });
                  }}
                  className="px-6 py-3.5 bg-gold hover:bg-gold-dark text-white text-[9px] font-bold uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95 flex items-center space-x-1.5"
                >
                  <ShoppingCart size={13} />
                  <span>Experience Duo</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
