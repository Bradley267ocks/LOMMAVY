import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck, Headphones, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/src/components/ProductCard';
import { getProducts } from '@/src/lib/data-service';
import { Product } from '@/src/types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      const all = await getProducts();
      setFeaturedProducts(all.filter(p => p.featured));
      setLoading(false);
    };
    fetchFeatured();
  }, []);

  const categories = [
    {
      title: 'Luxury Handbags',
      image: 'https://i.ibb.co/DfCtP4Sm/Gemini-Generated-Image-glby8uglby8uglby-2-HAND-BAG-RED-R780.png',
      link: '/shop?category=handbags',
      desc: 'Sophisticated accessories for the modern woman.'
    },
    {
      title: 'Straight Wigs',
      image: 'https://i.ibb.co/PZ3wQ7hk/Gemini-Generated-Image-glby8uglby8uglby-8-LONG-WIG-R470.png',
      link: '/shop?category=straight wigs',
      desc: 'Seamless, high-grade silk straight hair.'
    },
    {
      title: 'Curly Wigs',
      image: 'https://i.ibb.co/BHZvc8MG/Gemini-Generated-Image-glby8uglby8uglby-7.png',
      link: '/shop?category=curly wigs',
      desc: 'Rich, bouncy curls for a natural glow.'
    },
    {
      title: 'Lace Front Wigs',
      image: 'https://images.unsplash.com/photo-1634449591010-871ee5d06b7d?auto=format&fit=crop&q=80&w=600',
      link: '/shop?category=lace front wigs',
      desc: 'Undetectable hairlines, premium lace.'
    },
    {
      title: 'Hair Bundles',
      image: 'https://i.ibb.co/Kjwm2hyV/Gemini-Generated-Image-glby8uglby8uglby-6-SHORT-WIG-R300.png',
      link: '/shop?category=hair bundles',
      desc: 'Pristine 100% human hair for volume.'
    }
  ];

  const features = [
    { icon: <Sparkles className="text-gold" />, title: 'Premium Quality', desc: 'Hand-selected luxury materials and grade 12A virgin hair.' },
    { icon: <ShieldCheck className="text-gold" />, title: 'Affordable Luxury', desc: 'Elegance that fits your budget without compromise.' },
    { icon: <ShieldCheck className="text-gold" />, title: 'Secure Ordering', desc: 'Encrypted transactions for your peace of mind.' },
    { icon: <Truck className="text-gold" />, title: 'Fast Delivery', desc: 'Reliable doorstep shipping across South Africa.' },
    { icon: <Headphones className="text-gold" />, title: 'Expert Support', desc: 'Friendly guidance for all your beauty needs.' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/VcRHcS21/Gemini-Generated-Image-2.png"
            alt="Lommavy Luxury - Premium Handbags and Wigs"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Luxury Bags & <br />
              <span className="italic text-gold">Premium</span> Brazilian Hair
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl leading-relaxed font-light">
              Elevate Your Style with Premium Fashion and Beauty Products. Discover Lommavy's exclusive collections today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to="/shop?category=handbags"
                className="px-8 py-5 bg-gold hover:bg-gold-dark text-white font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center group rounded-sm shadow-xl"
              >
                Shop Bags
              </Link>
              <Link
                to="/shop?category=straight%20wigs"
                className="px-8 py-5 bg-white text-luxury-black hover:bg-beige font-bold uppercase tracking-widest text-[10px] transition-all rounded-sm flex items-center justify-center shadow-xl"
              >
                Shop Wigs
              </Link>
              <Link
                to="/shop?category=hair%20bundles"
                className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-widest text-[10px] transition-all border border-white/20 rounded-sm flex items-center justify-center shadow-xl"
              >
                Shop Bundles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-luxury-black py-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40">
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white">Ethically Sourced</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white">Grade 12A Quality</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white">Secure Checkout</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white">Fast Local Shipping</span>
          </div>
        </div>
      </section>

      {/* Best Sellers / Signature Pieces */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div className="max-w-xl">
              <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">Most Wanted</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 italic">Customer Favorites</h2>
              <p className="text-black/50 text-sm italic">Discover the pieces that stole the hearts of our community.</p>
            </div>
            <Link to="/shop" className="group flex items-center text-luxury-black font-bold uppercase tracking-widest text-xs">
              Explore All Products <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="h-[450px] bg-beige animate-pulse rounded-2xl" />
              ))
            ) : (
              featuredProducts.slice(0, 8).map((p) => (
                <div key={p.id} className="scale-95 hover:scale-100 transition-transform duration-500">
                  <ProductCard product={p} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Shop By Category - Enhanced */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Shop By Category</h2>
            <div className="h-1 w-24 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer shadow-lg"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="text-xl font-serif font-bold mb-2">{cat.title}</h3>
                  <Link to={cat.link} className="text-gold text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Selection
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Trust */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">The Lommavy Standard</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight">Defining <br />Elegance</h2>
              <p className="text-black/50 text-sm leading-relaxed max-w-sm mb-12">
                We believe luxury isn't just about the product; it's about how it makes you feel. From premium sourcing to artisan craftsmanship.
              </p>
              <div className="flex items-center space-x-4 p-6 bg-beige rounded-2xl border border-black/5">
                <div className="w-12 h-12 bg-luxury-black text-white rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Money Back Guarantee</h4>
                  <p className="text-[10px] text-black/40">7-day hassle-free returns on handbags.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="p-10 bg-beige/50 rounded-[2.5rem] border border-black/5 hover:border-gold/30 transition-all group">
                  <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl mb-8 text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h4 className="font-serif font-bold text-2xl mb-4 italic">{f.title}</h4>
                  <p className="text-sm text-black/50 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Concierge Section */}
      <section className="py-20 px-6 bg-beige/80">
        <div className="max-w-5xl mx-auto bg-luxury-black p-10 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">Personal Style Concierge</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">Need help choosing the perfect product? Our expert team is ready to guide your selection.</p>
            <a 
              href="https://wa.me/27611423309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-5 bg-[#25D366] text-white font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
            >
              <MessageCircle size={20} className="mr-3" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">The Lommavy Society</h2>
            <p className="text-black/40 text-sm italic">Voices of satisfied elegance from across Mpumalanga.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                name: 'Thabo M.', 
                role: 'Fashion Blogger', 
                text: "The quality of the Brazilian hair is unmatched. It feels so natural and the lace is practically invisible.",
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
              },
              { 
                name: 'Lerato K.', 
                role: 'Corporate Executive', 
                text: "My Lommavy bag is the star of every boardroom meeting. Sophisticated, durable, and truly a luxury piece.",
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
              },
              { 
                name: 'Zanele J.', 
                role: 'Beauty Influencer', 
                text: "Fast delivery and premium packaging. Opening a Lommavy box feels like a special event every single time.",
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-10 bg-beige/30 rounded-[2rem] border border-black/5 relative"
              >
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-black/70 mb-10 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest">{t.name}</h5>
                    <p className="text-[9px] text-black/30 uppercase">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-black/40 text-sm italic">Everything you need to know about our luxury collections.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "Is your hair 100% human hair?", a: "Yes, all Lommavy hair products (Wigs and Bundles) are 100% virgin Brazilian human hair, grade 12A, ensuring a natural look and long-lasting quality." },
              { q: "How long does shipping take?", a: "Orders within Nelspruit are delivered within 24 hours. Provincial orders across Mpumalanga take 2-3 business days. National and International shipping varies by location." },
              { q: "Can I return a handbag if I change my mind?", a: "We offer a 7-day return policy for unused handbags in their original packaging with all tags attached. Please contact our support for details." },
              { q: "Do you offer wholesale prices?", a: "Yes, we have a premium wholesale program for boutiques and stylists. Please contact us via WhatsApp to discuss bulk ordering." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-beige rounded-3xl"
              >
                <h4 className="font-serif font-bold text-lg mb-3 italic">{faq.q}</h4>
                <p className="text-black/60 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 italic">Join the Inner Circle</h2>
          <p className="text-black/50 mb-10 max-w-lg mx-auto italic">Receive exclusive access to new drops, luxury fashion tips, and a <span className="text-gold font-bold">10% discount</span> on your first purchase.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-grow px-8 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/30 transition-all font-bold text-[10px] uppercase tracking-widest"
              required
            />
            <button className="px-10 py-5 bg-luxury-black text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-gold transition-all shadow-xl">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-black/30 mt-8 uppercase tracking-[0.4em] italic leading-loose">Elegance is an investment. Start yours today.</p>
        </div>
      </section>
    </div>
  );
}
