import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, X } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatPrice } from '@/src/lib/utils';

export default function CartReminder() {
  const { cart, totalPrice } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only show if cart is not empty, not on checkout/confirmation pages, and after initial delay
    const isExcludedPage = ['/checkout', '/confirmation'].includes(location.pathname);
    
    if (cart.length > 0 && !isExcludedPage) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000); // Show after 15 seconds of browsing
      
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [cart, location.pathname]);

  if (cart.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-6 right-6 z-[200] max-w-sm w-full bg-luxury-black text-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex items-start space-x-5">
            <div className="relative">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-gold">
                <ShoppingBag size={24} />
              </div>
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-luxury-black text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-luxury-black">
                {cart.length}
              </span>
            </div>
            
            <div className="flex-grow pt-1">
              <h4 className="text-sm font-serif font-bold italic mb-1">Your Selection is Waiting</h4>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-4">
                Items totaling {formatPrice(totalPrice)}
              </p>
              
              <button
                onClick={() => {
                  setIsVisible(false);
                  navigate('/checkout');
                }}
                className="w-full py-3 bg-white text-luxury-black text-[9px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-gold hover:text-white transition-all flex items-center justify-center group"
              >
                Complete Purchase <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
