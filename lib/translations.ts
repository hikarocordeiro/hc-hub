export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const isLocale = (value: string | undefined): value is Locale =>
  value === "pt" || value === "en";

export type TranslationSchema = {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    apps: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  hero: {
    pill: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  apps: {
    title: string;
    subtitle: string;
    moreCta: string;
    cardCta: string;
  };
  about: {
    title: string;
    intro: string;
    mission: string;
    detail: string;
  };
  contact: {
    pill: string;
    title: string;
    description: string;
    endpointNote: string;
    submitted: string;
    serverError: string;
    captchaMissing: string;
    fields: {
      name: string;
      email: string;
      company: string;
      message: string;
      consent: string;
      consentDescription: string;
      submit: string;
    };
    errors: {
      required: string;
      invalidEmail: string;
    };
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    updatedAt: string;
    privacyContent: string[];
    termsContent: string[];
  };
  footer: {
    addressLabel: string;
    address: string;
    signature: string;
  };
};

export const translations: Record<Locale, TranslationSchema> = {
  pt: {
    meta: {
      title: "HC Hub — Portal central de webapps",
      description:
        "HC Hub apresenta os aplicativos oficiais e os contatos verificados usados nos negócios de impressão 3D da HC Engenharia de Software.",
    },
    navigation: {
      home: "Início",
      apps: "Aplicações",
      about: "Sobre",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "Termos",
    },
    hero: {
      pill: "HC Engenharia de Software",
      title: "Soluções digitais criadas para simplificar seu trabalho",
      description:
        "Um ecossistema de aplicações web desenvolvidas para organizar processos, conectar equipes e transformar ideias em resultados práticos.",
      primaryCta: "Ver Aplicações",
      secondaryCta: "Contato",
    },
    apps: {
      title: "Nossas Aplicações",
      subtitle:
        "Cada aplicação é desenvolvida com foco na simplicidade, experiência do usuário e funcionalidades que fazem diferença no dia a dia.",
      moreCta: "Explorar 3D Manager",
      cardCta: "Acessar aplicação",
    },
    about: {
      title: "Sobre nós",
      intro:
        "HC Hub é uma plataforma criada para transformar ideias em soluções digitais práticas, acessíveis e eficientes.",
      mission:
        "Desenvolvemos aplicações e sistemas que ajudam profissionais a organizar processos, otimizar fluxos de trabalho e acessar ferramentas que facilitam o dia a dia.",
      detail:
        "Nosso compromisso é entregar tecnologia de verdade — simples, útil e feita para quem quer ter mais controle, produtividade e praticidade sem complicação.",
    },
    contact: {
      pill: "Entre em contato",
      title: "Fale conosco",
      description:
        "Tem dúvidas, sugestões ou precisa de suporte? Entre em contato e nossa equipe retornará em breve.",
      endpointNote:
        "O backend deve validar o CAPTCHA e encaminhar a mensagem para contact@hc-hub.com via Cloudflare Email Routing.",
      submitted:
        "Mensagem enviada com sucesso! Retornaremos em breve.",
      serverError:
        "Não foi possível enviar agora. Tente novamente em instantes.",
      captchaMissing: "Confirme o CAPTCHA antes de enviar.",
      fields: {
        name: "Nome completo",
        email: "E-mail corporativo",
        company: "Empresa (opcional)",
        message: "Mensagem",
        consent: "Concordo com o tratamento dos dados conforme a LGPD",
        consentDescription:
          "Guardamos apenas o necessário para comprovar consentimento LGPD e auditorias.",
        submit: "Enviar mensagem",
      },
      errors: {
        required: "Campo obrigatório",
        invalidEmail: "Informe um e-mail válido",
      },
    },
    legal: {
      privacyTitle: "Política de Privacidade",
      termsTitle: "Termos de Uso",
      updatedAt: "Última atualização: 12 de novembro de 2025",
      privacyContent: [
        "Coletamos apenas os dados informados pelo visitante para fins de suporte, onboarding ou verificações de conformidade.",
        "Os dados são armazenados em provedores com data centers na região escolhida pelo cliente e removidos mediante solicitação formal.",
        "Compartilhamos informações apenas com operadores contratados para e-mail transacional, monitoramento e análise de erro.",
      ],
      termsContent: [
        "O acesso aos aplicativos listados depende de contrato ativo com HC Engenharia de Software ou empresas autorizadas.",
        "As credenciais fornecidas são pessoais e intransferíveis; monitoramos acessos suspeitos para proteger o ambiente do cliente.",
        "Ao utilizar os serviços do HC Hub você concorda em respeitar a legislação vigente e reportar incidentes imediatamente.",
      ],
    },
    footer: {
      addressLabel: "Base operacional",
      address: "Anápolis, Goiás — Brasil",
      signature: "Desenvolvido e mantido por HC Engenharia de Software.",
    },
  },
  en: {
    meta: {
      title: "HC Hub — Central webapp portal",
      description:
        "HC Hub showcases official applications and secure contact points for HC Engineering's professional 3D printing operations.",
    },
    navigation: {
      home: "Home",
      apps: "Apps",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      pill: "HC Software Engineering",
      title: "Digital solutions built to simplify your workflow",
      description:
        "An ecosystem of web applications designed to organize processes, connect teams, and turn ideas into practical results.",
      primaryCta: "View Applications",
      secondaryCta: "Contact",
    },
    apps: {
      title: "Our Applications",
      subtitle:
        "Each application is crafted with focus on simplicity, user experience, and features that make a real difference in daily workflows.",
      moreCta: "Explore 3D Manager",
      cardCta: "Open application",
    },
    about: {
      title: "About us",
      intro:
        "HC Hub is a platform built to transform ideas into practical, accessible, and efficient digital solutions.",
      mission:
        "We develop applications and systems that help professionals organize processes, optimize workflows, and access tools that simplify daily tasks.",
      detail:
        "Our commitment is to deliver real technology — simple, useful, and designed for those who want more control, productivity, and practicality without complications.",
    },
    contact: {
      pill: "Get in touch",
      title: "Contact us",
      description:
        "Have questions, suggestions, or need support? Reach out and our team will get back to you soon.",
      endpointNote:
        "Your backend must validate the CAPTCHA token and forward the payload to contact@hc-hub.com via Cloudflare Email Routing.",
      submitted:
        "Message sent successfully! We'll get back to you soon.",
      serverError: "We could not submit right now. Try again soon.",
      captchaMissing: "Complete the CAPTCHA before submitting.",
      fields: {
        name: "Full name",
        email: "Work email",
        company: "Company (optional)",
        message: "Message",
        consent: "I agree with the LGPD-compliant data handling",
        consentDescription:
          "We retain only what is required to prove LGPD consent and support audits.",
        submit: "Send message",
      },
      errors: {
        required: "This field is required",
        invalidEmail: "Please provide a valid email",
      },
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Use",
      updatedAt: "Last updated: 12 November 2025",
      privacyContent: [
        "We collect only the information provided by the visitor for support, onboarding, or compliance validation purposes.",
        "Data is stored in providers that match the client-selected region and removed upon formal request.",
        "Information is shared solely with subprocessors that deliver transactional email, monitoring, or error analytics.",
      ],
      termsContent: [
        "Access to each application depends on an active agreement with HC Software Engineering or its authorized partners.",
        "Credentials are individual and non-transferable; suspicious sign-ins are monitored to protect each client environment.",
        "By using HC Hub services you agree to comply with applicable law and report incidents immediately.",
      ],
    },
    footer: {
      addressLabel: "Operational base",
      address: "Anápolis, Goiás — Brazil",
      signature: "Developed and maintained by HC Engenharia de Software.",
    },
  },
};
