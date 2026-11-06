import PortfolioNavbar from "../../components/ui/portfolio-navbar";

export default function Education() {
  return (
    <>
      <PortfolioNavbar />

      <main className="container">
        <h1 className="section-title">
          My <span>Education</span>
        </h1>

        <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
          My academic background and educational journey.
        </p>

        <div className="card">
          <h3>Bachelor of Science in Information Technology</h3>

          <h4 style={{ marginBottom: "12px" }}>
            Naga College Foundation
          </h4>

          <p style={{ marginBottom: "15px" }}>
            Currently Studying
          </p>

          <p>
            I am currently pursuing a Bachelor of Science
            in Information Technology at Naga College
            Foundation. Through this program, I am learning
            about programming, computer systems, database
            management, and web development.
          </p>
        </div>

        <div className="card">
          <h3>My Learning Journey</h3>

          <p>
            Throughout my studies, I continue to gain
            knowledge and experience through classroom
            activities, programming exercises, projects,
            and other learning activities.
          </p>
        </div>

        <div className="card">
          <h3>My Academic Goals</h3>

          <p>
            My goal is to finish my degree, 
            make the most of everything I learn 
            in the field of Information Technology, and 
            use my knowledge and skills to build a better future. 
            I want to become successful in my chosen career 
            so I can help and support my loved ones and give them a better life.
          </p>
        </div>
      </main>

      <footer>
        © 2026 Jelian Norte. All Rights Reserved.
      </footer>
    </>
  );
}