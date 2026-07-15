import Thankyou from "./pages/Thankyou";
import { bookAppointment } from "./services/appointmentService";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
function App() {
  const token = localStorage.getItem("token");
const userName = localStorage.getItem("userName");
const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={
        <>
          <header className="nav">
            <div className="wrap">
              <a href="#home" className="brand">
                <div className="logo">
                  <i className="fa-solid fa-leaf"></i>
                </div>

                <span>Maitri Ayurveda</span>

                <div
                  id="userDisplay"
                  style={{ color: "white", fontWeight: "bold" }}
                ></div>
              </a>

              <nav className="links">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#treatments">Treatments</a>
                <a href="#doctors">Doctors</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#blog">Blog</a>
                <a href="#appointment" className="cta">
                  Book Now
                </a>
{token ? (
  <>
    <span
      style={{
        color: "white",
        marginLeft: "20px",
        marginRight: "10px",
        fontWeight: "bold",
      }}
    >
      Welcome, {userName}
    </span>

    <button
      className="btn primary"
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        window.location.reload();
      }}
    >
      Logout
    </button>
  </>
) : (
  <>
    <Link to="/login" className="btn">
      Login
    </Link>

    <Link to="/signup" className="btn primary">
      Signup
    </Link>
  </>
)}
              </nav>
            </div>
          </header>

          <section className="hero" id="home">
            <div className="wrap">
              <div>
                <div
                  className="kicker"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  Traditional wisdom • Modern care
                </div>

                <h1
                  data-aos="fade-up"
                  data-aos-delay="120"
                >
                  Holistic healthcare based on{" "}
                  <span style={{ color: "var(--leaf-2)" }}>
                    Ayurveda
                  </span>
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Personalised healing plans rooted in ancient science —
                  supported by modern diagnostics. Restore balance through
                  diet, lifestyle, herbs, and therapies.
                </p>

                <div
                  className="hero-actions"
                  data-aos="fade-up"
                  data-aos-delay="260"
                >
                  <button
  className="btn primary"
  onClick={() => {
    if (token) {
      navigate("/appointment");
    } else {
      navigate("/login");
    }
  }}
>
  <i className="fa-regular fa-calendar-check"></i>
  {" "}Book an Appointment
</button>

                  <a className="btn" href="#services">
                    <i className="fa-solid fa-spa"></i>
                    {" "}Explore Services
                  </a>
                </div>
              </div>

              <div
                className="hero-img"
                aria-label="Ayurvedic therapy image"
              >
                <div className="floating-card">
                  <i className="fa-solid fa-seedling"></i>

                  <div>
                    <strong>Dosha Quiz</strong>
                    <br />
                    <small className="muted">
                      Discover your Prakriti
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-head">
                <h2>Why Maitri?</h2>

                <p>
                  We combine classical Ayurvedic principles (Dinacharya,
                  Ritucharya, Ahara, Vihara) with evidence-informed protocols.
                  Our doctors spend time to understand your unique constitution
                  and imbalances.
                </p>
              </div>

              <div className="grid grid-3">
                <div
                  className="card"
                  data-aos="zoom-in-up"
                >
                  <span className="badge">Personalised</span>

                  <h3>Prakriti-based Care</h3>

                  <p>
                    Assess Vata, Pitta, Kapha to tailor herbs,
                    diet and therapies. No one-size-fits-all.
                  </p>
                </div>

                <div
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-delay="100"
                >
                  <span className="badge">Safe</span>

                  <h3>Herbal Formulations</h3>

                  <p>
                    Classical preparations, quality-checked,
                    with clear guidance and follow-ups.
                  </p>
                </div>

                <div
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <span className="badge">Integrated</span>

                  <h3>Modern Diagnostics</h3>

                  <p>
                    We use labs and imaging when needed to
                    complement Ayurvedic assessment.
                  </p>
                </div>
              </div>

              <div className="sep"></div>

              <div
                className="points"
                data-aos="fade-up"
              >
                <div className="pill">
                  <i className="fa-regular fa-clock"></i>
                  {" "}45-60 min first consult
                </div>

                <div className="pill">
                  <i className="fa-solid fa-leaf"></i>
                  {" "}Diet & lifestyle roadmaps
                </div>

                <div className="pill">
                  <i className="fa-solid fa-hands-praying"></i>
                  {" "}Guided therapies
                </div>

                <div className="pill">
                  <i className="fa-solid fa-user-nurse"></i>
                  {" "}Ongoing support
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services">
            <div className="container">
              <div className="section-head">
                <h2>Services</h2>
                <p>
                  From prevention to recovery, choose a plan that meets your
                  current state and goals.
                </p>
              </div>

              <div className="grid grid-3">
                <div
                  className="card service-card"
                  data-aos="fade-up"
                >
                  <div className="icon">
                    <i className="fa-solid fa-seedling"></i>
                  </div>

                  <h3>Root-Cause Consultations</h3>

                  <p>
                    In-depth history, nadi pariksha, dosha/dhatu/agni assessment,
                    and actionable plan.
                  </p>
                </div>

                <div
                  className="card service-card"
                  data-aos="fade-up"
                  data-aos-delay="120"
                >
                  <div className="icon">
                    <i className="fa-solid fa-water"></i>
                  </div>

                  <h3>Panchakarma</h3>

                  <p>
                    Detoxification and rejuvenation protocols guided by qualified
                    physicians.
                  </p>
                </div>

                <div
                  className="card service-card"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  <div className="icon">
                    <i className="fa-solid fa-bowl-food"></i>
                  </div>

                  <h3>Diet & Lifestyle Coaching</h3>

                  <p>
                    Seasonal routines, mindful eating, and recipes aligned with
                    your prakriti.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TREATMENTS */}
          <section id="treatments">
            <div className="container">
              <div className="section-head">
                <h2>Popular Treatments</h2>
                <p>
                  Therapies curated for stress, metabolism, pain, skin, and overall vitality.
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card" data-aos="flip-left">
                  <div
                    className="treat-img"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop')",
                    }}
                  ></div>

                  <h3>Abhyanga</h3>

                  <p>
                    Warm herbal oil massage that nourishes tissues, improves
                    circulation, and calms the nervous system.
                  </p>
                </div>

                <div
                  className="card"
                  data-aos="flip-left"
                  data-aos-delay="120"
                >
                  <div
                    className="treat-img"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=1600&auto=format&fit=crop')",
                    }}
                  ></div>

                  <h3>Shirodhara</h3>

                  <p>
                    Steady stream of medicated oil on the forehead to ease anxiety,
                    insomnia, and mental fatigue.
                  </p>
                </div>

                <div
                  className="card"
                  data-aos="flip-left"
                  data-aos-delay="220"
                >
                  <div
                    className="treat-img"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1600&auto=format&fit=crop')",
                    }}
                  ></div>

                  <h3>Udvartana</h3>

                  <p>
                    Herbal powder massage to stimulate metabolism, reduce Kapha
                    accumulation, and tone the skin.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DOCTORS */}
          <section id="doctors">
            <div className="container">
              <div className="section-head">
                <h2>Our Doctors</h2>
                <p>
                  Experienced BAMS and MD (Ayurveda) practitioners dedicated to
                  integrative, compassionate care.
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card doc" data-aos="fade-up">
                  <img
                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
                    alt="Doctor 1"
                  />

                  <div className="meta">
                    <strong>Dr. Ananya Rao, BAMS</strong>
                    <br />
                    <small>Women’s health • Lifestyle</small>
                  </div>
                </div>

                <div
                  className="card doc"
                  data-aos="fade-up"
                  data-aos-delay="120"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550831858-3c2581fed2f5?q=80&w=800&auto=format&fit=crop"
                    alt="Doctor 2"
                  />

                  <div className="meta">
                    <strong>Dr. Rohan Kulkarni, MD (Ay)</strong>
                    <br />
                    <small>Metabolism • Panchakarma</small>
                  </div>
                </div>

                <div
                  className="card doc"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  <img
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop"
                    alt="Doctor 3"
                  />

                  <div className="meta">
                    <strong>Dr. Meera Shah, BAMS</strong>
                    <br />
                    <small>Mental wellbeing • Skin</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <div className="container">
              <div className="section-head">
                <h2>What Patients Say</h2>
                <p>Real experiences from our community.</p>
              </div>

              <div className="grid grid-3">
                <div className="card testi" data-aos="zoom-in">
                  <i className="fa-solid fa-quote-left"></i>

                  <div>
                    <div className="stars">★★★★★</div>

                    <p>
                      Within two months my sleep improved and stress reduced
                      dramatically. Gentle, effective care!
                    </p>

                    <small>— Kavya S.</small>
                  </div>
                </div>

                <div
                  className="card testi"
                  data-aos="zoom-in"
                  data-aos-delay="140"
                >
                  <i className="fa-solid fa-quote-left"></i>

                  <div>
                    <div className="stars">★★★★★</div>

                    <p>
                      Panchakarma was professionally supervised. I felt lighter,
                      clearer, and energized.
                    </p>

                    <small>— Aditya M.</small>
                  </div>
                </div>

                <div
                  className="card testi"
                  data-aos="zoom-in"
                  data-aos-delay="240"
                >
                  <i className="fa-solid fa-quote-left"></i>

                  <div>
                    <div className="stars">★★★★★</div>

                    <p>
                      Diet plan aligned perfectly with my routine. Sustainable
                      and delicious!
                    </p>

                    <small>— Ritu P.</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOG */}
          <section id="blog">
            <div className="container">
              <div className="section-head">
                <h2>Ayurveda Resources</h2>
                <p>Learn the principles that keep you balanced across seasons.</p>
              </div>

              <div className="grid grid-3">
                <div className="card" data-aos="fade-up">
                  <div
                    className="blog-img"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1516714435132-71a1e6e465f3?q=80&w=1600&auto=format&fit=crop')",
                    }}
                  ></div>

                  <h3>Understanding Doshas</h3>

                  <p>
                    Quick guide to Vata, Pitta, Kapha and how to spot imbalances.
                  </p>

                  <a
                    className="btn"
                    href="#"
                    onClick={() => alert("Coming soon!")}
                  >
                    Read
                  </a>
                </div>

                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="120"
                >
                  <div
                    className="blog-img"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop')",
                    }}
                  ></div>

                  <h3>Daily Routine (Dinacharya)</h3>

                  <p>
                    Small practices to anchor your day: tongue scraping,
                    abhyanga, and more.
                  </p>

                  <a
                    className="btn"
                    href="#"
                    onClick={() => alert("Coming soon!")}
                  >
                    Read
                  </a>
                </div>

                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  <div
                    className="blog-img"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1514995669114-b7d53f40a63c?q=80&w=1600&auto=format&fit=crop')",
                    }}
                  ></div>

                  <h3>Seasonal Eating (Ritucharya)</h3>

                  <p>
                    Adjust your plate with the weather to keep agni steady.
                  </p>

                  <a
                    className="btn"
                    href="#"
                    onClick={() => alert("Coming soon!")}
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* APPOINTMENT */}
          <section id="appointment">
            <div className="container">
              <div className="section-head">
                <h2>Book an Appointment</h2>
                <p>
                  Tell us a little about yourself. We’ll confirm your slot over
                  email/SMS.
                </p>
              </div>

             
<form
  className="card form"
  onSubmit={async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    try {
      await bookAppointment({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        message: document.getElementById("message").value,
      });

      alert("Appointment Booked Successfully!");

      navigate("/thankyou");

    } catch (err) {
      alert(err.response?.data?.msg || "Booking Failed");
    }
  }}
>
                <div className="full">
                  <label className="note">Your details</label>
                </div>

                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    pattern="[0-9+\-() ]{7,}"
                    required
                  />
                </div>

                <div>
                  <select id="service" required>
                    <option value="">Select service</option>
                    <option>Root-Cause Consultation</option>
                    <option>Panchakarma</option>
                    <option>Diet & Lifestyle Coaching</option>
                  </select>
                </div>

                <div>
                  <input type="date" id="date" required />
                </div>

                <div>
                  <input type="time" id="time" required />
                </div>

                <div className="full">
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Share concerns or goals (optional)"
                  ></textarea>
                </div>

                <div className="full">
                  <button className="btn primary" type="submit">
                    <i className="fa-regular fa-paper-plane"></i> Submit
                  </button>
                </div>

                <div
                  className="full note"
                  id="result"
                  aria-live="polite"
                ></div>
              </form>
            </div>
          </section>
          {/* FOOTER */}
          <footer>
            <div className="foot">
              <div className="brand">
                <div className="logo">
                  <i className="fa-solid fa-leaf"></i>
                </div>

                <span>Maitri Ayurveda</span>
              </div>

              <div>
                © {new Date().getFullYear()} Maitri Health • Based on Ayurveda
              </div>

              <div>
                <a href="#" className="pill">
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>

                <a href="#" className="pill">
                  <i className="fa-brands fa-facebook"></i> Facebook
                </a>

                <a href="#" className="pill">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </footer>
        </>
      }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
<Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
}

export default App;