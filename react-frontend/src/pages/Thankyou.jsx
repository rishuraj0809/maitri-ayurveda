import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1>🎉 Appointment Booked Successfully!</h1>

        <p>
          Thank you for choosing <strong>Maitri Ayurveda</strong>.
        </p>

        <p>Our team will contact you soon to confirm your appointment.</p>

        <Link className="btn primary" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;