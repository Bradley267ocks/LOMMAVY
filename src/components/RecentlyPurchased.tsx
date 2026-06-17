import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, ShieldCheck } from 'lucide-react';
import { formatPrice } from '@/src/lib/utils';

interface PurchaseEvent {
  buyer: string;
  location: string;
  product: string;
  price: number;
  timeAgo: string;
}

const mockPurchases: PurchaseEvent[] = [
  { buyer: 'Lerato K.', location: 'Nelspruit', product: 'Elite Brazilian Long Wig', price: 470, timeAgo: '4 mins ago' },
  { buyer: 'Zanele J.', location: 'White River', product: 'Sapphire Blue Handbag', price: 590, timeAgo: '12 mins ago' },
  { buyer: 'Nthabiseng M.', location: 'Secunda', product: 'Platinum Chic Short Wig', price: 850, timeAgo: '28 mins ago' },
  { buyer: 'Boipelo S.', location: 'Witbank', product: 'Midnight Noir Handbag', price: 489, timeAgo: '1 hour ago' },
  { buyer: 'Masego T.', location: 'Middelburg', product: 'Red Royalty Handbag', price: 780, timeAgo: '2 hours ago' },
  { buyer: 'Sinenhlanhla D.', location: 'Kanyamazane', product: 'Golden Goddess Wig', price: 950, timeAgo: '3 hours ago' }
];

export default function RecentlyPurchased() {
  const [purchase, setPurchase] = useState<PurchaseEvent | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Show first toast after 8 seconds
    const startTimeout = setTimeout(() => {
      setPurchase(mockPurchases[0]);
    }, 8000);

    // Set loop to trigger every 24 seconds, displaying a new notification
    const interval = setInterval(() => {
      setPurchase(null); // Force close first
      setTimeout(() => {
        const nextIndex = (index + 1) % mockPurchases.length;
        setIndex(nextIndex);
        setPurchase(mockPurchases[nextIndex]);
      }, 500);
    }, 24000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [index]);

  // Handle manual dismiss
  const dismiss = () => {
    setPurchase(null);
  };

  // Close toast automatically after 5 seconds
  useEffect(() => {
    if (purchase) {
      const dismissTimer = setTimeout(() => {
        setPurchase(null);
      }, 6000);
      return () => clearTimeout(dismissTimer);
    }
  }, [purchase]);

  return (
    <AnimatePresence>
      {purchase && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-6 left-6 z-[250] max-w-sm bg-white border border-black/15 shadow-2xl p-4 rounded-2xl flex items-center space-x-4 pr-10"
        >
          {/* Close button */}
          <button 
            onClick={dismiss}
            className="absolute top-2 right-2 text-black/35 hover:text-black/60 transition-colors"
            style={{ fontSize: '10px' }}
          >
            ✕
          </button>

          <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0 animate-pulse">
            <ShoppingBag size={18} />
          </div>

          <div className="flex-grow min-w-0">
            <p className="text-[10px] text-black/45 font-bold uppercase tracking-wider">Recent Order Verified</p>
            <p className="text-xs text-luxury-black font-semibold mt-0.5 leading-snug">
              <span className="font-bold">{purchase.buyer}</span> from <span className="text-gold font-bold italic">{purchase.location}</span> just ordered:
            </p>
            <p className="text-xs font-serif font-bold italic text-luxury-black truncate mt-1">
              {purchase.product}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest">{purchase.timeAgo}</span>
              <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md flex items-center border border-green-200">
                <ShieldCheck size={10} className="mr-1" /> Checked Out
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
