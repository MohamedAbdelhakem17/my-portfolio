import { Button } from "@/components/ui/button";
import SOCIAL_LINKS from "@/lib/constants/social-links.constants";
import { Download } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      {/* Download cv  */}
      <Button variant="outline" className="h-10">
        Download CV
        {/* Icon */}
        <Download className="mx-2" />
      </Button>

      {/* Social Links */}
      <ul className="flex items-center gap-5">
        {SOCIAL_LINKS.map(({ label, link, Icon }, index) => {
          return (
            <a
              href={link}
              key={index}
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
