"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

import NAVIGATION_LINKS from "@/lib/constants/navigation.constants";
import { TextAlignStart } from "lucide-react";
import HireMeButton from "./hire-me-button";
import Logo from "./logo";
import NavbarLink from "./navbar-link";

export default function MobilNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="lg:hidden block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className="text-accent [&_svg]:size-6 hover:text-white"
            size="icon"
            variant="ghost"
          >
            <TextAlignStart className="-scale-100" strokeWidth={3} />
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col items-start">
          {/* For screen reader */}
          <SheetHeader>
            {/* Title  */}
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

            {/* Description  */}
            <SheetDescription className="sr-only">
              Contains links to navigate the website.
            </SheetDescription>

            {/* Logo */}
            <Logo />
          </SheetHeader>

          {/* Links */}
          <div className="my-2 flex flex-col items-start gap-y-5 w-full">
            {NAVIGATION_LINKS?.map(({ href, label }) => (
              <NavbarLink
                key={href}
                href={href}
                label={label}
                onClick={() => setOpen(false)}
              />
            ))}

            {/* Hire me action */}
            <HireMeButton />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
