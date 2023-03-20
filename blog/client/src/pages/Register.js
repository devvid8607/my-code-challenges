import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res);
      setErr(null);
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="auth">
      <h1 className="login-h1">Register</h1>
      <form className="login-form">
        <input
          className="login-input"
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          className="login-input"
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="login-input"
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button className="login-button" onClick={handleSubmit}>
          Register
        </button>
        {err && <p className="login-p">{err}</p>}
        <span className="login-span">
          Have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
