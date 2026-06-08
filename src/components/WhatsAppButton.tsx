import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const WHATSAPP_NUMBER = '27611423309'; // Updated to match the contact style
  const message = encodeURIComponent("Hello Lommavy, I'm interested in your luxury products. Can you help me?");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center space-x-2 overflow-hidden max-w-[60px] hover:max-w-[250px]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whitespace-nowrap font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
