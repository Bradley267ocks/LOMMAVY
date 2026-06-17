import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Send, MapPin, Phone as WhatsApp } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import SEO from '@/src/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
  const hasValidMapKey = Boolean(GOOGLE_MAPS_API_KEY) && GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API or WhatsApp
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/27611423309?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-beige min-h-screen overflow-x-hidden">
      <SEO 
        title="Contact Our Luxury Concierge | Lommavy"
        description="Reach out to Lommavy for private consultations and inquiries about our premium handbags and hair collections in Nelspruit, South Africa."
      />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
          <span className="text-gold font-bold uppercase tracking-[0.35em] text-[8px] md:text-[10px] mb-4 block">Private Consultation</span>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-serif font-bold mb-6 italic leading-tight">We'd Love <br /> <span className="not-italic text-luxury-black">to Hear From You</span></h1>
          <p className="text-black/60 text-sm md:text-base leading-relaxed italic">"Whether seeking the perfect silhouette or a signature glow, our concierge is here to curate your premium experience."</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <div className="p-8 md:p-10 bg-white rounded-[2rem] shadow-sm border border-black/5 group hover:border-gold/20 transition-all">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl text-gold mb-8 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl mb-3 italic">Direct Path</h4>
                <p className="text-sm md:text-base text-black/50 font-medium tracking-wide">061 142 3309</p>
                <p className="text-[10px] text-black/50 mt-3 uppercase font-bold tracking-widest italic leading-tight">Mpumalanga Domestic <br />Support Line</p>
              </div>

              <div className="p-8 md:p-10 bg-white rounded-[2rem] shadow-sm border border-black/5 group hover:border-gold/20 transition-all">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl text-gold mb-8 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <h4 className="font-serif font-bold text-lg md:text-xl mb-3 italic">Email Path</h4>
                <a href="mailto:anterkyimavis5@gmail.com" className="text-sm md:text-base text-black/50 hover:text-gold transition-colors block break-all font-medium tracking-wide leading-tight">anterkyimavis5@gmail.com</a>
                <p className="text-[10px] text-black/50 mt-3 uppercase font-bold tracking-widest italic leading-tight">Luxury Concierge <br />Department</p>
              </div>
            </div>

            <div className="p-10 md:p-12 bg-luxury-black rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-1000" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-10 italic">Social Connection</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <a href="https://instagram.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl hover:bg-gold/20 active:scale-95 transition-all">
                  <div className="p-2.5 bg-white/5 rounded-lg">
                    <Instagram size={20} className="text-gold" />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Instagram Feed</span>
                </a>
                <a href="https://facebook.com/MavisAnterkyi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl hover:bg-gold/20 active:scale-95 transition-all">
                  <div className="p-2.5 bg-white/5 rounded-lg">
                    <Facebook size={20} className="text-gold" />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Facebook Page</span>
                </a>
                <a href="https://wa.me/27611423309" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl hover:bg-gold/20 active:scale-95 transition-all">
                  <div className="p-2.5 bg-white/5 rounded-lg">
                    <WhatsApp size={20} className="text-gold" />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Instant Signal</span>
                </a>
                <div className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl">
                  <div className="p-2.5 bg-white/5 rounded-lg">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Mpumalanga, Nelspruit</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-14 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-xl border border-black/5"
          >
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-10 italic">Inquire Privately</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/50 ml-6">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-8 py-5 bg-beige/40 rounded-2xl border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm font-medium"
                    placeholder="Full Identity"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/50 ml-6">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-8 py-5 bg-beige/40 rounded-2xl border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm font-medium"
                    placeholder="Reference Point"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/50 ml-6">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-8 py-5 bg-beige/40 rounded-2xl border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm font-medium"
                  placeholder="The Nature of Request"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/50 ml-6">Deep Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-8 py-6 bg-beige/40 rounded-2xl border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm font-medium resize-none leading-relaxed"
                  placeholder="Detail your luxury aspirations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-luxury-black text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-2xl hover:bg-gold shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-4 group"
              >
                <span>Commit Request</span>
                <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Studio Placement */}
        <section className="mt-24 md:mt-40">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">The Signature Studio</h2>
            <p className="text-black/60 text-sm md:text-lg max-w-xl mx-auto italic">"A curated sanctuary in Mpumalanga, where luxury is experienced by appointment."</p>
          </div>
          
          <div className="h-[400px] md:h-[600px] w-full rounded-[2.5rem] md:rounded-[5rem] overflow-hidden shadow-2xl relative ring-8 ring-white">
            <div className="absolute inset-0 bg-gold/5 z-0" />
            {hasValidMapKey ? (
              <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                <Map
                  defaultCenter={{ lat: -25.4753, lng: 30.9694 }}
                  defaultZoom={14}
                  mapId="LOMMAVY_CONTACT_MAP"
                  style={{ width: '100%', height: '100%' }}
                  disableDefaultUI
                >
                  <AdvancedMarker position={{ lat: -25.4753, lng: 30.9694 }}>
                    <div className="bg-gold p-4 rounded-full shadow-2xl animate-pulse ring-8 ring-gold/20">
                      <Pin background="#000" glyphColor="#D4AF37" scale={1.5} />
                    </div>
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            ) : (
              <div className="w-full h-full bg-beige/40 flex items-center justify-center text-center p-8">
                <div className="max-w-md space-y-6">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                    <MapPin size={32} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold italic">Studio Location</h3>
                  <p className="text-black/50 text-sm md:text-base italic leading-relaxed">Exact coordinates are shared following a confirmed consultation. We welcome you to the heart of Nelspruit.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
