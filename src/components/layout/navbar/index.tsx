import DesktopNavbar from "./_components/desktop-navbar";
import Logo from "./_components/logo";
export default function Navbar() {
  return (
    <header>
      <div className="container py-8 xl:py-10 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation Links -desktop */}
        <DesktopNavbar />
      </div>
    </header>
  );
}
