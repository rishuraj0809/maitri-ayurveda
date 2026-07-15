import "../style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";
function Login() {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  const res = await loginUser(email, password);
  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userName", data.user.name);

    alert("Login Successful!");
    window.location.href = "/";
  } else {
    alert(data.msg);
  }
};
  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form id="loginForm" onSubmit={handleLogin}>
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
          Login
        </button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;