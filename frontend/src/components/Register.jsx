import React, { useState } from 'react';
import '../estilos/Register.css';

function Register() {
  const [registrationData, setRegistrationData] = useState({
    name: '',
    age: '',
    grade: '',
    email: ''
  });

  const handleRegistrationChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitRegistration = () => {
    const { name, age, grade, email } = registrationData;
    if (name && age && grade && email) {
      alert('Registro exitoso.');
      setRegistrationData({ name: '', age: '', grade: '', email: '' });
      // Aquí puedes agregar lógica para enviar un correo electrónico al colegio
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="register-page">
      <h2>Registro de Alumno</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={registrationData.name}
          onChange={handleRegistrationChange}
        />
      </label>
      <br />
      <label>
        Edad:
        <input
          type="number"
          name="age"
          value={registrationData.age}
          onChange={handleRegistrationChange}
        />
      </label>
      <br />
      <label>
        Grado:
        <input
          type="text"
          name="grade"
          value={registrationData.grade}
          onChange={handleRegistrationChange}
        />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input
          type="email"
          name="email"
          value={registrationData.email}
          onChange={handleRegistrationChange}
        />
      </label>
      <br />
      <button className="confirm-button" onClick={handleSubmitRegistration}>Registrar</button>
    </div>
  );
}

export default Register;
