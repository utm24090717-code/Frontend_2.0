import React, { useState } from 'react';
import './Contraseña.css';

const Contraseña = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!email) {
      setMessage('Por favor ingresa tu correo electrónico');
      setMessageType('error');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Por favor ingresa un correo electrónico válido');
      setMessageType('error');
      return;
    }

    try {
      // Aquí iría la lógica para enviar el enlace de recuperación
      console.log('Enviando enlace de recuperación a:', email);
      
      // Simulación de envío exitoso
      setMessage('Se ha enviado un enlace de recuperación a tu correo electrónico');
      setMessageType('success');
      setEmail('');
      
      // Opcional: Redirigir después de éxito
      // setTimeout(() => {
      //   window.location.href = '/login';
      // }, 3000);
      
    } catch (error) {
      setMessage('Error al enviar el enlace. Por favor intenta nuevamente.');
      setMessageType('error');
    }
  };

  return (
    <div className="contraseña-container">
      <div className="contraseña-card">
        <h1 className="contraseña-title">¿Olvidaste tu contraseña?</h1>
        <p className="contraseña-subtitle">
          Ingresa tu correo y te enviaremos instrucciones
        </p>

        {message && (
          <div className={`contraseña-message ${messageType}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="contraseña-input"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button type="submit" className="contraseña-btn">
            Enviar enlace
          </button>
        </form>

        <div className="contraseña-footer">
          <span>
            ¿Recordaste tu contraseña? 
            <a href="/">Volver a inicio</a>
          </span>
          <br />
          <span>
            ¿No tienes una cuenta? 
            <a href="/registro">Crear una cuenta</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contraseña;