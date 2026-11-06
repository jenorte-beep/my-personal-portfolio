
import PortfolioNavbar from "../../components/ui/portfolio-navbar";

export default function Contact() {
  return (
    <>
      <PortfolioNavbar />

      <main className="container">
        <h1 className="section-title">
          Contact <span>Me</span>
        </h1>

        <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
          Feel free to reach out if you have questions
          or want to connect with me.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          <div>
            <div className="card">
              <h3>Email</h3>
              <p>
                <a href="mailto:jenorte@gbox.ncf.edu.ph">
                  jenorte@gbox.ncf.edu.ph
                </a>
              </p>
            </div>

            <div className="card">
              <h3>Location</h3>
              <p>
                Tarosanan, Camaligan, Camarines Sur 4401,
                Philippines
              </p>
            </div>

            <div className="card">
              <h3>Availability</h3>
              <p>
                Open to learning, academic collaboration,
                making new connections, and gaining
                new experiences.
              </p>
            </div>
          </div>

          <div className="card">
            <h3>Send a Message</h3>

            <p style={{ marginBottom: "20px" }}>
              Fill out the form below to get in touch.
            </p>

            <form
              action="mailto:jenorte@gbox.ncf.edu.ph"
              method="post"
              encType="text/plain"
            >
              <label>Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
                style={inputStyle}
              />

              <label>Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
                style={inputStyle}
              />

              <label>Subject</label>
              <input
                type="text"
                name="Subject"
                placeholder="Enter message subject"
                required
                style={inputStyle}
              />

              <label>Message</label>
              <textarea
                name="Message"
                placeholder="Write your message here..."
                rows={5}
                required
                style={inputStyle}
              />

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer>
        © 2026 Jelian Norte. All Rights Reserved.
      </footer>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "18px",
  border: "1px solid #302440",
  borderRadius: "8px",
  background: "#151120",
  color: "#f5f1ff",
  fontSize: "14px",
  outline: "none"
};
