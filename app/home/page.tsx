import Link from "next/link";
import PortfolioNavbar from "@/components/ui/portfolio-navbar";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main className="container hero">
        <div>
          <p style={{ color: "var(--purple)", fontWeight: "bold" }}>
            WELCOME TO MY PERSONAL PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Jelian Norte.</span>
          </h1>

          <h2 style={{ marginBottom: "20px" }}>
            BSIT Student | Future IT Professional
          </h2>

          <p>
            Welcome to my personal portfolio!
            I am a Bachelor of Science in Information Technology
            student at Naga College Foundation. 
            I am happy to learn about technology 
            and explore new things in the field of IT. 
            This website showcases my background, education, 
            hobbies, and interests.
          </p>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <Link href="/about" className="btn">
              About Me
            </Link>

            <Link
              href="/contact"
              className="btn"
              style={{
                background: "transparent",
                border: "1px solid var(--purple)"
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </main>

      <footer>
        © 2026 Jelian Norte. All Rights Reserved.
      </footer>
    </>
  );
}