import { Button } from "@/components/ui/button";
import SOCIAL_LINKS from "@/lib/constants/social-links.constants";
import { Download } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      {/* Download cv  */}
      <Button asChild variant="outline" className="h-10">
        <Link href="/resume">
          Download CV
          {/* Icon */}
          <Download className="mx-2" />
        </Link>
      </Button>

      {/* Social Links */}
      <ul className="flex items-center gap-5">
        {SOCIAL_LINKS.map(({ label, link, Icon }) => {
          return (
            <a
              href={link}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              className="border size-10 rounded-full text-accent border-accent flex items-center justify-center transition-all hover:text-primary hover:bg-accent"
            >
              <Icon />
              <span className="sr-only">{label}</span>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
