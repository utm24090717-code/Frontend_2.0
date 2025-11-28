// src/services/authService.js
import API from "../api";

// LOGIN
export const login = async (correo, contrasena) => {
  return API.post("/Auth/login", {
    Correo: correo,
    Contrasena: contrasena
  });
};

// REGISTRO
export const register = async (nombre, correo, contrasena, rolId) => {
  return API.post("/Auth/register", {
    Nombre: nombre,
    Correo: correo,
    Contrasena: contrasena,
    RolId: rolId
  });
};

// LISTAR TODOS LOS USUARIOS
export const getUsuarios = async () => {
  return API.get("/Auth/usuarios");
};

// OBTENER USUARIO POR ID
export const getUsuarioById = async (id) => {
  return API.get(`/Auth/usuarios/${id}`);
};
