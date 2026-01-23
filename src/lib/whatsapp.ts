// WhatsApp helper
export const WHATSAPP_NUMBER = "5522997311256";

export function getWhatsAppLink(message?: string) {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded}`;
}