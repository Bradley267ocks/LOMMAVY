import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Truck, Package, ArrowRight, Instagram, Mail } from 'lucide-react';

export default function Confirmation() {
  const location = useLocation();
  const orderDetails = location.state;

  if (!orderDetails) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-40 pb-24 px-6 bg-beige min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
          
          <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 text-gold">
            <CheckCircle size={48} />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Thank You For Your Order</h1>
          <p className="text-black/50 mb-10 leading-relaxed italic">
            Your elegance is on its way. We've received your order and our artisans are preparing it for shipment to Nelspruit.
          </p>

          <div className="bg-beige/40 p-8 rounded-3xl mb-12 text-left">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2 block">Order Number</span>
                <p className="font-serif font-bold text-lg italic">{orderDetails.orderNumber}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2 block">Shipping To</span>
                <p className="text-xs font-bold uppercase tracking-wider">{orderDetails.firstName} {orderDetails.lastName}</p>
                <p className="text-[10px] text-black/50">{orderDetails.address}, {orderDetails.city}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-center text-gold space-x-2 text-xs font-bold uppercase tracking-[0.2em]">
              <Truck size={16} /> <span>Estimated Delivery: 24-48 Hours</span>
            </div>
            <div className="flex items-center justify-center text-black/30 space-x-2 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Mail size={14} /> <span>An update has been sent to {orderDetails.email}</span>
            </div>
          </div>

          <div className="h-px bg-black/5 mb-12" />

          {/* Special Offer Section */}
          <div className="bg-luxury-black p-10 rounded-3xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full -mr-16 -mt-16 blur-2xl" />
            <h3 className="text-2xl font-serif font-bold mb-4 italic">The Journey Continues</h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed italic">Get 10% Off Your Next Luxury Purchase</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="px-8 py-3 border-2 border-dashed border-gold/40 rounded-xl text-gold font-serif font-bold text-xl tracking-widest">
                LOMMAVY10
              </div>
              <Link to="/shop" className="text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors flex items-center">
                Shop Next Collection <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://instagram.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="p-4 bg-beige rounded-full text-black/30 hover:text-gold transition-all">
              <Instagram size={20} />
            </a>
            <Link to="/" className="p-4 bg-beige rounded-full text-black/30 hover:text-gold transition-all">
              <Package size={20} />
            </Link>
          </div>
        </motion.div>
        
        <p className="text-[9px] text-black/30 uppercase tracking-[0.4em] mt-12 italic">Luxury in every strand. Elegance in every stitch.</p>
      </div>
    </div>
  );
}
