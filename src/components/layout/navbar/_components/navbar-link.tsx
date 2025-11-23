"use client";

import { LinkItem } from "@/lib/constants/navigation.constants";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ href, label }: LinkItem) {
  // Navigation
  const pathname = usePathname();

  // Variables
  const isActiveLink = pathname === href;

  return (
    <Link
      href={href}
      className={cn([
        "hover:text-accent capitalize font-medium",
        isActiveLink &&
          "text-accent border-b  border-accent font-bold transition-all",
      ])}
    >
      {label}
    </Link>
  );
}
