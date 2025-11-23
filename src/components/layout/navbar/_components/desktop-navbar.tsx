import NAVIGATION_LINKS from "@/lib/constants/navigation.constants";
import HireMeButton from "./hire-me-button";
import NavbarLink from "./navbar-link";

export default function DesktopNavbar() {
  return (
    <nav className=" lg:flex hidden items-center gap-x-8">
      {/* Navigation list */}
      {NAVIGATION_LINKS?.map(({ href, label }) => {
        return (
          // Link item
          <NavbarLink key={href} href={href} label={label} />
        );
      })}

      {/* Hire me action */}
      <HireMeButton />
    </nav>
  );
}
