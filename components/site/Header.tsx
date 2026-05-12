"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig, navigation } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-brand-bg)] text-white shadow-sm">
      {/* Top contact strip */}
      <div className="border-b border-white/10 text-xs">
        <Container className="flex items-center justify-between py-2">
          <span className="hidden sm:inline opacity-80">
            {siteConfig.contact.address.street}, {siteConfig.contact.address.postal} {siteConfig.contact.address.city}
          </span>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="ml-auto inline-flex items-center gap-1.5 font-medium hover:text-[var(--color-brand-accent)] transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> {siteConfig.contact.phone}
          </a>
        </Container>
      </div>

      {/* Main nav */}
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo dark />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Hoofdnavigatie">
          {navigation.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10"
          aria-label="Menu openen"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--color-brand-bg)] lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <Logo dark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10"
              aria-label="Menu sluiten"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="px-4 pb-10 overflow-y-auto max-h-[calc(100vh-4rem)]" aria-label="Mobiele navigatie">
            {navigation.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-md bg-[var(--color-brand-accent)] py-3 font-medium"
            >
              <Phone className="h-4 w-4" /> Bel ons direct
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

type NavItemData = {
  label: string;
  href?: string;
  children?: ReadonlyArray<NavItemData>;
};

function NavItem({ item }: { item: NavItemData }) {
  const hasChildren = !!item.children?.length;
  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm font-medium hover:text-[var(--color-brand-accent)] transition-colors"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-[var(--color-brand-accent)] transition-colors"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full min-w-[220px] rounded-b-md bg-white text-[var(--color-ink)] opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
        <ul className="py-2">
          {item.children!.map((child) => (
            <li key={child.label}>
              {child.href ? (
                <Link
                  href={child.href}
                  className="block px-4 py-2 text-sm hover:bg-[var(--color-surface-2)] hover:text-[var(--color-brand-accent)]"
                >
                  {child.label}
                </Link>
              ) : (
                <span className="block px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                  {child.label}
                </span>
              )}
              {child.children?.length ? (
                <ul className="pb-1">
                  {child.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href!}
                        className="block py-1.5 pl-8 pr-4 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-brand-accent)]"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileNavItem({ item, onNavigate }: { item: NavItemData; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!item.children?.length;

  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-white/10 py-3 text-base font-medium"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setExpanded((x) => !x)}
        className="flex w-full items-center justify-between py-3 text-base font-medium"
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
      </button>
      {expanded && (
        <ul className="pb-3 pl-2">
          {item.children!.map((child) => (
            <li key={child.label}>
              {child.href ? (
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className="block py-1.5 text-sm opacity-90"
                >
                  {child.label}
                </Link>
              ) : (
                <span className="block pt-2 text-xs font-semibold uppercase opacity-70">
                  {child.label}
                </span>
              )}
              {child.children?.length ? (
                <ul className="pl-4">
                  {child.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href!}
                        onClick={onNavigate}
                        className="block py-1 text-sm opacity-75"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
