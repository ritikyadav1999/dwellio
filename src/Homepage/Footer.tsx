import Link from "next/link";
import { AtSign, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { footerLinkGroups } from "./data";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-outline-variant/40 bg-surface-container-high pt-16 pb-10 text-primary sm:pt-20",
        className
      )}
    >
      <div className="dwellio-container">
        <div className="flex w-full flex-col justify-between gap-14 border-b border-outline-variant/30 pb-14 lg:flex-row lg:gap-20">
          <div>
            <Link
              href="/"
              className="font-heading text-5xl font-normal leading-none tracking-normal text-primary sm:text-6xl"
              aria-label="Dwellio home"
            >
              Dwellio
            </Link>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-12 bg-outline/40" aria-hidden="true" />
              <span className="dwellio-label text-on-surface-variant">By Armata</span>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16"
          >
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h2 className="dwellio-label mb-2 text-on-surface-variant">{group.title}</h2>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base leading-relaxed text-primary transition-colors duration-300 hover:text-on-surface-variant"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
          <p className="dwellio-label text-on-surface-variant">
            (c) 2026 Dwellio by Armata. All rights reserved.
          </p>
          <div className="flex gap-3" aria-label="Social links">
            <SocialLink href="#" label="Instagram">
              <AtSign className="size-5" aria-hidden="true" />
            </SocialLink>
            <SocialLink href="#" label="Twitter">
              <Send className="size-5" aria-hidden="true" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex size-10 items-center justify-center rounded-md border border-outline-variant/40 text-on-surface-variant transition-colors duration-300 hover:border-primary/40 hover:text-primary"
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
