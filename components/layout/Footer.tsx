"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export const Footer = () => {
  const { copy } = useTranslations();
  const { footer, navigation } = copy;

  return (
    <footer className="border-t border-white/10 bg-[rgba(2,6,23,0.9)] text-sm text-slate-200">
      <div className="flex w-full flex-col gap-4 px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <p>{footer.signature}</p>
          </div>
          <div className="flex gap-4 text-xs text-slate-300">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              {navigation.privacy}
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              {navigation.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
