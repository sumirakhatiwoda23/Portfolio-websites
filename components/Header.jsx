import { profile, navLinks } from "@/lib/data";

export default function Header() {
  return (
    <header>
      <div className="nav-inner">
        <div className="logo">
          {profile.logoName}
          <span></span>
        </div>
        <nav className="links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}