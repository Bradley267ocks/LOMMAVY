import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Phone as WhatsApp, Sparkles } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { formatPrice } from '@/src/lib/utils';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '@/src/data/mockProducts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, addToCart } = useCart();
  const navigate = useNavigate();

  const getOrderSummary = () => {
    return cart
      .map((item) => `- ${item.name} (x${item.quantity}): ${formatPrice(item.price * item.quantity)}`)
      .join('\n');
  };

  const handleWhatsAppCheckout = () => {
    const summary = getOrderSummary().replace(/\n/g, '%0A');
    const message = `Hello Lommavy! I would like to place an order:%0A%0A${summary}%0A%0ATotal: ${formatPrice(totalPrice)}%0A%0APlease confirm my order.`;
    window.open(`https://wa.me/27611423309?text=${message}`, '_blank');
  };

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const recommendations = mockProducts.filter(p => {
    if (cart.some(item => item.productId === p.id)) return false;
    
    const hasWig = cart.some(item => {
      const original = mockProducts.find(mp => mp.id === item.productId);
      return original?.category?.toLowerCase().includes('wig');
    });
    const hasBag = cart.some(item => {
      const original = mockProducts.find(mp => mp.id === item.productId);
      return original?.category?.toLowerCase() === 'handbags';
    });

    if (hasWig && (p.id === '101' || p.id === '102')) return true;
    if (hasBag && p.id === '103') return true;
    
    return false;
  }).slice(0, 2);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-luxury-black/60 backdrop-blur-sm z-[150]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white z-[160] shadow-2xl flex flex-col"
          >
            <div className="p-6 md:p-8 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-beige rounded-xl">
                  <ShoppingBag size={22} className="text-gold" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold italic leading-none">Your Selection</h2>
                  <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest mt-1.5">{totalItems} Piece{totalItems !== 1 ? 's' : ''}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-4 hover:bg-beige rounded-full transition-all"
                aria-label="Close cart"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="p-12 bg-beige rounded-full">
                    <ShoppingBag size={56} className="text-black/5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold italic">The bag is waiting</h3>
                    <p className="text-sm text-black/40 max-w-[200px]">Elegance begins with your first selection.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full max-w-[240px] py-4 bg-luxury-black text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-gold transition-all"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  <div className="space-y-8">
                    {cart.map((item) => (
                      <div key={item.productId} className="flex space-x-6">
                        <div className="h-28 w-24 flex-shrink-0 bg-beige rounded-2xl overflow-hidden border border-black/5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-grow flex flex-col justify-between py-1">
                          <div className="space-y-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-serif font-bold text-base tracking-tight leading-tight uppercase text-[11px] tracking-widest">{item.name}</h4>
                              <button
                                onClick={() => removeFromCart(item.productId)}
                                className="p-2 -mr-2 text-black/20 hover:text-red-500 transition-all"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <p className="text-gold font-bold text-sm tracking-wide">{formatPrice(item.price)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center bg-beige rounded-xl p-0.5">
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                className="p-2 text-black/40 hover:text-gold transition-all"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="p-2 text-black/40 hover:text-gold transition-all"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-[9px] font-bold text-black/30 tracking-widest uppercase italic">Sub: {formatPrice(item.price * item.quantity)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {recommendations.length > 0 && (
                    <div className="pt-10 border-t border-black/5">
                      <div className="flex items-center space-x-2 mb-6">
                        <Sparkles size={14} className="text-gold" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 italic">Complete Your Set</h4>
                      </div>
                      <div className="space-y-4">
                        {recommendations.map((p) => (
                          <div key={p.id} className="p-4 bg-beige/30 rounded-2xl border border-black/5 flex items-center justify-between group hover:bg-white transition-all">
                            <div className="flex items-center space-x-4">
                              <img src={p.images[0]} alt={p.name} className="w-12 h-14 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all shadow-sm" />
                              <div>
                                <h5 className="text-[10px] font-bold uppercase tracking-wider line-clamp-1">{p.name}</h5>
                                <p className="text-gold font-serif text-sm italic">{formatPrice(p.price)}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => addToCart({
                                productId: p.id,
                                name: p.name,
                                price: p.price,
                                image: p.images[0],
                                quantity: 1
                              })}
                              className="p-3 bg-white text-luxury-black rounded-xl hover:bg-gold hover:text-white transition-all shadow-sm border border-black/5"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-beige/60 border-t border-black/5 rounded-t-[2.5rem] shadow-xl space-y-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-end pb-4 border-b border-black/5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Immediate Total</span>
                    <span className="text-2xl font-serif font-bold italic tracking-tight text-gold">{formatPrice(totalPrice)}</span>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      className="w-full py-6 bg-luxury-black hover:bg-gold text-white font-bold uppercase tracking-[0.3em] text-xs rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center group"
                    >
                      Process Checkout <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                    
                    <button
                      onClick={handleWhatsAppCheckout}
                      className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-widest text-[9px] rounded-xl shadow-lg transition-all flex items-center justify-center space-x-3"
                    >
                      <WhatsApp size={16} />
                      <span>Order via WhatsApp Concierge</span>
                    </button>
                  </div>
                </div>
                <p className="text-[8px] text-center text-black/30 uppercase tracking-[0.3em] font-medium leading-loose">
                  Complimentary Local Express Delivery Included
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
