// WhatsApp helper
export const WHATSAPP_NUMBER = "5524999285258";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e preciso de orientação jurídica. Pode me ajudar?";

export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded}`;
}