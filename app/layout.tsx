import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { translations, isLocale, type Locale } from "@/lib/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: translations.pt.meta.title,
  description: translations.pt.meta.description,
  metadataBase: new URL("https://hc-hub.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("hc-hub-locale")?.value;
  const initialLocale: Locale = isLocale(localeCookie) ? localeCookie : "pt";

  return (
    <html lang={initialLocale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100`}>
        <LanguageProvider initialLocale={initialLocale}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-12 sm:py-20">{children}</div>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
