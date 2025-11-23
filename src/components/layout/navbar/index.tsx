import DesktopNavbar from "./_components/desktop-navbar";
import Logo from "./_components/logo";
import MobilNavbar from "./_components/mobil-navbar";

export default function Navbar() {
  return (
    <header>
      <div className="container py-8 xl:py-10 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation Links - desktop */}
        <DesktopNavbar />

        {/* Navigation Links - mobile */}
        <MobilNavbar />
      </div>
    </header>
  );
}
