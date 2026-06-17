import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Instagram, Facebook, Phone as WhatsApp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 bg-luxury-black/98 border-b border-white/5 py-4 shadow-xl'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-gold">
              LOMMAVY
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold active:scale-95",
                  location.pathname === link.path 
                    ? "text-gold" 
                    : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-3 rounded-xl transition-all duration-300 hover:bg-gold/10 relative active:scale-90 text-gold"
              aria-label="Selection Bag"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 h-5 w-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-1 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-3 relative rounded-full transition-all active:bg-gold/20 text-gold"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-1.5 right-1.5 h-4.5 w-4.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full transition-all active:bg-gold/20 text-gold"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden absolute top-[110%] left-6 right-6 bg-luxury-black/98 backdrop-blur-xl mt-2 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden z-[70]"
            >
              <div className="flex flex-col p-8 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-serif font-bold tracking-tight italic transition-all py-3 flex items-center justify-between",
                        location.pathname === link.path ? "text-gold" : "text-white/60 active:text-gold"
                      )}
                    >
                      <span>{link.name}</span>
                      <WhatsApp size={14} className="text-white/10" />
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-8 mt-4 border-t border-white/5 flex flex-col space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50">Connect</span>
                    <div className="flex space-x-4">
                      <a href="https://instagram.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-white/60 hover:text-gold transition-all"><Instagram size={20} /></a>
                      <a href="https://facebook.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-white/60 hover:text-gold transition-all"><Facebook size={20} /></a>
                      <a href="https://wa.me/27611423309" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-white/60 hover:text-gold transition-all"><WhatsApp size={20} /></a>
                    </div>
                  </div>
                  <div className="bg-gold/10 p-5 rounded-2xl border border-gold/20">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gold mb-2">Concierge Line</p>
                    <p className="text-lg font-serif font-bold text-white italic">061 142 3309</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </nav>
    </>
  );
}
