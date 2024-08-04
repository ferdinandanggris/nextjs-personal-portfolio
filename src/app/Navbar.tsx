"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href={"/about"} className={`navbar-link ${isActive("/about") || isActive("/")}`}>
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={"/resume"} className={`navbar-link ${isActive("/resume")}`}>
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={"/portfolio"} className={`navbar-link ${isActive("/portfolio")}`}>
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={"/blog"} className={`navbar-link ${isActive("/blog")}`}>
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={"/contact"} className={`navbar-link ${isActive("/contact")}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
