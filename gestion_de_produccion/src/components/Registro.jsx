import "./Registro.css";
import { useState } from "react";
import { register } from "../services/authService";

function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: "",
    rol: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.contraseña !== form.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Convertir texto a rolId numérico
    const rolesMap = {
      administrador: 1,
      operador: 2,
      usuario: 3
    };

    const rolId = rolesMap[form.rol];

    try {
      const response = await register(
        form.nombre,
        form.correo,
        form.contraseña,
        rolId
      );

      alert("Usuario registrado correctamente");
      console.log("Respuesta backend:", response.data);

    } catch (error) {
      console.error("Error en registro:", error);
      alert("Error al registrar usuario");
    }
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

          {/* SELECT DEL ROL */}
          <select
            className="registro-input"
            name="rol"
            value={form.rol}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un rol</option>
            <option value="administrador">Administrador</option>
            <option value="operador">Operador</option>
            <option value="usuario">Usuario</option>
          </select>

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