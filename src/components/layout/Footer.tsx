import React from 'react';
import Image from 'next/image';
import { Phone, Clock, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/data/landing';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-12 px-4">
      <div className="pointer-events-none absolute left-0 right-0 top-0 mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-bn-gold-dark/60 to-transparent" />
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center items-center">
          <div className="flex justify-center">
            <Image
              src="/images/logo-sem-fundo-reduzido.jpeg"
              alt="Logo Bruno Boa Nova Advocacia"
              width={200}
              height={200}
              className="mb-6 w-48 md:w-20 lg:w-48 h-auto"
            />
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-600">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-start gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Segunda a sexta, 9h às 17h</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-600">Áreas de Atuação</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Direito Penal</li>
              <li>Tribunal do Júri</li>
              <li>Execução Penal</li>
              <li>Habeas Corpus</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Advocacia Criminal | Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a href="#" className="hover:text-amber-600 transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};