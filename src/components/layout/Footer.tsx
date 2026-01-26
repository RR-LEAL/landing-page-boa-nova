import React from 'react';
import { Scale, Phone, Clock, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/data/landing';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 px-4">
      <div className="pointer-events-none absolute left-0 right-0 top-0 mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-bn-gold-dark/60 to-transparent" />
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-bold">Advocacia Criminal</span>
            </div>
            <p className="text-gray-400">
              Defesa técnica especializada em Direito Penal, com atendimento 24 horas na Região dos Lagos.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-600">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Atendimento 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
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