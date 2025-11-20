"use client";

import Link from "next/link";
import { MapPin, ShieldCheck } from "lucide-react";
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
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            <MapPin className="h-4 w-4" />
            {footer.addressLabel}: {footer.address}
          </div>
        </div>
        <div className="text-xs text-slate-400">
          <p>{footer.stripeNote}</p>
          <div className="mt-3 flex gap-4 text-slate-300">
            <Link href="/legal/privacy" className="hover:text-white">
              {navigation.privacy}
            </Link>
            <Link href="/legal/terms" className="hover:text-white">
              {navigation.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
