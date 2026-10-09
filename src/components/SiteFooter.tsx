import Link from "next/link";
import { footerLinks } from "@/data/home";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">Pairly</div>
        <div>© {new Date().getFullYear()} Pairly. All rights reserved.</div>
        <nav aria-label="Footer" className="footer__links">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
