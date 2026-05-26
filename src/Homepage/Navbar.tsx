"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, UserCircle } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { homepageNavItems, type NavItem } from "./data";

type NavbarProps = {
  items?: NavItem[];
  className?: string;
};

export function Navbar({
  items = homepageNavItems,
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const activeHref = getActiveHref(pathname, items);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ── Scroll-aware hide/show ──────────────────────────────────────────
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastScrollRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollRef.current;
    // Only trigger past a small threshold to avoid flicker
    if (Math.abs(delta) < 8) return;

    if (delta > 0 && latest > 120) {
      setHidden(true);
    } else if (delta < 0) {
      setHidden(false);
    }
    lastScrollRef.current = latest;
  });

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: hidden ? -120 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "bg-surface/75 text-primary backdrop-blur-xl",
        "border-b border-outline-variant/20",
        "dwellio-soft-shadow",
        className
      )}
    >
      {/* Gradient accent line at bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="dwellio-container flex h-20 items-center justify-between">
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Dwellio home"
          >
            <span className="font-heading text-3xl font-medium leading-none text-primary transition-colors duration-300 sm:text-4xl">
              Dwellio
            </span>
            <span
              className="hidden h-1.5 w-1.5 rounded-full bg-primary/40 transition-colors duration-300 group-hover:bg-primary/70 sm:block"
              aria-hidden="true"
            />
          </Link>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="h-px w-8 bg-outline/40" aria-hidden="true" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
              By Armata
            </span>
          </div>
        </div>

        {/* ── Desktop Nav ───────────────────────────────────────────── */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 md:flex"
        >
          {items.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              active={normalizeHref(item.href) === activeHref}
            />
          ))}
        </nav>

        {/* ── Actions ───────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="hidden h-10 px-2 text-primary/70 transition-all duration-300 hover:bg-transparent hover:text-primary md:inline-flex"
          >
            <Link href="/profile">
              <UserCircle className="size-4" aria-hidden="true" />
              Profile
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-full border-outline-variant/40 px-5 text-primary shadow-none transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 md:inline-flex"
          >
            <Link href="/sign-in">Continue</Link>
          </Button>
          <MobileNav
            items={items}
            activeHref={activeHref}
            open={mobileOpen}
            onOpenChange={setMobileOpen}
          />
        </div>
      </div>
    </motion.header>
  );
}

// ── Desktop nav link ────────────────────────────────────────────────────

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "dwellio-label relative py-2 text-on-surface-variant transition-all duration-300 hover:text-primary",
        active && "text-primary"
      )}
    >
      <span className="relative inline-block transition-transform duration-300 group-hover:scale-[1.02]">
        {item.label}
      </span>
      {active && (
        <motion.span
          layoutId="navbar-active-underline"
          className="absolute inset-x-0 bottom-0 h-px bg-primary"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </Link>
  );
}

// ── Mobile sheet navigation ─────────────────────────────────────────────

function MobileNav({
  items,
  activeHref,
  open,
  onOpenChange,
}: {
  items: NavItem[];
  activeHref: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="rounded-md md:hidden">
          <Menu />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="border-l border-outline-variant/20 bg-surface/90 p-0 backdrop-blur-xl"
        showCloseButton
      >
        <SheetHeader className="px-6 pt-8">
          <SheetTitle className="font-heading text-2xl normal-case tracking-normal text-primary">
            Dwellio
          </SheetTitle>
          <SheetDescription className="sr-only">
            Primary navigation links for Dwellio.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col px-6 pt-6" aria-label="Mobile navigation">
          {items.map((item, i) => (
            <SheetClose key={item.label} asChild>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "dwellio-label block border-b border-outline-variant/20 py-5 text-on-surface-variant transition-colors duration-300 hover:text-primary",
                    normalizeHref(item.href) === activeHref && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            </SheetClose>
          ))}
        </nav>
        <div className="px-6 pb-8 pt-6">
          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              className="h-10 w-full rounded-full border-outline-variant/40 shadow-none"
            >
              <Link href="/sign-in">Continue</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ── Helpers ─────────────────────────────────────────────────────────────

function normalizeHref(href: string) {
  return href.split("#")[0] || "/";
}

function isNavItemActive(pathname: string, href: string) {
  const baseHref = normalizeHref(href);

  if (baseHref === "/") {
    return pathname === "/";
  }

  return pathname === baseHref || pathname.startsWith(`${baseHref}/`);
}

function getActiveHref(pathname: string, items: NavItem[]) {
  const matchingItem = items.find((item) => isNavItemActive(pathname, item.href));
  if (matchingItem) {
    return normalizeHref(matchingItem.href);
  }

  // Keep nav underline motion continuous for internal journey pages.
  if (pathname.startsWith("/properties") || pathname.startsWith("/schedule")) {
    const exploreItem = items.find((item) => normalizeHref(item.href) === "/home");
    return exploreItem ? normalizeHref(exploreItem.href) : null;
  }

  return null;
}
