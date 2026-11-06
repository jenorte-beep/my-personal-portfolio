
import Link from "next/link";
import PortfolioNavbar from "@/components/ui/portfolio-navbar";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main className="container hero">
        <div>
          <p>WELCOME TO MY PERSONAL PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Jelian Norte.</span>
          </h1>

          <h2>BSIT Student | Future IT Professional</h2>

          <p>
            I am a Bachelor of Science in Information Technology
            student who enjoys learning about technology, web
            development, and creating new things.
          </p>

          <Link href="/about" className="btn">
            About Me →
          </Link>
        </div>
      </main>

      <footer>
        © 2026 Jelian Norte. All Rights Reserved.
      </footer>
    </>
  );
}
