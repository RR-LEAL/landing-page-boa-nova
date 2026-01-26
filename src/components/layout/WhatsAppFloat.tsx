import React from "react";
import { Phone } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink(WHATSAPP_NUMBER)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
      aria-label="WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};
