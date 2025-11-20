Projeto: HC Hub — Portal central de webapps (Português padrão, opção em Inglês)

Contexto e objetivo:
- HC Hub (hc-hub.com) é um hub central de aplicações web mantido por você. Deve demonstrar credibilidade para usuários de subdomínios (ex.: 3dmanager.hc-hub.com) e atender requisitos básicos de verificação para serviços de pagamento (ex.: Stripe) sem expor uma página técnica exclusiva.
- A menção à sua empresa (HC Engenharia de Software) deve ser discreta (rodapé / About mínimo).
- Não incluir: pricing, depoimentos, portfólio, blog, páginas administrativas, PDFs, deploy guide ou redes sociais.

Escopo e entregáveis:
1. Site estático responsivo (scaffold Next.js @latest é ok) com as páginas abaixo, conteúdo em PT (padrão) e tradução EN.
2. Idioma padrão: Português (pt-BR). Top-right toggle para Inglês; preferência persistente via cookie/localStorage.
3. Contact form que envia para a API do TrapMail.
4. O contact form deve incluir **CAPTCHA**
https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

5. Não criar página exclusiva `/stripe-readiness`. Em vez disso, inclua no README e em um comentário discreto no footer (ou em About)
6. Footer discreto com: endereço (Anápolis, GO — Brasil) e texto “Desenvolvido e mantido por HC Engenharia de Software”.
7. Minimal styling (clean, neutral). Fornecer paleta de 2 cores primárias + neutro e classes utilitárias mínimas.
8. README com instruções mínimas para configurar o endpoint do contato e trocar textos/idiomas. (Sem guia de deploy.)

Páginas requeridas:
- `/` Home (hub): hero com frase de apresentação, CTA para ver/abrir apps e cards dos apps (cada card abre subdomínio em nova aba).
- `/apps` (ou âncora na home): listagem de webapps com link (ex.: 3dmanager.hc-hub.com).
- `/about`: texto discreto sobre HC Hub e menção pequena à HC Engenharia de Software.
- `/contact`: formulário de contato (nome, email, empresa opcional, mensagem, LGPD consent checkbox obrigatório) + CAPTCHA widget. Submissão para API do mailtrap;
- `/legal/privacy` e `/legal/terms`: textos/placeholder compatíveis com LGPD.

Contact Form — requisitos detalhados:
- Campos: `name` (required), `email` (required + email validation), `company` (optional), `message` (required), `lgpd_consent` (required checkbox).
- Incluir CAPTCHA widget. The component should:

  - Disable submit until captcha, terms of use (LGPD consente) checked, and fields validated.

- UI must show error states for validation failures and server errors; success shows a friendly confirmation message.
- Accessibility: proper labels, aria-live for messages, keyboard accessible.

CAPTCHA integration note (for the agent/dev):
- Do not hardcode a provider key. Implement the form so the CAPTCHA provider key is passed via env/prop. Include clear inline comment on where to validate token server-side (`/api/contact`) before forwarding to contact@hc-hub.com via Cloudflare Email Routing.

Translations & content:
- Provide all visible text in PT and EN translations.
- Tone: profissional, objetivo, confiável — focado em ser um portal de apps.
- Example content snippets (PT + EN) to be included for Home/About/Apps/Contact.

Security & privacy:
- LGPD consent checkbox is required and stored only as part of the contact payload; form must not store data locally beyond session.
- Suggestion (in README): the host backend must validate CAPTCHA token and then forward email to `contact@hc-hub.com`
UX / Accessibility:
- Semantic HTML, aria attributes, descriptive error messages, mobile-first single-column layout on small screens.
- Cookie/localStorage for language preference.

README content (minimum):
- How to configure CONTACT_ENDPOINT env var.
- How to configure CAPTCHA keys (provider agnostic) via env/props.
- How to change app list (cards) and translations.
- Short note: “For Stripe verification, ensure subdomains use HTTPS and merchant details are available upon request.”

Acceptance criteria:
- Repo scaffold with PT as default and EN translations.
- Home, Apps, About, Contact, Legal pages implemented.
- Contact form includes CAPTCHA integration
- Footer with HC Engenharia de Software mention and address.
- No pricing, testimonials, blog, admin pages, or Stripe public checklist page.

Observações finais:
- Mantendo o foco no hub: o objetivo é prover credibilidade para usuários que chegam em subdomínios sem criar um site institucional pesado.

