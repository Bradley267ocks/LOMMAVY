import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '@/src/components/SEO';
import { 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  HelpCircle,
  Clock,
  ThumbsUp,
  BadgeAlert,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/src/components/ProductCard';
import { getProducts } from '@/src/lib/data-service';
import { Product } from '@/src/types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  const [newsEmail, setNewsEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  useEffect(() => {
    const fetchFeatured = async () => {
      const all = await getProducts();
      // Filter featured ones
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
      desc: 'Masterfully stitched, premium accessories.'
    },
    {
      title: 'Brazilian Hair',
      image: 'https://i.ibb.co/BHZvc8MG/Gemini-Generated-Image-glby8uglby8uglby-7.png',
      link: '/shop?category=hair%20bundles',
      desc: 'Grade 12A virgin Brazilian tresses.'
    },
    {
      title: 'Wigs',
      image: 'https://i.ibb.co/Kj2053mT/IMG-20260613-WA0000-bob-blond-wig.jpg',
      link: '/shop?category=wigs',
      desc: 'Seamless lace fronts and glueless designs.'
    },
    {
      title: 'Bundles',
      image: 'https://i.ibb.co/Dg1TLkDs/1781445670046-blue-bag-R500.png',
      link: '/shop?category=hair%20bundles',
      desc: 'Triple-wefted human hair bundles.'
    },
    {
      title: 'Closures & Frontals',
      image: 'https://i.ibb.co/PkNrMWv/IMG-20260613-WA0017.jpg',
      link: '/shop?category=lace%20front%20wigs',
      desc: 'HD lace for undetectable styling finishes.'
    },
    {
      title: 'New Arrivals',
      image: 'https://i.ibb.co/6JyrZ9WF/1781445851302-BLACK-HAND-BAG-R489.png',
      link: '/shop?sort=newest',
      desc: 'Our latest curated luxury releases.'
    }
  ];

  const trustBadges = [
    { icon: <ShieldCheck className="text-gold" size={28} />, title: 'Secure Checkout', desc: 'Fully encrypted and safe local payment paths.' },
    { icon: <Truck className="text-gold" size={28} />, title: 'Fast Delivery', desc: 'Reliable doorstep shipping across South Africa.' },
    { icon: <ThumbsUp className="text-gold" size={28} />, title: 'Quality Guaranteed', desc: '100% human hair and hand-picked elite leather.' },
    { icon: <Clock className="text-gold" size={28} />, title: 'Customer Support', desc: 'Dedicated WhatsApp fashion consultation concierge.' },
    { icon: <Sparkles className="text-gold" size={28} />, title: 'Premium Products', desc: 'Meticulously crafted items reflecting timeless elegance.' }
  ];

  const reviews = [
    {
      name: 'Thabo M.',
      role: 'Fashion Consultant',
      rating: 5,
      text: "The quality of Lommavy's Brazilian hair is simply unparalleled. It feels astonishingly natural, maintains silkiness, and the HD lace disappears effortlessly.",
      img: 'https://i.ibb.co/HTkvGKnJ/IMG-20260613-WA0006.jpg'
    },
    {
      name: 'Lerato K.',
      role: 'Corporate Director',
      rating: 5,
      text: "My Lommavy Red Handbag is the absolute star of every business summit. The stitching, material, and weight define luxury, yet it remains incredibly functional.",
      img: 'https://i.ibb.co/Dg1TLkDs/1781445670046-blue-bag-R500.png'
    },
    {
      name: 'Zanele J.',
      role: 'Lifestyle Influencer',
      rating: 5,
      text: "Opening a Lommavy box feels like entering a high-end French boutique. The fast shipping across Mpumalanga and flawless personal service left me customized and pampered.",
      img: 'https://i.ibb.co/Cs9JP6RV/1781445741274-leather-hand-bag-R700.png'
    }
  ];

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Orders within Nelspruit are dispatched and delivered within 24 hours. Provincial orders across Mpumalanga take 2-3 business days. Deliveries across other regions in South Africa also complete within 3-4 business days with secure door-to-door tracking."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept secure online transactions via Paystack and PayFast. You can securely pay with any credit card, debit card, instant EFT, or mobile banking application."
    },
    {
      q: "Can I return products?",
      a: "Yes, we proudly offer a 7-day return policy on unused, pristine-condition handbags and accessories in their original packaging with all secure tags attached. Hair products can be returned if they remain unopened and unhandled for hygiene reasons."
    },
    {
      q: "How do I care for Brazilian hair?",
      a: "Co-wash regularly with sulfate-free premium shampoo and moisturizing conditioner. Air-dry your hair natural waves, detangle gently starting from ends with a wide-tooth brush, and sleep on a satin silk pillowcase or wear a luxury bonnet to prevent tangling."
    },
    {
      q: "How do I track my order?",
      a: "Once your shipment is registered with our courier, you will receive an automatic dispatch notification via email or WhatsApp containing a real-time secure tracking link. You can track your parcel straight to your doorstep!"
    }
  ];

  const instagramGallery = [
    { id: 1, img: 'https://i.ibb.co/qMLT2Knt/IMG-20260613-WA0004.jpg', likes: '1.2k', link: '/shop' },
    { id: 2, img: 'https://i.ibb.co/krxDb6Q/IMG-20260613-WA0005.jpg', likes: '2.4k', link: '/shop' },
    { id: 3, img: 'https://i.ibb.co/390KLFnR/IMG-20260613-WA0011.jpg', likes: '980', link: '/shop' },
    { id: 4, img: 'https://i.ibb.co/LzfQwPDc/IMG-20260613-WA0013.jpg', likes: '4.1k', link: '/shop' },
    { id: 5, img: 'https://i.ibb.co/twP8DWZT/IMG-20260613-WA0012.jpg', likes: '1.8k', link: '/shop' },
    { id: 6, img: 'https://i.ibb.co/HTkvGKnJ/IMG-20260613-WA0006.jpg', likes: '3.3k', link: '/shop' }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-beige">
      <SEO 
        title="Lommavy Luxury | Premium Handbags & Brazilian Hair"
        description="Discover the finest collection of luxury ladies handbags, Brazilian wigs, and hair bundles in South Africa. Elegance redefined for the modern woman."
        keywords="luxury handbags, brazilian hair, wigs, hair bundles, fashion accessories, South Africa"
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/9mFd4mXC/IMG-20260613-WA0018-GROUPE-PRODUCT-IMAGE.jpg"
            alt="Lommavy Premium Bags and Wig Collection"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-luxury-black/55 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">Exclusive Luxury Atelier</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6">
              Luxury Bags & <br />
              <span className="italic text-gold">Premium</span> Brazilian Hair
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-light">
              Elevate your daily presence with the ultimate crown of Brazilian virgin hair and signature custom leather statement bags. Designed for timeless elegance and luxury styling.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/shop"
                className="px-10 py-5 bg-gold hover:bg-gold-dark text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center rounded-xl shadow-2xl hover:scale-[1.03] active:scale-95"
              >
                Shop Now
              </Link>
              <a
                href="https://wa.me/27611423309"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center rounded-xl shadow-2xl hover:scale-[1.03] active:scale-95 space-x-2"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Mini Bar */}
      <section className="bg-luxury-black py-8 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center">
            <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/80">Ethically Sourced</span>
            <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/80">Grade 12A Quality</span>
            <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/80">Secure SSL Checkout</span>
            <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/80">Fast SA Delivery</span>
          </div>
        </div>
      </section>

      {/* 2. Best Sellers Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div className="max-w-xl">
              <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">Most Wanted</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 italic">Best Sellers</h2>
              <p className="text-black/50 text-sm italic">Discover the highly sought-after pieces defining modern luxury and exquisite taste.</p>
            </div>
            <Link to="/shop" className="group flex items-center text-luxury-black font-bold uppercase tracking-widest text-xs">
              Explore All Products <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="h-[430px] bg-beige animate-pulse rounded-2xl" />
              ))
            ) : (
              featuredProducts.slice(0, 8).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* 3. Shop By Category Section */}
      <section className="py-24 px-6 bg-beige/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Premium Curations</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Shop By Category</h2>
            <div className="h-0.5 w-16 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-luxury-black"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/35 to-transparent transition-all group-hover:via-luxury-black/45" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col justify-end">
                  <span className="text-[9px] text-gold font-bold uppercase tracking-[0.2em] mb-2">Explore Selection</span>
                  <h3 className="text-2xl font-serif font-bold mb-2 italic leading-tight">{cat.title}</h3>
                  <p className="text-xs text-white/70 line-clamp-2 mb-6 font-light leading-relaxed">{cat.desc}</p>
                  <Link 
                    to={cat.link} 
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300 w-fit"
                  >
                    Enter Atelier <ArrowRight size={12} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Product Highlight */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://i.ibb.co/HTkvGKnJ/IMG-20260613-WA0006-RED-AND-BROWN-BAG-R600.jpg" 
                  alt="Spotlight Collection Brand Image" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-44 md:w-56 h-44 md:h-56 bg-beige p-6 rounded-[2.5rem] shadow-xl border border-black/5 hidden md:flex flex-col justify-center text-center">
                <span className="text-gold font-bold text-3xl font-serif uppercase block italic">R600</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/50 mt-2 block">Available Now<br />Harvest Blend Bag</span>
                <Link to="/shop?id=wa-0006" className="mt-4 text-[9px] font-bold tracking-widest uppercase text-luxury-black hover:text-gold block transition-colors underline">Order Today</Link>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-gold font-bold uppercase tracking-widest text-[10px] block">Signature Highlight</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold italic leading-tight">Artisanship in <br />Every Stitch</h2>
              <p className="text-black/60 text-base leading-relaxed">
                Our luxury handbags and elite Brazilian hair extensions are not mere additions to your wardrobe—they represent raw, uncompromised expressions of fine craftsmanship. Each handbag features hand-quilted finishes, robust precious-metal hardware, and spacious organic interiors, while our 100% human virgin hair bundles deliver a naturally flowing, tangle-free crown of pure luxury.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/5">
                <div>
                  <h4 className="text-xl font-serif font-bold italic mb-1">Grade 12A</h4>
                  <p className="text-xs text-black/50">Double-drawn virgin hair holding waves for months securely.</p>
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold italic mb-1">Artisan Sourced</h4>
                  <p className="text-xs text-black/50">Ethical leather and premium accessories handcrafted to endure.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/shop" className="px-8 py-4 bg-luxury-black text-white hover:bg-gold hover:text-white transition-opacity font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-lg">
                  Explore Full Atelier
                </Link>
                <Link to="/about" className="px-8 py-4 border border-black/10 text-luxury-black hover:bg-beige transition-colors font-bold uppercase tracking-widest text-[10px] rounded-xl">
                  Our Legacy Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Shop With Lommavy (Trust Badges Section) */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-3 block">Why Choose Lommavy</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">The Standard of Excellence</h2>
            <div className="h-0.5 w-12 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {trustBadges.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-[2rem] border border-black/5 shadow-sm text-center flex flex-col items-center hover:shadow-md hover:border-gold/20 transition-all group"
              >
                <div className="w-16 h-16 bg-beige/60 rounded-2xl flex items-center justify-center mb-6 text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  {t.icon}
                </div>
                <h4 className="font-serif font-bold text-lg mb-2 italic tracking-tight">{t.title}</h4>
                <p className="text-xs text-black/50 leading-relaxed font-light">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews Section (Interactive Testimonial Slider) */}
      <section className="py-24 px-6 bg-white overflow-hidden relative border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-3 block">Real Experiences</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">The Lommavy Society</h2>
            <p className="text-black/50 text-sm italic mt-2">Voices of satisfied elegance from across Mpumalanga.</p>
          </div>

          <div className="relative bg-beige/40 p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-sm">
            <div className="absolute top-8 right-10 text-gold/10 font-serif text-[120px] font-black leading-none pointer-events-none select-none">“</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex text-gold space-x-1">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-lg md:text-2xl font-serif italic text-black/80 leading-relaxed font-medium">
                  "{reviews[currentReview].text}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-black/5">
                  <img 
                    src={reviews[currentReview].img} 
                    alt={reviews[currentReview].name} 
                    className="w-14 h-14 rounded-full object-cover grayscale brightness-105 border border-gold/20"
                  />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-widest text-luxury-black">{reviews[currentReview].name}</h5>
                    <p className="text-[10px] text-black/50 uppercase tracking-widest font-bold">{reviews[currentReview].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots & Navigation Controls */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-black/5">
              <div className="flex space-x-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${currentReview === idx ? "w-8 bg-gold" : "w-2.5 bg-luxury-black/10"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  className="p-3 bg-white hover:bg-gold hover:text-white rounded-full border border-black/5 shadow-sm active:scale-95 transition-all outline-none"
                  aria-label="Previous Review"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextReview}
                  className="p-3 bg-white hover:bg-gold hover:text-white rounded-full border border-black/5 shadow-sm active:scale-95 transition-all outline-none"
                  aria-label="Next Review"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Gallery / Customer Showcase (Interactive bento feed) */}
      <section className="py-24 px-6 bg-beige/40 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-3 block">@Lommavy</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">The Customer Gallery</h2>
            <p className="text-black/50 text-xs tracking-wide uppercase mt-2">Authentic moments from the Lommavy society.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              "https://i.ibb.co/qMLT2Knt/IMG-20260613-WA0004.jpg",
              "https://i.ibb.co/krxDb6Q/IMG-20260613-WA0005.jpg",
              "https://i.ibb.co/390KLFnR/IMG-20260613-WA0011.jpg",
              "https://i.ibb.co/LzfQwPDc/IMG-20260613-WA0013.jpg",
              "https://i.ibb.co/twP8DWZT/IMG-20260613-WA0012.jpg",
              "https://i.ibb.co/HTkvGKnJ/IMG-20260613-WA0006.jpg"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-square rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl cursor-pointer bg-luxury-black"
              >
                <img 
                  src={img} 
                  alt="Customer showcase" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <Star fill="currentColor" className="text-gold mb-2" size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Shop Style</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section (Accordion Layout) */}
      <section className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="text-gold mx-auto mb-4" size={32} />
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-black/50 text-sm italic">Everything you need to know about our luxury collections and shipping.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFAQ === i;
              return (
                <div
                  key={i}
                  className="bg-beige/40 rounded-2xl border border-black/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base md:text-lg italic text-luxury-black">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="p-1.5 bg-white rounded-full shadow-sm text-gold"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 text-black/60 text-sm leading-relaxed border-t border-black/5 bg-white/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Elegant Styled Newsletter Callout */}
      <section className="py-24 px-6 bg-beige/60">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-xl text-center border border-black/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 italic">Join the Inner Circle</h2>
          <p className="text-black/50 mb-10 max-w-lg mx-auto italic text-sm">Become part of the premium society. Enjoy early previews on luxury drops, lifestyle guidelines, and safe <span className="text-gold font-bold">10% discount</span> code on your first drop.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubscribe}>
            {subscribed ? (
              <div className="flex-grow py-5 text-gold font-bold uppercase tracking-widest text-xs animate-in fade-in slide-in-from-bottom-4">
                Thank you. You have been added to our luxury mailing list.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="YOUR EMAIL ADDRESS"
                  className="flex-grow px-8 py-4 bg-beige/50 rounded-xl outline-none focus:ring-2 focus:ring-gold/35 transition-all font-bold text-[10px] uppercase tracking-widest placeholder-black/30"
                  required
                />
                <button type="submit" className="px-10 py-5 bg-luxury-black text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-gold transition-all shadow-md active:scale-95 shrink-0">
                  Subscribe
                </button>
              </>
            )}
          </form>
          <p className="text-[10px] text-black/40 mt-8 uppercase tracking-[0.4em] italic leading-loose">Elegance is an investment. Start yours today.</p>
        </div>
      </section>
    </div>
  );
}
