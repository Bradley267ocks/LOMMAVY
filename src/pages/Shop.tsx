import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ChevronDown, X, ShoppingCart, Star, ArrowLeft, ShieldCheck } from 'lucide-react';
import { getProducts } from '@/src/lib/data-service';
import { Product } from '@/src/types';
import ProductCard from '@/src/components/ProductCard';
import { cn, formatPrice } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const { addToCart } = useCart();

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

  return (
    <div className="pt-32 pb-24 px-6 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 capitalize">{activeCategory === 'all' ? 'The Collection' : activeCategory}</h1>
          <p className="text-black/40 text-sm md:text-base max-w-xl italic leading-relaxed">Discover Lommavy’s curated selection of luxury fashion essentials and premium hair extensions, designed for elegance and versatility.</p>
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
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none" size={14} />
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
              <p className="text-black/40 text-sm">Try adjusting your filters or search query.</p>
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
      </div>

      {/* Product Detail Slide-over */}
      <AnimatePresence>
        {selectedId && !loading && !selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
          >
            <div className="bg-white p-12 rounded-[2.5rem] text-center max-w-sm shadow-2xl">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="text-red-500" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 italic">Product Not Found</h3>
              <p className="text-black/40 text-sm mb-8 leading-relaxed italic">The requested collection item is either private, sold out, or removed from our catalog.</p>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProduct}
              className="fixed inset-0 bg-luxury-black/90 backdrop-blur-xl z-[80] cursor-zoom-out"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-4xl bg-white z-[90] shadow-2xl flex flex-col lg:flex-row overflow-y-auto overflow-x-hidden"
            >
              <button
                onClick={closeProduct}
                className="absolute top-6 left-6 md:top-10 md:left-10 z-[100] p-4 bg-white/20 backdrop-blur-md rounded-full text-white lg:bg-luxury-black lg:text-white hover:bg-gold active:scale-90 transition-all shadow-lg"
              >
                <ArrowLeft size={24} />
              </button>

              <div className="w-full lg:w-1/2 h-[60vh] lg:h-full bg-beige shrink-0">
                <img
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover lg:object-center"
                />
              </div>

              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
                <div className="mb-10 pt-4 md:pt-0">
                  <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{selectedProduct.category}</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic leading-tight">{selectedProduct.name}</h2>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-black/5">
                    <p className="text-3xl md:text-4xl font-light text-luxury-black italic">{formatPrice(selectedProduct.price)}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex text-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">{selectedProduct.rating} / 5.0</span>
                    </div>
                  </div>

                  <p className="text-black/50 leading-relaxed italic mb-10 text-sm md:text-base">"{selectedProduct.description}"</p>
                </div>

                <div className="space-y-6">
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
                      className="flex-grow py-5 bg-gold hover:bg-gold-dark text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all active:scale-95 flex items-center justify-center space-x-3"
                    >
                      <ShoppingCart size={18} />
                      <span>Experience Now</span>
                    </button>
                    <button 
                      onClick={closeProduct}
                      className="p-5 border border-black/10 rounded-xl hover:bg-beige active:bg-black/5 transition-all flex items-center justify-center shrink-0"
                    >
                      <X size={24} className="rotate-45" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 p-6 bg-beige/40 rounded-2xl">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <ShieldCheck size={24} className="text-gold" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/50 leading-relaxed">Certified <br />Authentic</span>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Star size={24} className="text-gold" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/50 leading-relaxed">Premium <br />Craftsmanship</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 lg:mt-auto pt-10">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 italic mb-6">Complete the Collection</h4>
                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                    {products.filter(p => String(p.id) !== String(selectedProduct.id)).slice(0, 4).map(p => (
                      <Link 
                        key={p.id} 
                        to={`/shop?${new URLSearchParams({...Object.fromEntries(searchParams), id: p.id}).toString()}`} 
                        className="min-w-[100px] md:min-w-[130px] aspect-[4/5] rounded-xl bg-beige overflow-hidden hover:ring-2 hover:ring-gold transition-all shrink-0 shadow-sm border border-black/5"
                      >
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

