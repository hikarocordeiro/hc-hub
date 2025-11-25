## HC Hub — Portal central de webapps

Site estático em Next.js 16 (App Router) que apresenta os webapps hospedados em `*.hc-hub.com`, fornece contexto bilingue e disponibiliza um canal de contato verificado com validação LGPD + CAPTCHA.

### Principais recursos
- Layout responsivo com idioma padrão PT-BR, toggle fixado no topo e preferência persistida em cookie/localStorage.
- Páginas: Home, Apps, About, Contact, Privacy e Terms — todas com conteúdo em PT/EN.
- Cards de aplicações abastecidos a partir de `data/apps.ts`, abrindo subdomínios em nova aba.
- Formulário de contato acessível (`name`, `email`, `company`, `message`, `lgpdConsent`) integrado ao Cloudflare Turnstile e preparado para enviar à API TrapMail/Mailtrap através de `/api/contact`.
- Footer discreto com endereço em Anápolis (GO) e menção à HC Engenharia de Software, incluindo nota mínima para verificações Stripe.

## Executando localmente

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

Para build de produção:

```bash
npm run build
npm start
```

## Variáveis de ambiente
Crie um arquivo `.env.local` na raiz com os valores do provedor desejado:

```bash
CONTACT_ENDPOINT="https://api.trapmail.example/messages"
NEXT_PUBLIC_TURNSTILE_SITE_KEY="<public-site-key>"
TURNSTILE_SECRET_KEY="<server-secret-key>"
```

- `CONTACT_ENDPOINT`: endpoint HTTPS que receberá o payload e encaminhará o e-mail para `hello@hc-hub.com` (ex.: Mailtrap/TrapMail). O arquivo `app/api/contact/route.ts` já lê essa variável e faz o forward usando `fetch`.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` e `TURNSTILE_SECRET_KEY`: chaves do Cloudflare Turnstile. O componente de formulário desabilita o envio até que o token válido seja recebido e o endpoint `/api/contact` valida o token antes do forward.

> Sugestão operacional: adicionar monitoramento ao `/api/contact` para garantir que o TrapMail continue respondendo (ex.: healthcheck). Consulte `docs/todo.md` para itens pendentes.

## Ajustando conteúdo e traduções
- Textos (PT/EN) vivem em `lib/translations.ts`. Atualize esse arquivo para revisar hero, navegação, páginas legais e mensagens do formulário.
- A lista de aplicações está em `data/apps.ts`. Inclua novos objetos com `name`, `summary`, `category` e `url` por idioma.
- Paleta e utilitários mínimos estão em `app/globals.css`. O design atual usa primárias `#0061FF` e `#00A99D` + neutro `#F3F4F6`.
- O formulário de contato e o widget Turnstile ficam em `components/contact/`. Ajuste os campos ali caso precise coletar mais dados (atenção às regras LGPD).

## Contato & privacidade
- Mensagens são respondidas por `hello@hc-hub.com`. O payload enviado pelo formulário contém apenas os campos solicitados + consentimento LGPD e não é armazenado no front-end.
- A validação do CAPTCHA ocorre em `app/api/contact/route.ts` antes de encaminhar ao TrapMail, atendendo às exigências de provedores como Stripe.

## Stripe readiness
Para verificações Stripe e similares, mantenha todos os subdomínios servindo HTTPS, com DNS apontando para a mesma organização, e disponibilize detalhes do comerciante mediante solicitação. Esse lembrete também aparece de forma discreta no footer do site.
