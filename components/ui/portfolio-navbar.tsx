import Link from "next/link";

export default function PortfolioNavbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        JN.
      </Link>

      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/education">Education</Link></li>
        <li><Link href="/hobbies">Hobbies</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}