import React from 'react';
import Image from 'next/image';
import { Phone, Clock, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/data/landing';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-12 px-4">
      <div className="pointer-events-none absolute left-0 right-0 top-0 mx-auto h-px w-full max-w-5xl bg-linear-to-r from-transparent via-bn-gold-dark/60 to-transparent" />
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center items-center">
          <div className="flex justify-center">
            <Image
              src="/images/logo-sem-fundo-reduzido.jpeg"
              alt="Logo Bruno Boa Nova Advocacia"
              width={200}
              height={200}
              className="mb-6 w-48 md:w-20 lg:w-60 h-auto"
            />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4 text-bn-gold-dark">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span className='text-slate-200'>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span className='text-slate-200'>{contactInfo.openingHours}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className='text-slate-200'>{contactInfo.address}</span>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="relative w-full overflow-hidden rounded-lg border border-white/10 aspect-4/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.653969144224!2d-44.10939562394456!3d-22.51716242406407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e986da06e62a1%3A0x3927c35146235ab6!2sCecisa%20II%20-%20Largo%20Nove%20de%20Abril%2C%2027%20-%205%C2%B0%20Andar%20Sala%20511%20-%20Vila%20Santa%20Cec%C3%ADlia%2C%20Volta%20Redonda%20-%20RJ%2C%2027260-180!5e0!3m2!1spt-BR!2sbr!4v1769608025191!5m2!1spt-BR!2sbr"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 BN Advogados | Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};