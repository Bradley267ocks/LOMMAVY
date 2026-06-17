import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, RefreshCw, HelpCircle, FileText, Lock } from 'lucide-react';
import SEO from '@/src/components/SEO';

export default function Policies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'shipping';

  const tabs = [
    { id: 'shipping', label: 'Shipping Policy', icon: <Truck size={16} /> },
    { id: 'returns', label: 'Returns Policy', icon: <RefreshCw size={16} /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <Lock size={16} /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText size={16} /> }
  ];

  const setTab = (id: string) => {
    setSearchParams({ tab: id });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="pt-32 pb-24 px-6 bg-beige min-h-screen">
      <SEO 
        title={`${tabs.find(t => t.id === currentTab)?.label || 'Policies'} | Lommavy Luxury`}
        description="Review Lommavy's commitment to service excellence, including our shipping, returns, and privacy policies."
      />
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-gold font-bold uppercase tracking-[0.35em] text-[10px] mb-3 block">Corporate Guidelines</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold italic text-luxury-black">Terms & Policies</h1>
          <p className="text-black/50 text-xs tracking-widest uppercase mt-2">Pragmatic and fully transparent agreements for the Lommavy Society</p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-2xl mx-auto bg-white p-2.5 rounded-2xl border border-black/5 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                currentTab === tab.id
                  ? 'bg-luxury-black text-white shadow-md'
                  : 'text-black/55 hover:bg-beige hover:text-luxury-black'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic content rendering */}
        <motion.div
          key={currentTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-black/5"
        >
          {currentTab === 'shipping' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gold/10 rounded-xl text-gold">
                  <Truck size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold italic">Doorstep Shipping & Timelines</h2>
              </div>
              <p className="text-black/60 text-sm leading-relaxed">
                At Lommavy, we are committed to providing premium, secure, and rapid shipping services across South Africa. All collection pieces are securely wrapped and padded in custom monogrammed luxury packaging.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-5 bg-beige rounded-2xl">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-luxury-black mb-2">Nelspruit / Local Delivery</h4>
                  <p className="text-xs text-black/50 leading-relaxed italic">
                    All orders bound for Nelspruit coordinates are dispatched with local priority transport within 24 hours of checkout authorization. Free complimentary courier selection applies to all orders over R1000.
                  </p>
                </div>
                <div className="p-5 bg-beige rounded-2xl">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-luxury-black mb-2">National South Africa Delivery</h4>
                  <p className="text-xs text-black/50 leading-relaxed italic">
                    Provincial and country-wide delivery (Gauteng, Western Cape, KwaZulu-Natal, etc.) are processed via major courier door-to-door networks. Standard shipping takes 2-3 business days.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/5">
                <h3 className="font-serif font-bold text-lg italic text-luxury-black">Security & Customs</h3>
                <p className="text-black/50 text-xs leading-relaxed italic">
                  All shipments are fully insured during transit. When your luxury order is dispatched, a real-time secure tracking link is forwarded instantly via email or WhatsApp contact channels. Physical handovers require a valid signature.
                </p>
              </div>
            </div>
          )}

          {currentTab === 'returns' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gold/10 rounded-xl text-gold">
                  <RefreshCw size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold italic">Elite Return Guarantee</h2>
              </div>
              <p className="text-black/60 text-sm leading-relaxed">
                Your luxury satisfaction is and always will be our top priority. We provide a pristine <strong>7-day hassel-free return guarantee</strong> on premium handbags, accessories, and unwrapped hair products.
              </p>

              <div className="space-y-4 mt-6">
                <h3 className="font-serif font-bold text-lg italic text-luxury-black">Handbags & Accessory Returns</h3>
                <p className="text-black/50 text-xs leading-relaxed italic">
                  Handbags must be returned in their original luxurious presentation box, containing all tag protectors, dust liners, and metal guards intact. Any signs of scuffing, water markers, or interior usage will void the return authorization.
                </p>

                <h3 className="font-serif font-bold text-lg italic text-luxury-black font-serif">Brazilian Wigs & Bundle Return Limits</h3>
                <p className="text-black/50 text-xs leading-relaxed italic">
                  Due to strict health and sanity regulations, virgin human hair configurations, bundles, closures, and wigs cannot be returned or swapped if they have been unpacked, combed, pre-plucked, cut, or altered in color. We appreciate your adherence to these rules!
                </p>
              </div>

              <div className="p-5 bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl mt-8">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#128C7E] mb-2">Initiate a return instantly</h4>
                <p className="text-xs text-black/60 leading-relaxed italic">
                  Simply coordinate your returning request with our support specialists via WhatsApp. We will secure and arrange the private dispatch courier to pick the item up at your convenient schedule.
                </p>
              </div>
            </div>
          )}

          {currentTab === 'privacy' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gold/10 rounded-xl text-gold">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold italic">Privacy Protected Shield</h2>
              </div>
              <p className="text-black/60 text-sm leading-relaxed">
                Lommavy respects and protects our global society's personal datasets with utmost strictness. This statement details how your information is received, handled, and securely archived.
              </p>

              <div className="space-y-4 mt-6 text-xs text-black/50 leading-relaxed italic">
                <h3 className="font-serif font-bold text-base not-italic text-luxury-black">1. Information We Collect</h3>
                <p>
                  When checking out or registering to Lommavy Inner Circle, we securely record checkout reference identifiers, names, home destination addresses, email references, and telephone contacts exclusively to fulfill orders.
                </p>

                <h3 className="font-serif font-bold text-base not-italic text-luxury-black">2. Payment Vaulting</h3>
                <p>
                  No client card data or EFT details are ever stored locally on Lommavy servers. Your monetary authorization is proxied and finalized directly by licensed South African processors (Payfast Pty Ltd & Paystack Inc) adhering to PCI-DSS levels of security standards.
                </p>

                <h3 className="font-serif font-bold text-base not-italic text-luxury-black">3. Cookie Technologies</h3>
                <p>
                  We utilize lightweight tracking tags specifically to evaluate abandoned carts and support digital advertisement conversions. Your analytics are securely masked and never shared.
                </p>
              </div>
            </div>
          )}

          {currentTab === 'terms' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gold/10 rounded-xl text-gold">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold italic">Atelier Terms & Conditions</h2>
              </div>
              <p className="text-black/60 text-sm leading-relaxed">
                By entering Lommavy, consulting our concierge, or finalising a transaction on this system, you agree and bind your legal party to the operating terms outlined herein.
              </p>

              <div className="space-y-4 mt-6 text-xs text-black/50 leading-relaxed italic">
                <h3 className="font-serif font-bold text-base not-italic text-luxury-black">1. Product Definitions & Accuracy</h3>
                <p>
                  Lommavy operates and presents handcrafted inventory. Minimal texture disparities in hand-selected leather handbags or individual grades of virgin human hair represent custom individual properties rather than imperfections. Colors represented inside specifications are visually precise but depend on personal screen calibrations.
                </p>

                <h3 className="font-serif font-bold text-base not-italic text-luxury-black">2. Pricing & Currency</h3>
                <p>
                  All catalog tags displayed are denominated in South Africa South African Rand (ZAR / R). Prices are subject to changes based on global manufacturing indexes or volatile hair importing logistics.
                </p>

                <h3 className="font-serif font-bold text-base not-italic text-luxury-black">3. Liability Limits</h3>
                <p>
                  Lommavy is not liable for indirect or direct damages resulting from improper bleaching or color treatment applied privately to premium wigs. All professional chemical treatments must be initiated by experienced hairstylists.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
