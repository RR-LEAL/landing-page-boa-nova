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
    number: '01',
    title: 'ANALISAMOS O SEU CASO',
    description:
      'Você nos envia fotos da sua notificação ou nos conta o seu caso.',
  },
  {
    number: '02',
    title: 'ESCLARECEMOS SUA DÚVIDA',
    description:
      'A consulta pode ser online ou presencial. Analisamos o seu caso de forma detalhada.',
  },
  {
    number: '03',
    title: 'ORÇAMENTO',
    description:
      'A análise inicial é gratuita e sem compromisso. Você só paga honorários se ganhar.',
  },
  {
    number: '04',
    title: 'CONTRATAÇÃO',
    description:
      'Você nos contrata para fazermos a sua defesa em todo o processo.',
  },
  {
    number: '05',
    title: 'ENVIE SEUS DOCUMENTOS',
    description:
      'Você envia seus documentos tudo online e pelo celular.',
  },
  {
    number: '06',
    title: 'ESTRATÉGIA DE DEFESA',
    description:
      'Vamos definir a melhor estratégia de defesa e iniciar o processo.',
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
