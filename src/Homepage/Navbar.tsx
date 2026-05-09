"use client";

import Link from "next/link";
import { Menu, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

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
  activeLabel?: string;
  className?: string;
};

export function Navbar({
  items = homepageNavItems,
  activeLabel = "Explore",
  className,
}: NavbarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/85 text-primary backdrop-blur-md",
        className
      )}
    >
      <div className="dwellio-container flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-heading text-3xl font-medium leading-none text-primary sm:text-4xl"
            aria-label="Dwellio home"
          >
            Dwellio
          </Link>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="h-px w-8 bg-outline/40" aria-hidden="true" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
              By Armata
            </span>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
          {items.map((item) => (
            <NavLink key={item.label} item={item} active={item.label === activeLabel} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            className="hidden h-10 px-0 text-primary/80 hover:bg-transparent hover:text-primary md:inline-flex"
          >
            <Link href="/profile">
              <UserCircle className="size-4" aria-hidden="true" />
              Profile
            </Link>
          </Button>
          <Button asChild className="h-10 rounded-md px-6 shadow-sm">
            <Link href="/sign-in">Continue</Link>
          </Button>
          <MobileNav items={items} activeLabel={activeLabel} />
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "dwellio-label relative py-2 text-on-surface-variant transition-colors duration-300 hover:text-primary",
        active && "text-primary"
      )}
    >
      {item.label}
      {active ? (
        <motion.span
          layoutId="navbar-active-underline"
          className="absolute inset-x-0 bottom-0 h-px bg-primary"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}
    </Link>
  );
}

function MobileNav({ items, activeLabel }: { items: NavItem[]; activeLabel: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="rounded-md md:hidden">
          <Menu />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-surface text-primary" showCloseButton>
        <SheetHeader>
          <SheetTitle className="font-heading text-2xl normal-case tracking-normal">
            Dwellio
          </SheetTitle>
          <SheetDescription className="sr-only">
            Primary navigation links for Dwellio.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col px-8" aria-label="Mobile navigation">
          {items.map((item) => (
            <SheetClose key={item.label} asChild>
              <Link
                href={item.href}
                className={cn(
                  "dwellio-label border-b border-outline-variant/30 py-5 text-on-surface-variant transition-colors hover:text-primary",
                  item.label === activeLabel && "text-primary"
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="px-8 pb-8">
          <SheetClose asChild>
            <Button asChild className="h-10 w-full rounded-md">
              <Link href="/sign-in">Continue</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
