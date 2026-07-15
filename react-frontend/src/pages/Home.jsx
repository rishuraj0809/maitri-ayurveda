import "../style.css";

function Home() {
  return (
    <div>
      <header className="home-hero">
        <h1>Welcome to Maitri</h1>

        <p>
          Healthcare Based on Ayurveda for Natural Wellness.
        </p>

        <div className="btn-group">
         <a href="/login" className="btn btn-primary">
  Login
</a>

          <a href="#" className="btn btn-secondary">
            Signup
          </a>
        </div>
      </header>

      <section className="info">
        <h2>About Maitri</h2>

        <p>
          Maitri provides Ayurveda-based treatments, diet planning,
          lifestyle guidance, herbal medicines, and holistic wellness
          practices.
        </p>
      </section>
    </div>
  );
}

export default Home;