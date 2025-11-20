# HC Hub – Lista de Pendências

## Concluído
- [x] Scaffold com Next.js 16 + App Router.
- [x] Layout responsivo com troca PT/EN persistida.
- [x] Formulário de contato com validação LGPD + CAPTCHA Turnstile.
- [x] Listagem única dos webapps e páginas legais básicas.

## Em andamento
- [ ] Revisar conteúdo final dos textos (hero, apps, legal) com time de produto.

## Backlog sugerido
- [ ] Integrar `CONTACT_ENDPOINT` com a instância de TrapMail/Mailtrap usada em produção.
- [ ] Provisionar chaves definitivas do Cloudflare Turnstile (`NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`).
- [ ] Adicionar monitoramento para o endpoint `/api/contact` (ex.: cron Pingdom ou healthcheck no Platform).
- [ ] Publicar versões resumidas em PDF para solicitações offline, caso exigido por parceiros.
