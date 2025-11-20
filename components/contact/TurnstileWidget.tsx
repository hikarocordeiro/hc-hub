"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
        }
      ) => string;
      remove?: (widgetId: string) => void;
    };
  }
}

type Props = {
  siteKey?: string;
  onVerify: (token: string) => void;
};

export const TurnstileWidget = ({ siteKey, onVerify }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return;
    }

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) return;
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: onVerify,
        "expired-callback": () => onVerify(""),
        "error-callback": () => onVerify(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = renderWidget;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }

    return () => {
      if (widgetId.current && window.turnstile?.remove) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [siteKey, onVerify]);

  return <div ref={containerRef} className="mt-2" aria-live="polite" />;
};
