import { Instagram, Facebook, Phone as WhatsApp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-20 relative p-8 md:p-16 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-gold/20 transition-all duration-700" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold italic mb-4">Join the Inner Circle</h3>
              <p className="text-white/50 italic leading-relaxed text-sm">Receive exclusive collection previews and a <span className="text-gold font-bold">10% discount</span> on your first order.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-grow px-8 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-gold/50 transition-all text-xs font-bold uppercase tracking-widest"
              />
              <button className="px-10 py-4 bg-gold text-luxury-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-white transition-all shadow-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-20">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-[0.3em] text-gold italic">LOMMAVY</h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xs italic">
              "Elevating your style with premium luxury handbags, Brazilian wigs, and high-quality hair bundles. Confidence and elegance in every piece."
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-gold/20 hover:text-gold active:scale-90 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-gold/20 hover:text-gold active:scale-90 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/233611423309" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-gold/20 hover:text-gold active:scale-90 transition-all">
                <WhatsApp size={20} />
              </a>
            </div>
          </div>

          <div className="sm:pl-4">
            <h3 className="text-lg font-serif font-bold mb-8 text-gold italic">Quick Links</h3>
            <ul className="space-y-5 text-sm md:text-base text-white/60">
              <li><Link to="/" className="hover:text-gold transition-colors block py-1">Home</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors block py-1">The Collection</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors block py-1">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors block py-1">Consultation</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors block py-1">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div className="sm:pl-4">
            <h3 className="text-lg font-serif font-bold mb-8 text-gold italic">Categories</h3>
            <ul className="space-y-5 text-sm md:text-base text-white/60">
              <li><Link to="/shop?category=handbags" className="hover:text-gold transition-colors block py-1">Luxury Handbags</Link></li>
              <li><Link to="/shop?category=wigs" className="hover:text-gold transition-colors block py-1">Brazilian Wigs</Link></li>
              <li><Link to="/shop?category=bundles" className="hover:text-gold transition-colors block py-1">Hair Bundles</Link></li>
              <li><Link to="/shop?sort=newest" className="hover:text-gold transition-colors block py-1">New Arrivals</Link></li>
              <li><Link to="/shop?sort=featured" className="hover:text-gold transition-colors block py-1">Best Sellers</Link></li>
            </ul>
          </div>

          <div className="sm:pl-4">
            <h3 className="text-lg font-serif font-bold mb-8 text-gold italic">Visit Us</h3>
            <ul className="space-y-6 text-sm md:text-base text-white/60">
              <li className="flex items-center space-x-4">
                <div className="p-2.5 bg-gold/10 rounded-lg text-gold">
                  <Phone size={16} />
                </div>
                <span className="font-medium tracking-wide">061 142 3309</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="p-2.5 bg-gold/10 rounded-lg text-gold">
                  <WhatsApp size={16} />
                </div>
                <span className="font-medium tracking-wide">+233 61 142 3309</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold/10 rounded-lg text-gold flex-shrink-0">
                  <Mail size={16} />
                </div>
                <a href="mailto:anterkyimavis5@gmail.com" className="hover:text-gold transition-colors break-all leading-tight">anterkyimavis5@gmail.com</a>
              </li>
              <li className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold/10 rounded-lg text-gold flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="leading-tight">Mpumalanga, Nelspruit<br /><span className="text-[10px] uppercase font-bold tracking-widest text-white/30">By Appointment Only</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em] font-bold">© 2026 Lommavy Luxury. All Rights Reserved.</p>
          <div className="flex space-x-8 text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
