import React from "react";
import { Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp"
    >
      {/* Animação ping de fundo */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      
      {/* Ícone principal */}
      <span className="relative flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110">
        <Phone className="w-6 h-6" />
      </span>
    </a>
  );
};
