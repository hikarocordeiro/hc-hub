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
    pillLabel: string;
    subtitle: string;
    description: string;
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
    submitted: string;
    serverError: string;
    captchaMissing: string;
    fields: {
      name: string;
      email: string;
      company: string;
      message: string;
      consentPrefix: string;
      termsLink: string;
      consentMiddle: string;
      privacyLink: string;
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
    domain: string;
    controller: string;
    email: string;
    privacySections: Array<{
      title: string;
      content: string[];
    }>;
    termsSections: Array<{
      title: string;
      content: string[];
    }>;
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
      pillLabel: "Aplicações",
      subtitle:
        "Cada aplicação é desenvolvida com foco na simplicidade, experiência do usuário e funcionalidades que fazem diferença no dia a dia.",
      description:
        "Explore nossa coleção de webapps criados para simplificar processos, aumentar produtividade e oferecer experiências digitais intuitivas.",
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
        consentPrefix: "Li e aceito os",
        termsLink: "Termos de Uso",
        consentMiddle: "e a",
        privacyLink: "Política de Privacidade",
        submit: "Enviar mensagem",
      },
      errors: {
        required: "Campo obrigatório",
        invalidEmail: "Informe um e-mail válido",
      },
    },
    legal: {
      privacyTitle: "Política de Privacidade — HC Hub",
      termsTitle: "Termos de Uso",
      updatedAt: "Última atualização: 25/11/2025",
      domain: "https://hc-hub.com",
      controller: "HC Engenharia de Software — Anápolis, Goiás, Brasil",
      email: "hello@hc-hub.com",
      privacySections: [
        {
          title: "1. Introdução",
          content: [
            "O HC Hub é um portal que centraliza e dá acesso a diversas aplicações web mantidas pela HC Engenharia de Software.",
            "Esta Política de Privacidade explica como tratamos os dados pessoais dos usuários que visitam o site principal (hc-hub.com) e utilizam o formulário de contato.",
            "Nos comprometemos a proteger sua privacidade e a tratar seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD – Lei 13.709/2018)."
          ]
        },
        {
          title: "2. Quais dados coletamos",
          content: [
            "Coletamos apenas os dados estritamente necessários para o funcionamento do site e para comunicação com o usuário.",
            "2.1 Dados fornecidos diretamente pelo usuário: Nome, E-mail, Empresa (opcional), Mensagem enviada pelo formulário de contato, Confirmação de consentimento LGPD, Token CAPTCHA (para prevenção de abuso).",
            "2.2 Dados coletados automaticamente: Para garantir segurança, estabilidade e funcionamento adequado, podemos coletar: Endereço IP (anonimizado quando possível), Data e hora do acesso, Informações de navegação básica (user agent, idioma e páginas acessadas), Cookies de preferência de idioma (PT/EN).",
            "Não coletamos dados sensíveis (religião, saúde, biometria etc.)."
          ]
        },
        {
          title: "3. Como utilizamos os dados",
          content: [
            "Os dados coletados são utilizados para: Responder mensagens enviadas pelo formulário de contato, Manter preferências de idioma do usuário, Evitar abuso e spam através de CAPTCHA, Cumprir requisitos legais e de segurança, Garantir funcionamento adequado dos subdomínios e aplicativos do HC Hub.",
            "Não utilizamos os dados para fins de marketing sem consentimento explícito."
          ]
        },
        {
          title: "4. Base legal do tratamento",
          content: [
            "Tratamos dados com base nas seguintes hipóteses da LGPD:",
            "Consentimento (Art. 7º, I): Uso do formulário de contato e envio de mensagens.",
            "Legítimo interesse (Art. 7º, IX): Segurança, prevenção contra abusos e melhoria do funcionamento do site.",
            "Cumprimento de obrigação legal (Art. 7º, II): Registros mínimos de acesso, se requisitados por autoridade competente."
          ]
        },
        {
          title: "5. Compartilhamento de dados",
          content: [
            "Podemos compartilhar dados estritamente necessários com:",
            "5.1 Provedores de serviços tecnológicos: Cloudflare (roteamento de e-mail e segurança da aplicação), Hospedagem/infraestrutura (como Vercel ou similares), Serviços de CAPTCHA (Google reCAPTCHA ou hCaptcha). Todos apenas processam dados em nome do HC Hub, conforme a LGPD.",
            "5.2 Quando exigido por lei: Se houver ordem judicial, administrativa ou legal válida.",
            "Nunca vendemos ou comercializamos seus dados."
          ]
        },
        {
          title: "6. Uso dos dados em subdomínios",
          content: [
            "Os subdomínios do HC Hub (exemplo: 3dmanager.hc-hub.com) podem ter suas próprias políticas de privacidade e fluxos de dados adicionais.",
            "Quando o usuário acessa uma aplicação hospedada em subdomínio, a aplicação poderá coletar informações específicas para seu funcionamento, comunicação ou faturamento — sempre apresentadas em aviso próprio quando aplicável."
          ]
        },
        {
          title: "7. Retenção e eliminação dos dados",
          content: [
            "Mantemos dados pessoais apenas pelo tempo necessário para: responder ao contato solicitado, cumprir obrigações legais, manter a segurança e integridade do sistema.",
            "Após isso, eles são excluídos ou anonimizados.",
            "O usuário pode solicitar a exclusão a qualquer momento através do e-mail hello@hc-hub.com."
          ]
        },
        {
          title: "8. Segurança dos dados",
          content: [
            "Adotamos medidas técnicas e administrativas adequadas para proteger dados pessoais, incluindo:",
            "Criptografia TLS/HTTPS em todos os domínios e subdomínios, Monitoração de tráfego e firewall (Cloudflare), Controle de acesso e uso de tokens temporários, Armazenamento seguro e criptografado quando aplicável.",
            "Nenhum sistema é 100% seguro, mas fazemos todos os esforços razoáveis para proteger seus dados."
          ]
        },
        {
          title: "9. Direitos do titular de dados",
          content: [
            "De acordo com a LGPD, você pode solicitar: Confirmação da existência de tratamento, Acesso aos seus dados pessoais, Correção de dados incompletos ou desatualizados, Exclusão de dados desnecessários, Revogação do consentimento, Informação sobre uso e compartilhamento.",
            "Para exercer seus direitos, envie um e-mail para: hello@hc-hub.com"
          ]
        },
        {
          title: "10. Cookies e preferências",
          content: [
            "Utilizamos cookies estritamente necessários para: Guardar a preferência de idioma (PT/EN), Operação básica do site.",
            "Não utilizamos cookies de publicidade ou rastreamento comportamental."
          ]
        },
        {
          title: "11. Links externos e subdomínios",
          content: [
            "O HC Hub pode conter links e botões que direcionam para: Aplicações próprias em subdomínios, Serviços externos necessários ao funcionamento.",
            "Cada aplicativo pode possuir sua própria política de privacidade. Recomendamos a leitura das políticas específicas ao acessar outros serviços."
          ]
        },
        {
          title: "12. Alterações nesta Política de Privacidade",
          content: [
            "Podemos atualizar esta política periodicamente. A versão mais recente sempre estará disponível em: https://hc-hub.com/legal/privacy",
            "Caso ocorram mudanças relevantes, informaremos de forma adequada no site."
          ]
        },
        {
          title: "13. Contato",
          content: [
            "Para dúvidas, solicitações ou reclamações relacionadas à privacidade e proteção de dados, entre em contato:",
            "HC Engenharia de Software — E-mail: hello@hc-hub.com"
          ]
        }
      ],
      termsSections: [
        {
          title: "1. Aceitação dos Termos",
          content: [
            "Ao acessar o site HC Hub (hc-hub.com) e suas aplicações hospedadas em subdomínios, você declara ter lido, compreendido e concordado com os presentes Termos de Uso, bem como com a nossa Política de Privacidade.",
            "Se você não concorda com algum dos termos, recomendamos que não utilize o site."
          ]
        },
        {
          title: "2. Sobre o HC Hub",
          content: [
            "O HC Hub é um portal que centraliza o acesso a diferentes aplicações web desenvolvidas e mantidas pela HC Engenharia de Software.",
            "O portal principal serve como ponto de entrada para essas aplicações, que podem operar de forma independente e possuir seus próprios termos e políticas específicas."
          ]
        },
        {
          title: "3. Uso Permitido",
          content: [
            "Ao utilizar o HC Hub, você se compromete a:",
            "Usar o site e suas funcionalidades apenas para fins legais.",
            "Fornecer informações verdadeiras quando utilizar o formulário de contato.",
            "Não praticar atos que possam comprometer a segurança, o desempenho ou a disponibilidade do site ou dos subdomínios.",
            "Respeitar direitos autorais e de propriedade intelectual relacionados ao HC Hub e às aplicações vinculadas."
          ]
        },
        {
          title: "4. Acesso aos Subdomínios e Serviços",
          content: [
            "As aplicações acessadas por meio do HC Hub podem incluir ferramentas próprias, fluxos de login, integrações de pagamento e armazenamento de dados.",
            "Cada serviço em subdomínio pode possuir: Termos de uso próprios, Políticas de privacidade específicas, Sistemas de autenticação independentes.",
            "O HC Hub não é responsável por termos, conteúdos ou operações das aplicações que operam de forma isolada em seus respectivos subdomínios."
          ]
        },
        {
          title: "5. Conteúdo e Propriedade Intelectual",
          content: [
            "Todo o conteúdo disponível em hc-hub.com — incluindo textos, layouts, marcas e elementos gráficos — é de propriedade da HC Engenharia de Software ou está licenciado para uso.",
            "É proibido: copiar ou distribuir partes do site sem autorização prévia, usar a marca ou nome \"HC Hub\" ou \"HC Engenharia de Software\" sem consentimento, realizar engenharia reversa ou tentar obter código fonte ou dados privados por qualquer meio."
          ]
        },
        {
          title: "6. Segurança e Integridade do Sistema",
          content: [
            "Você concorda em não tentar: acessar áreas restritas sem autorização, contornar medidas de segurança, explorar vulnerabilidades, realizar ataques automatizados, scraping malicioso ou envio de spam.",
            "Caso identifique alguma falha, entre em contato conosco pelo e-mail hello@hc-hub.com."
          ]
        },
        {
          title: "7. Limitação de Responsabilidade",
          content: [
            "O HC Hub é fornecido \"no estado em que se encontra\", sem garantias de funcionamento ininterrupto ou livre de erros.",
            "Não nos responsabilizamos por: indisponibilidade temporária do site ou dos subdomínios, falhas de terceiros (provedores, redes, integradores), perdas causadas por uso inadequado do site, danos decorrentes de acesso não autorizado causado por fatores externos ao nosso controle.",
            "Para serviços críticos hospedados em subdomínios, consulte os termos específicos de cada aplicação."
          ]
        },
        {
          title: "8. Links Externos e Recursos de Terceiros",
          content: [
            "O HC Hub pode conter links para aplicações ou serviços de terceiros (incluindo subdomínios).",
            "Não somos responsáveis: pelo conteúdo desses sites, pelas políticas de privacidade, pelas práticas de segurança, pelo funcionamento técnico desses serviços.",
            "Recomendamos sempre verificar os termos e políticas de cada serviço acessado."
          ]
        },
        {
          title: "9. Privacidade e Proteção de Dados",
          content: [
            "O tratamento de dados pessoais segue nossa Política de Privacidade, disponível em: https://hc-hub.com/legal/privacy",
            "Ao utilizar o formulário de contato, você declara estar ciente e concordar com o tratamento descrito naquela política."
          ]
        },
        {
          title: "10. Modificações dos Termos",
          content: [
            "Podemos alterar estes Termos de Uso a qualquer momento. A versão mais recente estará sempre disponível em: https://hc-hub.com/legal/terms",
            "O uso contínuo do site após alterações constitui concordância com os novos termos."
          ]
        },
        {
          title: "11. Contato",
          content: [
            "Para dúvidas sobre estes Termos, fale conosco:",
            "HC Engenharia de Software — E-mail: hello@hc-hub.com"
          ]
        }
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
      pillLabel: "Applications",
      subtitle:
        "Each application is crafted with focus on simplicity, user experience, and features that make a real difference in daily workflows.",
      description:
        "Explore our collection of webapps designed to simplify processes, boost productivity, and deliver intuitive digital experiences.",
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

      submitted:
        "Message sent successfully! We'll get back to you soon.",
      serverError: "We could not submit right now. Try again soon.",
      captchaMissing: "Complete the CAPTCHA before submitting.",
      fields: {
        name: "Full name",
        email: "Corporate email",
        company: "Company (optional)",
        message: "Message",
        consentPrefix: "I have read and accept the",
        termsLink: "Terms of Use",
        consentMiddle: "and",
        privacyLink: "Privacy Policy",
        submit: "Send message",
      },
      errors: {
        required: "This field is required",
        invalidEmail: "Please provide a valid email",
      },
    },
    legal: {
      privacyTitle: "Privacy Policy — HC Hub",
      termsTitle: "Terms of Use",
      updatedAt: "Last updated: November 25, 2025",
      domain: "https://hc-hub.com",
      controller: "HC Engenharia de Software — Anápolis, Goiás, Brazil",
      email: "hello@hc-hub.com",
      privacySections: [
        {
          title: "1. Introduction",
          content: [
            "HC Hub is a portal that centralizes and provides access to various web applications maintained by HC Engenharia de Software.",
            "This Privacy Policy explains how we handle personal data from users who visit the main website (hc-hub.com) and use the contact form.",
            "We are committed to protecting your privacy and handling your personal data in accordance with the Brazilian General Data Protection Law (LGPD – Law 13.709/2018) and applicable international regulations."
          ]
        },
        {
          title: "2. What data we collect",
          content: [
            "We collect only the data strictly necessary for the website operation and communication with users.",
            "2.1 Data provided directly by the user: Name, Email, Company (optional), Message sent through the contact form, LGPD consent confirmation, CAPTCHA token (for abuse prevention).",
            "2.2 Automatically collected data: To ensure security, stability, and proper operation, we may collect: IP address (anonymized when possible), Date and time of access, Basic browsing information (user agent, language, and pages accessed), Language preference cookies (PT/EN).",
            "We do not collect sensitive data (religion, health, biometrics, etc.)."
          ]
        },
        {
          title: "3. How we use the data",
          content: [
            "Collected data is used to: Respond to messages sent through the contact form, Maintain user language preferences, Prevent abuse and spam through CAPTCHA, Comply with legal and security requirements, Ensure proper operation of HC Hub subdomains and applications.",
            "We do not use data for marketing purposes without explicit consent."
          ]
        },
        {
          title: "4. Legal basis for processing",
          content: [
            "We process data based on the following LGPD grounds:",
            "Consent (Art. 7, I): Use of contact form and message submission.",
            "Legitimate interest (Art. 7, IX): Security, abuse prevention, and website operation improvement.",
            "Legal obligation compliance (Art. 7, II): Minimum access logs, if requested by competent authority."
          ]
        },
        {
          title: "5. Data sharing",
          content: [
            "We may share strictly necessary data with:",
            "5.1 Technology service providers: Cloudflare (email routing and application security), Hosting/infrastructure (such as Vercel or similar), CAPTCHA services (Google reCAPTCHA or hCaptcha). All process data on behalf of HC Hub, in accordance with LGPD.",
            "5.2 When required by law: If there is a valid court, administrative, or legal order.",
            "We never sell or commercialize your data."
          ]
        },
        {
          title: "6. Data use in subdomains",
          content: [
            "HC Hub subdomains (example: 3dmanager.hc-hub.com) may have their own privacy policies and additional data flows.",
            "When users access an application hosted on a subdomain, the application may collect specific information for its operation, communication, or billing — always presented in a proper notice when applicable."
          ]
        },
        {
          title: "7. Data retention and deletion",
          content: [
            "We keep personal data only for the time necessary to: respond to the requested contact, comply with legal obligations, maintain system security and integrity.",
            "After that, they are deleted or anonymized.",
            "Users can request deletion at any time via email: hello@hc-hub.com."
          ]
        },
        {
          title: "8. Data security",
          content: [
            "We adopt appropriate technical and administrative measures to protect personal data, including:",
            "TLS/HTTPS encryption on all domains and subdomains, Traffic monitoring and firewall (Cloudflare), Access control and use of temporary tokens, Secure and encrypted storage when applicable.",
            "No system is 100% secure, but we make all reasonable efforts to protect your data."
          ]
        },
        {
          title: "9. Data subject rights",
          content: [
            "According to LGPD, you can request: Confirmation of processing existence, Access to your personal data, Correction of incomplete or outdated data, Deletion of unnecessary data, Consent revocation, Information about use and sharing.",
            "To exercise your rights, send an email to: hello@hc-hub.com"
          ]
        },
        {
          title: "10. Cookies and preferences",
          content: [
            "We use strictly necessary cookies to: Store language preference (PT/EN), Basic website operation.",
            "We do not use advertising or behavioral tracking cookies."
          ]
        },
        {
          title: "11. External links and subdomains",
          content: [
            "HC Hub may contain links and buttons that direct to: Own applications on subdomains, External services necessary for operation.",
            "Each application may have its own privacy policy. We recommend reading the specific policies when accessing other services."
          ]
        },
        {
          title: "12. Changes to this Privacy Policy",
          content: [
            "We may update this policy periodically. The most recent version will always be available at: https://hc-hub.com/legal/privacy",
            "If significant changes occur, we will inform appropriately on the website."
          ]
        },
        {
          title: "13. Contact",
          content: [
            "For questions, requests, or complaints related to privacy and data protection, contact us:",
            "HC Engenharia de Software — Email: hello@hc-hub.com"
          ]
        }
      ],
      termsSections: [
        {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing the HC Hub website (hc-hub.com) and its applications hosted on subdomains, you declare that you have read, understood, and agreed to these Terms of Use, as well as our Privacy Policy.",
            "If you do not agree with any of the terms, we recommend that you do not use the website."
          ]
        },
        {
          title: "2. About HC Hub",
          content: [
            "HC Hub is a portal that centralizes access to various web applications developed and maintained by HC Engenharia de Software.",
            "The main portal serves as an entry point to these applications, which may operate independently and have their own specific terms and policies."
          ]
        },
        {
          title: "3. Permitted Use",
          content: [
            "By using HC Hub, you agree to:",
            "Use the website and its features for legal purposes only.",
            "Provide truthful information when using the contact form.",
            "Not engage in acts that may compromise the security, performance, or availability of the website or subdomains.",
            "Respect copyright and intellectual property rights related to HC Hub and linked applications."
          ]
        },
        {
          title: "4. Access to Subdomains and Services",
          content: [
            "Applications accessed through HC Hub may include proprietary tools, login flows, payment integrations, and data storage.",
            "Each subdomain service may have: Its own terms of use, Specific privacy policies, Independent authentication systems.",
            "HC Hub is not responsible for terms, content, or operations of applications that operate independently on their respective subdomains."
          ]
        },
        {
          title: "5. Content and Intellectual Property",
          content: [
            "All content available on hc-hub.com — including texts, layouts, trademarks, and graphic elements — is owned by HC Engenharia de Software or licensed for use.",
            "It is prohibited to: copy or distribute parts of the website without prior authorization, use the \"HC Hub\" or \"HC Engenharia de Software\" brand or name without consent, perform reverse engineering or attempt to obtain source code or private data by any means."
          ]
        },
        {
          title: "6. System Security and Integrity",
          content: [
            "You agree not to attempt to: access restricted areas without authorization, bypass security measures, exploit vulnerabilities, perform automated attacks, malicious scraping, or spam.",
            "If you identify any security flaw, please contact us at hello@hc-hub.com."
          ]
        },
        {
          title: "7. Limitation of Liability",
          content: [
            "HC Hub is provided \"as is\", without guarantees of uninterrupted or error-free operation.",
            "We are not responsible for: temporary unavailability of the website or subdomains, third-party failures (providers, networks, integrators), losses caused by improper use of the website, damages resulting from unauthorized access caused by factors beyond our control.",
            "For critical services hosted on subdomains, consult the specific terms of each application."
          ]
        },
        {
          title: "8. External Links and Third-Party Resources",
          content: [
            "HC Hub may contain links to third-party applications or services (including subdomains).",
            "We are not responsible for: the content of these sites, privacy policies, security practices, technical operation of these services.",
            "We always recommend checking the terms and policies of each service accessed."
          ]
        },
        {
          title: "9. Privacy and Data Protection",
          content: [
            "The processing of personal data follows our Privacy Policy, available at: https://hc-hub.com/legal/privacy",
            "By using the contact form, you declare that you are aware of and agree with the processing described in that policy."
          ]
        },
        {
          title: "10. Modifications to Terms",
          content: [
            "We may change these Terms of Use at any time. The most recent version will always be available at: https://hc-hub.com/legal/terms",
            "Continued use of the website after changes constitutes agreement with the new terms."
          ]
        },
        {
          title: "11. Contact",
          content: [
            "For questions about these Terms, contact us:",
            "HC Engenharia de Software — Email: hello@hc-hub.com"
          ]
        }
      ],
    },
    footer: {
      addressLabel: "Operational base",
      address: "Anápolis, Goiás — Brazil",
      signature: "Developed and maintained by HC Engenharia de Software.",
    },
  },
};
