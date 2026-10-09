import Link from "next/link";
import { navLinks } from "@/data/home";
import { Icon } from "./Icon";

export function SiteNav() {
  return (
    <header className="container nav">
      <Link href="/" className="logo" aria-label="Pairly home">
        <Icon name="heart" size={30} className="logo__icon" />
        Pairly
      </Link>
      <nav aria-label="Main" className="nav__links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link href="/discover" className="btn btn--ink btn--sm">
          Log in
        </Link>
      </nav>
    </header>
  );
}
