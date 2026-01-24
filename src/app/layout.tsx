import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advocacia Criminal",
  description: "Advogada criminalista 24h na Região dos Lagos",
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