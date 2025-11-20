import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type AppCardProps = {
  title: string;
  description: string;
  badge: string;
  url: string;
  actionLabel: string;
};

export const AppCard = ({ title, description, badge, url, actionLabel }: AppCardProps) => (
  <article className="grid-card flex flex-col gap-4">
    <span className="pill w-fit">{badge}</span>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-muted mt-1">{description}</p>
    </div>
    <div className="mt-auto">
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200 hover:text-white"
      >
        {actionLabel}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  </article>
);
