import { Shield, Scale, FileText, Users, Gavel } from "lucide-react";
import { Service, ProcessStep, FAQ, ContactInfo } from "@/types/landing";

export const contactInfo: ContactInfo = {
  whatsappNumber: "5522997311256",
  phone: "(22) 99731-1256",
  address: "Região dos Lagos - RJ",
};

export const services: Service[] = [
    {
    icon: Shield,
    title: "Advogado para Violência Doméstica e Medidas Protetivas",
    description:
      "Defesa jurídica em casos de violência doméstica, medidas protetivas e risco de prisão, com atuação imediata e acompanhamento completo do processo.",
  },
  {
    icon: Scale,
    title: "Advogado Criminal e Acompanhamento em Delegacia",
    description:
      "Atuação em flagrantes, investigações criminais e processos penais, garantindo seus direitos desde o atendimento na delegacia até a defesa judicial.",
  },
  {
    icon: FileText,
    title: "Defesa em Processos Criminais e Risco de Prisão",
    description:
      "Defesa técnica e estratégica para quem está sendo acusado de crime ou enfrenta possibilidade de prisão preventiva ou temporária.",
  },
  {
    icon: Users,
    title: "Advogado para Guarda, Pensão e Direito de Família",
    description:
      "Atuação em guarda de filhos, pensão alimentícia, regulamentação de visitas e conflitos familiares com orientação jurídica segura.",
  },
  {
    icon: FileText,
    title: "Advogado do Consumidor para Cobranças Indevidas e Negativação",
    description:
      "Defesa contra abusos de empresas, cobranças indevidas, negativação indevida no nome e problemas contratuais.",
  },
  {
    icon: Gavel,
    title: "Consultoria e Orientação Jurídica Personalizada",
    description:
      "Análise detalhada do caso com orientação jurídica estratégica e atendimento direto com o advogado para definição da melhor solução legal.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Primeiro Contato",
    description:
      "Entre em contato pelo WhatsApp e nos conte, de forma objetiva, o que aconteceu. As informações iniciais permitem uma análise técnica do seu caso.",
  },
  {
    number: "02",
    title: "Análise do Caso",
    description:
      "Seu caso será analisado com atenção, avaliando viabilidade, riscos e o melhor caminho jurídico a ser adotado.",
  },
  {
    number: "03",
    title: "Ação Imediata",
    description:
      "Confirmada a viabilidade, adotamos imediatamente as medidas cabíveis — seja na defesa, no processo ou em medidas urgentes — sempre com atuação técnica e responsável.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Em quais cidades você atua?",
    answer:
      "A atuação abrange todas as cidades da Região dos Lagos, incluindo Arraial do Cabo, Armação dos Búzios, Cabo Frio, Araruama, Iguaba Grande e São Pedro da Aldeia.",
  },
  {
    question: "O atendimento é 24 horas?",
    answer:
      "Sim. O atendimento é realizado 24 horas, inclusive para casos urgentes como prisão em flagrante e audiências de custódia.",
  },
  {
    question: "O atendimento é presencial ou online?",
    answer:
      "O atendimento pode ser presencial ou online, conforme a necessidade do caso e a urgência da situação.",
  },
];
