import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Eye, Star, Heart, ArrowRight } from 'lucide-react';
import { Product } from '@/src/types';
import { formatPrice, cn } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';
import { useWishlist } from '@/src/context/WishlistContext';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const isLiked = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
        
        {product.featured && (
          <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-gold/90 backdrop-blur-md rounded-full shadow-lg">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">Best Seller</p>
          </div>
        )}

        {/* Quick Actions - Always visible on mobile, hover-triggered on desktop */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col space-y-2 translate-y-0 lg:translate-y-12 opacity-100 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 z-20">
          <div className="flex space-x-2">
            <button 
              onClick={handleAddToCart}
              className="flex-grow p-4 bg-white/95 backdrop-blur-md text-luxury-black rounded-xl hover:bg-gold hover:text-white transition-all shadow-lg flex items-center justify-center space-x-2 active:scale-95"
            >
              <ShoppingCart size={15} />
              <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Add to Bag</span>
            </button>
            <Link 
              to={`/shop?id=${product.id}`}
              className="p-4 bg-white/95 backdrop-blur-md text-luxury-black rounded-xl hover:bg-gold hover:text-white transition-all shadow-lg active:scale-95 flex items-center justify-center shrink-0"
            >
              <Eye size={15} />
            </Link>
          </div>
          <button 
            onClick={handleBuyNow}
            className="w-full p-4 bg-luxury-black text-white rounded-xl hover:bg-gold transition-all shadow-lg flex items-center justify-center space-x-2 active:scale-95"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Buy It Now</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <button 
          onClick={() => toggleWishlist(product.id)}
          className={cn(
            "absolute top-4 right-4 p-3 rounded-full transition-all md:opacity-0 md:group-hover:opacity-100 transform md:translate-x-4 md:group-hover:translate-x-0 duration-300 shadow-sm z-10",
            isLiked ? "bg-red-500 text-white opacity-100 translate-x-0" : "bg-white/40 backdrop-blur-md text-luxury-black md:text-white/60 hover:text-red-500 hover:bg-white"
          )}
        >
          <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">{product.category}</span>
          <Link to={`/shop?${new URLSearchParams({...Object.fromEntries(new URLSearchParams(window.location.search)), id: product.id}).toString()}`}>
            <h3 className="text-xl font-serif font-bold group-hover:text-gold transition-colors line-clamp-1 italic leading-tight">{product.name}</h3>
          </Link>
        </div>
        
        <p className="text-sm text-black/60 mb-6 line-clamp-2 leading-relaxed flex-grow italic">Discover the essence of {product.category} luxury with our signature {product.name}.</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
          <span className="font-bold text-xl text-luxury-black">{formatPrice(product.price)}</span>
          <div className="flex items-center space-x-1 text-gold">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-black/60">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

