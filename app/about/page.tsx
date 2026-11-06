import PortfolioNavbar from "../../components/ui/portfolio-navbar";

export default function About() {
  return (
    <>
      <PortfolioNavbar />

      <main className="container">
        <h1 className="section-title">
          About <span>Me</span>
        </h1>

        <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
          Get to know more about me, my background, and my interests.
        </p>

        <section className="card">
          <h3>My Story</h3>

          <p>
            Hello! I'm Jelian Norte, 
            an Information Technology student. 
            I enjoy exploring technology, discovering 
            new ideas, and learning how websites and 
            applications work. I am always willing 
            to learn new things, improve my skills, and 
            gain more experience as I continue my journey in 
            the world of IT.
          </p>

          <br />

          <p>
            As an IT student, I continue to develop my
            understanding of programming, database
            management, and website development. I believe
            that learning and practicing are important
            steps in improving my abilities. My goal is to
            become a skilled IT professional in the future.
          </p>
        </section>

        <h2 className="section-title" style={{ marginTop: "45px" }}>
          Skills & <span>Technologies</span>
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Programming</h3>
            <p>C++ and basic programming concepts.</p>
          </div>

          <div className="card">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, and Next.js.</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>MySQL and database management.</p>
          </div>

          <div className="card">
            <h3>Development Tools</h3>
            <p>Visual Studio Code and MySQL Workbench.</p>
          </div>
        </div>
      </main>

      <footer>
        © 2026 Jelian Norte. All Rights Reserved.
      </footer>
    </>
  );
}