import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  //pantalla de login
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Correo:", email, "Contraseña:", password);
    navigate("/dashboard"); //para navegar al dashboard
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/images/logo3nissan.png" alt="Logo" className="login-logo" />

        <div className="card">
          <h2 className="title">BIENVENIDO</h2>
          <p className="subtitle">
            ¿No tienes una cuenta?
            <Link to="/Registro"> Crear una cuenta</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="Ingresa tu direccion e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />

            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />

            <button type="submit" className="button">
              Iniciar sesión
            </button>
          </form>

          <div className="login-links">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          
        </div>
      </div>

      <div className="login-right">
        <img src="/images/carro3.jpg" alt="imagen derecha" />
      </div>
    </div>
  );
}

export default Login;
