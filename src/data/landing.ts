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
    question: "Fui acusado de violência doméstica ou recebi uma medida protetiva. Posso ser preso?",
    answer:
      "Sim. Dependendo da situação, a acusação pode resultar em prisão preventiva ou restrições imediatas. Por isso, é fundamental procurar um advogado criminal o quanto antes para analisar o caso, orientar sobre seus direitos e definir a melhor estratégia de defesa desde o início.",
  },
  {
    question: "Preciso de advogado para me acompanhar na delegacia?",
    answer:
      "Sim. O acompanhamento de um advogado na delegacia é essencial para garantir que seus direitos sejam respeitados e evitar que qualquer informação prejudique sua defesa. A orientação jurídica nesse momento faz toda a diferença no andamento do caso.",
  },
  {
    question: "Como funciona a guarda dos filhos e a pensão alimentícia?",
    answer:
      "A definição de guarda e pensão depende das particularidades de cada família e sempre considera o melhor interesse da criança. Um advogado de família é importante para orientar, negociar e, se necessário, atuar judicialmente para proteger seus direitos.",
  },
  {
    question: "Meu nome foi negativado indevidamente. Posso processar a empresa?",
    answer:
      "Sim. A negativação indevida é uma prática abusiva e gera direito à reparação. Um advogado do consumidor pode solicitar a retirada do nome dos órgãos de proteção ao crédito e buscar indenização pelos danos sofridos.",
  },
  {
    question: "O atendimento é feito diretamente com o advogado? Como funciona o primeiro contato?",
    answer:
      "Sim. O atendimento é realizado diretamente pelo advogado Bruno Boa Nova. O primeiro contato acontece pelo WhatsApp, onde é feita uma análise inicial do caso e orientação clara sobre os próximos passos jurídicos, de forma rápida e personalizada.",
  },
  {
    question: "O atendimento pode ser online e quanto tempo demora para obter resposta?",
    answer:
      "O atendimento pode ser feito de forma online ou presencial, conforme a necessidade do cliente. O retorno é realizado o mais rápido possível, principalmente em situações urgentes que envolvem risco de prisão, medidas protetivas ou conflitos familiares.",
  },
];

