"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo inverted={!scrolled} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-background/70 hover:text-background"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle inverted={!scrolled} />

          {/* Desktop CTA */}
          <Button className={cn("hidden md:inline-flex", !scrolled && "bg-background text-foreground hover:bg-background/90")} size="lg" nativeButton={false} render={<a href="#contact" />}>
            Free SEO Audit
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>

          {/* Mobile nav */}
          <div className="md:hidden">
            <MobileNav inverted={!scrolled} />
          </div>
        </div>
      </div>
    </header>
  );
}
