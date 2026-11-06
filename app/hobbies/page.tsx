
import PortfolioNavbar from "../../components/ui/portfolio-navbar";

export default function Hobbies() {
  return (
    <>
      <PortfolioNavbar />

      <main className="container">
        <h1 className="section-title">
          My <span>Hobbies & Interests</span>
        </h1>

        <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
          Things I enjoy doing during my free time.
        </p>

        <div className="grid">

          <div className="card">
            <h3>Listening to Music</h3>
            <p>
              I enjoy listening to music whenever I have
              free time. It helps me relax, improve my mood,
              and take a break from my daily activities.
            </p>
          </div>

          <div className="card">
            <h3>Playing Mobile Legends</h3>
            <p>
              I enjoy playing Mobile Legends with my friends.
              Whether we win or lose, what matters most is
              having fun and enjoying the game together.
            </p>
          </div>

          <div className="card">
            <h3>Playing Valorant</h3>
            <p>
              Playing Valorant is another way I spend my
              free time. I enjoy playing with my friends,
              working as a team, and sharing fun moments.
            </p>
          </div>

          <div className="card">
            <h3>Playing Roblox</h3>
            <p>
              I also enjoy playing Roblox with my friends.
              We explore different games, have fun, and
              create memorable moments together.
            </p>
          </div>

          <div className="card">
            <h3>Gaming with College Friends</h3>
            <p>
              College can be stressful, but thanks to my
              college friends, we still find time to enjoy
              ourselves through games. Win or lose, as long
              as we are having fun together, that's enough.
            </p>
          </div>

          <div className="card">
            <h3>Enjoying Time with Friends</h3>
            <p>
              I value the friendship I have built in college.
              Even with schoolwork, deadlines, and stress,
              we always find ways to bond, laugh, and enjoy
              our time together.
            </p>
          </div>

        </div>
      </main>

      <footer>
        © 2026 Jelian Norte. All Rights Reserved.
      </footer>
    </>
  );
}
