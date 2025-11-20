import type { Locale } from "@/lib/translations";

type LocalizedText = Record<Locale, string>;

export type AppInfo = {
  id: string;
  name: LocalizedText;
  summary: LocalizedText;
  url: string;
  category: LocalizedText;
};

export const apps: AppInfo[] = [
  {
    id: "3dmanager",
    name: {
      pt: "3D Manager",
      en: "3D Manager",
    },
    summary: {
      pt: "Plataforma para empresas de impressão 3D: fila centralizada de jobs, orçamentos e checklists de produção.",
      en: "Platform for 3D printing businesses: centralized job queue, quoting, and production checklists.",
    },
    url: "https://3dmanager.hc-hub.com",
    category: {
      pt: "Operações avançadas",
      en: "Advanced operations",
    },
  },
];

export const getAppCopy = (locale: Locale) =>
  apps.map((app) => ({
    ...app,
    title: app.name[locale],
    description: app.summary[locale],
    badge: app.category[locale],
  }));
