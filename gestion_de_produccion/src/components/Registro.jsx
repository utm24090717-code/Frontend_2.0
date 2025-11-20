import "./Registro.css";
import { useState } from "react";

function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.contraseña !== form.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Registro enviado");
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h2 className="registro-title">Crear cuenta</h2>
        <p className="registro-subtitle">Regístrate para continuar</p>

        <form onSubmit={handleSubmit}>
          <input
            className="registro-input"
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            className="registro-input"
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <input
            className="registro-input"
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={form.contraseña}
            onChange={handleChange}
            required
          />
          <input
            className="registro-input"
            type="password"
            name="confirmar"
            placeholder="Confirmar contraseña"
            value={form.confirmar}
            onChange={handleChange}
            required
          />

          <button type="submit" className="registro-btn">
            Registrarme
          </button>
        </form>

        <div className="registro-footer">
          ¿Ya tienes cuenta? <a href="/">Iniciar sesión</a>
        </div>
      </div>
    </div>
  );
}

export default Registro;
