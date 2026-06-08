import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/src/context/CartContext';
import { formatPrice } from '@/src/lib/utils';
import { ShieldCheck, CreditCard, Truck, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: 'Mpumalanga',
    zipCode: ''
  });

  if (cart.length === 0) {
    navigate('/shop');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/confirmation', { state: { orderNumber: `LMY-${Math.floor(Math.random() * 1000000)}`, ...formData } });
      setLoading(false);
    }, 2000);
  };

  const shipping = 150; // ZAR 150 Flat rate
  const total = getCartTotal() + shipping;

  return (
    <div className="pt-32 pb-24 px-6 bg-beige min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="flex-grow">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-xs font-bold uppercase tracking-widest text-black/40 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={14} className="mr-2" /> Back to selection
            </button>
            <h1 className="text-4xl font-serif font-bold mb-10 italic">Complete Your Order</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                <h2 className="text-xl font-serif font-bold mb-6 italic">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Delivery Address</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">City</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Province</label>
                    <select
                      className="w-full px-6 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                      value={formData.province}
                      onChange={(e) => setFormData({...formData, province: e.target.value})}
                    >
                      <option>Mpumalanga</option>
                      <option>Gauteng</option>
                      <option>Western Cape</option>
                      <option>KwaZulu-Natal</option>
                      <option>Limpopo</option>
                      <option>Free State</option>
                      <option>Eastern Cape</option>
                      <option>North West</option>
                      <option>Northern Cape</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                <h2 className="text-xl font-serif font-bold mb-6 italic">Payment Method</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'paystack', name: 'Paystack (Cards & EFT)', logo: 'https://paystack.com/images/logos/paystack-logo-blue.png' },
                    { id: 'payfast', name: 'PayFast', logo: 'https://www.payfast.co.za/wp-content/uploads/2021/04/PF_logo_new.png' }
                  ].map((p) => (
                    <div key={p.id} className="flex items-center p-4 border border-black/5 rounded-2xl bg-beige/20 hover:border-gold/30 transition-all cursor-pointer">
                      <input type="radio" name="payment" defaultChecked={p.id === 'paystack'} className="mr-4 accent-gold" />
                      <div className="flex-grow flex justify-between items-center">
                        <span className="text-sm font-bold uppercase tracking-widest text-black/60">{p.name}</span>
                        <img src={p.logo} alt={p.name} className="h-6 opacity-30" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-luxury-black text-white font-bold uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-gold transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing Payment...' : 'Authorize Transaction'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-black/5 sticky top-32">
              <h2 className="text-xl font-serif font-bold mb-8 italic pb-6 border-b border-black/5">Order Summary</h2>
              <div className="space-y-6 mb-10 max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={item.productId} className="flex space-x-4">
                    <div className="w-16 h-16 bg-beige rounded-xl overflow-hidden shrink-0 border border-black/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xs font-bold uppercase tracking-wider line-clamp-1 mb-1">{item.name}</h4>
                      <div className="flex justify-between items-center text-[10px] text-black/40">
                        <span>Qty: {item.quantity}</span>
                        <span className="font-bold text-black">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm italic">
                  <span className="text-black/40">Subtotal</span>
                  <span className="font-bold">{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-sm italic">
                  <span className="text-black/40">Shipping (South Africa)</span>
                  <span className="font-bold">{formatPrice(shipping)}</span>
                </div>
                <div className="h-px bg-black/5 my-4" />
                <div className="flex justify-between text-xl font-serif font-bold italic">
                  <span>Grand Total</span>
                  <span className="text-gold">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-black/5">
                <div className="flex items-center text-[9px] text-black/40 uppercase tracking-widest">
                  <ShieldCheck size={14} className="mr-2 text-gold" /> Secure Payment SSL Encrypted
                </div>
                <div className="flex items-center text-[9px] text-black/40 uppercase tracking-widest">
                  <Truck size={14} className="mr-2 text-gold" /> Doorstep Delivery across Mpumalanga
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
