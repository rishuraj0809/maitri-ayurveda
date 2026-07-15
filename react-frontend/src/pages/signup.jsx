import "../style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../services/authService";

function Signup() {
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleSignup = async (e) => {
  e.preventDefault();

  const res = await signupUser(name, email, password);
  const data = await res.json();

  if (res.ok) {
    alert("Signup Successful!");
    window.location.href = "/";
  } else {
    alert(data.msg);
  }
};
  return (
    <div className="auth-container">
      <h2>Create Account</h2>

     <form id="signupForm" onSubmit={handleSignup}>
        <label>Name</label>
      <input
  type="text"
  id="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>

        <label>Email</label>
       <input
  type="email"
  id="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

        <label>Password</label>
        <input
  type="password"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

        <button type="submit" className="btn btn-primary">
          Signup
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;