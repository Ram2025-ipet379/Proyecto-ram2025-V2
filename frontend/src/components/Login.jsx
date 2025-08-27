import React, { useState } from 'react';
import "../components/Register";
import '../estilos/Login.css';

const Login = ({ onClose, onRegister }) => {
  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Iniciar Sesión</h2>
        <form>
          <label>
            Gmail:
            <input type="email" name="gmail" required />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" required />
          </label>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <label>
            Apellido:
            <input type="text" name="apellido" required />
          </label>
          <button type="submit">Iniciar Sesión</button>
        </form>
        <p>¿No tienes una cuenta? <a href="#" onClick={onRegister}>Regístrate</a></p>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Login;
