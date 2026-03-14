"use client";

import { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";

import { navLinks } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </Button>

      <SheetContent side="right" className="w-full max-w-xs p-0">
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <SheetClose key={link.href} render={<a href={link.href} />}>
              <span className="flex w-full rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted">
                {link.label}
              </span>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t px-6 py-4">
          <SheetClose render={<a href="#contact" className="w-full" />}>
            <Button className="w-full" size="lg">
              Free SEO Audit
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
