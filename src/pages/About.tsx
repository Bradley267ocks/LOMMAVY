import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Our Heritage</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight italic">
              Redefining <br />
              <span className="text-luxury-black not-italic">Luxury for the Modern Woman</span>
            </h1>
            <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-xl italic">
              "At Lommavy, we believe every woman deserves to feel confident, beautiful, and stylish. We carefully select premium luxury handbags, Brazilian wigs, and hair bundles that combine quality, elegance, and affordability."
            </p>
            <div className="flex flex-col space-y-6 pt-4">
              <div className="flex items-start space-x-6 p-6 bg-beige/40 rounded-2xl border border-black/5">
                <div className="p-3.5 bg-gold/10 rounded-xl text-gold shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg md:text-xl">Curated Collection</h4>
                  <p className="text-sm text-black/40 leading-relaxed">Every piece is handpicked for its quality and timeless appeal.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 p-6 bg-beige/40 rounded-2xl border border-black/5">
                <div className="p-3.5 bg-gold/10 rounded-xl text-gold shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg md:text-xl">Empowering Beauty</h4>
                  <p className="text-sm text-black/40 leading-relaxed">We strive to enhance the natural glow and confidence of our clients.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/DfCtP4Sm/Gemini-Generated-Image-glby8uglby8uglby-2-HAND-BAG-RED-R780.png"
                alt="About Lommavy Luxury"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-gold p-6 md:p-8 rounded-2xl md:rounded-3xl text-white shadow-2xl max-w-[200px] md:max-w-xs transition-transform hover:scale-105 active:scale-95 cursor-default">
              <Crown className="mb-4" size={24} />
              <p className="text-[9px] md:text-xs font-bold leading-relaxed uppercase tracking-[0.2em]">Lommavy isn't just a brand; it's a movement towards accessible elegance.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-beige/40 py-16 md:py-32 px-6 mb-24 overflow-hidden relative border-y border-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 italic">Our Philosophy</h2>
            <div className="space-y-8 text-black/60 text-base md:text-xl leading-relaxed italic max-w-2xl mx-auto">
              <p>
                Lommavy was founded with a singular vision: to bridge the gap between unattainable high-fashion and low-quality alternatives. We focus on the details—the stitching on our bags, the lace on our wigs, and the health of our hair bundles.
              </p>
              <p>
                Our collections are designed for the woman who leads, who inspires, and who isn't afraid to stand out. From corporate boardrooms to evening galas, Lommavy pieces are your companions in excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 md:mt-24">
              {[
                { label: 'Grade Hair', val: '12A' },
                { label: 'Leather', val: '100%' },
                { label: 'Concierge', val: '24/7' },
                { label: 'Consult', val: 'FREE' }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2 italic tracking-tight">{stat.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto bg-luxury-black rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8 italic">Define Your Presence</h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto text-sm md:text-lg italic leading-relaxed">
              "Every silhouette tells a story. Let Lommavy provide the signature that defines your journey toward timeless elegance."
            </p>
            <Link to="/shop" className="group inline-flex items-center px-10 py-5 bg-gold text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-gold-dark transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              Enter The Collection <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
