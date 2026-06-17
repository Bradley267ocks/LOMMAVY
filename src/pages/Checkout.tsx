import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/src/context/CartContext';
import { formatPrice, cn } from '@/src/lib/utils';
import { 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  Mail, 
  Phone as PhoneIcon, 
  ShoppingBag, 
  Info,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '@/src/components/SEO';
import { mockProducts } from '@/src/data/mockProducts';

export default function Checkout() {
  const { cart, totalPrice, clearCart, addToCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeStep === 1) setActiveStep(2);
    else handleSubmit(e);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      const orderNumber = `LMY-${Math.floor(Math.random() * 1000000)}`;
      navigate('/confirmation', { state: { orderNumber, ...formData } });
      setLoading(false);
    }, 2500);
  };

  const shipping = totalPrice > 1000 ? 0 : 150; 
  const total = totalPrice + shipping;

  const steps = [
    { id: 1, name: 'Identity & Logistics' },
    { id: 2, name: 'Final Review & Settlement' }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Progress Tracker */}
        <div className="flex items-center justify-center mb-16 md:mb-24">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500",
                  activeStep >= step.id ? "bg-luxury-black text-white shadow-xl scale-110" : "bg-beige text-black/20"
                )}>
                  {activeStep > step.id ? <CheckCircle size={20} className="text-gold" /> : step.id}
                </div>
                <span className={cn(
                  "mt-4 text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap",
                  activeStep >= step.id ? "text-luxury-black" : "text-black/20"
                )}>{step.name}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={cn(
                  "w-16 md:w-32 h-px mb-8 mx-4 transition-colors duration-500",
                  activeStep > step.id ? "bg-gold" : "bg-black/5"
                )} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Checkout Form Area */}
          <div className="flex-grow">
            <div className="mb-10">
              <button 
                onClick={() => activeStep === 1 ? navigate(-1) : setActiveStep(1)}
                className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-gold transition-colors mb-6"
              >
                <ArrowLeft size={14} className="mr-2" /> {activeStep === 1 ? "Back to collection" : "Edit shipping details"}
              </button>
              <h1 className="text-4xl md:text-5xl font-serif font-bold italic leading-tight">
                {activeStep === 1 ? "Shipping & Identity" : "Review & Settlement"}
              </h1>
            </div>

            <form onSubmit={handleNextStep}>
              <AnimatePresence mode="wait">
                {activeStep === 1 ? (
                  <motion.section
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">First Name</label>
                        <input
                          required
                          type="text"
                          autoComplete="given-name"
                          className="w-full px-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium"
                          placeholder="Ex: Lerato"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">Last Name</label>
                        <input
                          required
                          type="text"
                          autoComplete="family-name"
                          className="w-full px-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium"
                          placeholder="Ex: Kunene"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">Secure Email Contact</label>
                        <div className="relative">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                          <input
                            required
                            type="email"
                            autoComplete="email"
                            className="w-full pl-16 pr-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium"
                            placeholder="For order tracking updates..."
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">Telephone</label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                          <input
                            required
                            type="tel"
                            autoComplete="tel"
                            className="w-full pl-16 pr-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium"
                            placeholder="Primary contact line"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">Street Address</label>
                        <input
                          required
                          type="text"
                          autoComplete="street-address"
                          className="w-full px-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium"
                          placeholder="House number and street name"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">City</label>
                        <input
                          required
                          type="text"
                          autoComplete="address-level2"
                          className="w-full px-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium"
                          placeholder="Ex: Nelspruit"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4">Province</label>
                        <select
                          className="w-full px-8 py-5 bg-beige/40 rounded-2xl border border-transparent focus:border-gold/20 focus:ring-4 focus:ring-gold/10 outline-none transition-all text-sm font-medium appearance-none cursor-pointer"
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
                  </motion.section>
                ) : (
                  <motion.section
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="p-8 bg-beige/30 rounded-3xl border border-black/5 flex items-start space-x-6">
                      <div className="p-4 bg-white rounded-2xl text-gold shadow-sm">
                        <Truck size={24} />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg italic mb-1">Standard Doorstep Delivery</h4>
                        <p className="text-black/50 text-xs italic leading-relaxed">Your order will be securely packed in our signature ivory boxes and dispatched via trackable courier to {formData.address}.</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 ml-4 flex items-center">
                        <CreditCard size={14} className="mr-2" /> Settlement Channels
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'paystack', name: 'Secure Card Payments (Paystack)', logo: 'https://paystack.com/images/logos/paystack-logo-blue.png' },
                          { id: 'payfast', name: 'Private Instant EFT (PayFast)', logo: 'https://www.payfast.co.za/wp-content/uploads/2021/04/PF_logo_new.png' }
                        ].map((p) => (
                          <label key={p.id} className="relative flex items-center p-6 border border-black/5 rounded-[2rem] bg-white hover:border-gold/30 transition-all cursor-pointer group shadow-sm">
                            <input type="radio" name="payment" defaultChecked={p.id === 'paystack'} className="w-5 h-5 accent-gold cursor-pointer" />
                            <div className="ml-6 flex-grow flex justify-between items-center">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-black/70">{p.name}</span>
                              <img src={p.logo} alt={p.name} className="h-6 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>

              <div className="mt-16 pt-10 border-t border-black/5 space-y-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-luxury-black text-white font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs rounded-2xl hover:bg-gold transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {loading ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      {activeStep === 1 ? 'Save & Review Journey' : 'Authorize Secure Transaction'}
                      <ArrowRight size={16} className="ml-4 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>

                {activeStep === 2 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[9px] text-black/40 font-bold uppercase tracking-widest text-center">
                    <span className="flex items-center"><ShieldCheck size={12} className="mr-2 text-gold" /> Encrypted TLS Security</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center"><CreditCard size={12} className="mr-2 text-gold" /> Licensed Merchant</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center"><Truck size={12} className="mr-2 text-gold" /> National Express</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary (Always visible/sticky) */}
          <div className="w-full lg:w-[450px]">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-black/5 sticky top-32">
              <h2 className="text-2xl font-serif font-bold mb-10 italic flex items-center justify-between">
                Order Essence
                <ShoppingBag size={20} className="text-gold/30" />
              </h2>
              
              <div className="space-y-8 mb-8 max-h-[35vh] overflow-y-auto pr-4 scrollbar-hide custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.productId} className="flex space-x-4 md:space-x-6">
                    <div className="w-16 md:w-20 h-20 md:h-24 bg-beige rounded-2xl overflow-hidden shrink-0 border border-black/5 relative group">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-1 right-1 md:top-2 md:right-2 w-5 h-5 md:w-6 md:h-6 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-[9px] md:text-[10px] font-bold shadow-md">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center space-y-0.5 md:space-y-1">
                      <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider line-clamp-2 leading-tight text-luxury-black">{item.name}</h4>
                      <p className="text-gold font-serif text-xs md:text-sm italic">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secure Checkout Upsell (Small add-ons) */}
              <div className="mb-8 pt-6 border-t border-black/5">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-black/30 mb-4 flex items-center italic">
                  <Sparkles size={12} className="text-gold mr-1.5" /> Complete Your Purchase
                </h4>
                <div className="space-y-3">
                  {mockProducts.filter(p => p.category === 'accessories' || p.price < 500).slice(0, 1).map(p => (
                    <div key={p.id} className="p-3 bg-beige/30 rounded-xl border border-dashed border-gold/25 flex items-center justify-between group hover:bg-beige/50 transition-all">
                      <div className="flex items-center space-x-3">
                        <img src={p.images[0]} alt={p.name} className="w-10 h-12 rounded-lg object-cover bg-white shadow-sm" />
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-wide truncate max-w-[120px]">{p.name}</p>
                          <p className="text-gold font-serif text-[10px] italic">{formatPrice(p.price)}</p>
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
                        className="px-3 py-1.5 bg-luxury-black text-white text-[8px] font-bold uppercase tracking-widest rounded-lg hover:bg-gold transition-all"
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5 mb-10 pt-8 border-t border-black/5">
                <div className="flex justify-between items-center text-xs font-semibold italic">
                  <span className="text-black/40">Immediate Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold italic">
                  <div className="flex flex-col">
                    <span className="text-black/40">Secure Shipping</span>
                    <span className="text-[8px] font-bold text-gold uppercase tracking-[0.1em] mt-0.5">{shipping === 0 ? "Complimentary Access" : "Standard National Rate"}</span>
                  </div>
                  <span className={cn(shipping === 0 ? "text-green-600 font-bold" : "")}>
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="h-px bg-black/5 my-6" />
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 block mb-1">Authorization Total</span>
                    <span className="text-3xl font-serif font-bold italic tracking-tight text-luxury-black">{formatPrice(total)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-1 rounded-md border border-green-100">
                      ZAR Authorized
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-beige/40 rounded-2xl border border-black/5 space-y-4">
                <div className="flex items-center text-[9px] text-black/50 uppercase tracking-widest leading-relaxed">
                  <Info size={14} className="mr-3 text-gold shrink-0" />
                  <span>Orders authorized by 2 PM are dispatched the same business day for local Nelspruit regions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
