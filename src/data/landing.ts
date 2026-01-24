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
    title: "Prisão em flagrante e acompanhamento em delegacias (24 horas)",
    description:
      "Atuação imediata para garantir seus direitos desde o primeiro momento da prisão, com acompanhamento direto na delegacia e orientação à família 24 horas.",
  },
  {
    icon: Scale,
    title: "Audiência de custódia, Habeas Corpus",
    description:
      "Defesa técnica focada na liberdade do acusado, atuando para evitar prisões ilegais e buscar a soltura o mais rápido possível.",
  },
  {
    icon: FileText,
    title: "Acompanhamento de Inquérito Policial",
    description:
      "Atuação estratégica durante a investigação para prevenir abusos, orientar depoimentos e reduzir riscos antes da denúncia.",
  },
  {
    icon: Users,
    title: "Juizado Especial Criminal (JECRIM)",
    description:
      "Defesa em crimes de menor potencial ofensivo, buscando soluções rápidas, acordos legais e a redução de impactos na vida do cliente.",
  },
  {
    icon: FileText,
    title: "Acompanhamento processual",
    description:
      "Monitoramento constante do processo criminal, com defesa ativa em todas as fases e comunicação clara sobre cada andamento.",
  },
  {
    icon: Gavel,
    title: "Execução Penal e Tribunal do Júri",
    description:
      "Atuação na fase de cumprimento da pena e em crimes contra a vida, com defesa técnica no Júri e estratégias para progressão e benefícios legais.",
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
