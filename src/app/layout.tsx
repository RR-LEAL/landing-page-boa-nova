import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BN Advogados",
  description: "Escritório de advocaciaatuando em casos de direito penal, conflitos familiares e problemas com empresas. Orientação jurídica segura pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}