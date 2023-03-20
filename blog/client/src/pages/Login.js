import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      await login(inputs);

      navigate("/");
      setErr(null);
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1 className="login-h1">Login</h1>
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
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
        {err && <p className="login-p">{err}</p>}
        <span className="login-span">
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
