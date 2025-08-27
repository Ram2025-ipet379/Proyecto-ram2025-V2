import { useState } from 'react';
import './estilos/App.css';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('main');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [evaluation, setEvaluation] = useState({ difficulty: '', feedback: '' });
  const [registrationData, setRegistrationData] = useState({
    name: '',
    age: '',
    grade: '',
    email: ''
  });

  const handleStartClick = () => {
    setView('options');
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleEvaluationChange = (event) => {
    const { name, value } = event.target;
    if (name === 'difficulty' && (value < 1 || value > 10)) {
      alert('Por favor, ingresa un valor entre 1 y 10.');
      return;
    }
    setEvaluation((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmOptionClick = () => {
    if (selectedOption) {
      setView('teachers');
    } else {
      alert('Por favor, selecciona una opción.');
    }
  };

  const handleConfirmTeacherClick = () => {
    if (selectedTeacher) {
      setView('subjects');
    } else {
      alert('Por favor, selecciona un profesor.');
    }
  };

  const handleConfirmSubjectClick = () => {
    if (selectedSubject) {
      setView('topics');
    } else {
      alert('Por favor, selecciona una materia.');
    }
  };

  const handleSubmitTopic = () => {
    if (topic.trim()) {
      setView('evaluation');
    } else {
      alert('Por favor, ingresa un tema.');
    }
  };

  const handleSubmitEvaluation = () => {
    if (evaluation.difficulty && evaluation.feedback) {
      alert('Gracias por tu evaluación.');
      setView('main');
      setSelectedOption('');
      setSelectedTeacher('');
      setSelectedSubject('');
      setTopic('');
      setEvaluation({ difficulty: '', feedback: '' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleBackClick = () => {
    if (view === 'evaluation') {
      setView('topics');
    } else if (view === 'topics') {
      setView('subjects');
    } else if (view === 'subjects') {
      setView('teachers');
    } else if (view === 'teachers') {
      setView('options');
    } else if (view === 'options') {
      setView('main');
    }
  };

  const handleRegistrationChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitRegistration = () => {
    const { name, age, grade, email } = registrationData;
    if (name && age && grade && email) {
      alert('Registro exitoso.');
      setShowRegister(false);
      setRegistrationData({ name: '', age: '', grade: '', email: '' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const options = [
    '1a', '1b', '1c', '2a', '2b', '2c', '3a', '3b', '3c',
    '4a', '4b', '5a', '5b', '6a', '6b', '7a', '7b'
  ];

  const teachers = [
    'Profesor A', 'Profesor B', 'Profesor C', 'Profesor D'
  ];

  const subjects = [
    'Matemáticas', 'Lengua', 'Historia', 'Geografía', 'Ciencias'
  ];

  return (
    <div className="App">
      <Header onLogoClick={() => setView('main')} />
      {view === 'main' && (
        <div>
          <h1>Bienvenidos</h1>
          <button className="start-button" onClick={handleStartClick}>Comenzar</button>
          <button className="header-button" onClick={handleLoginClick}>Iniciar sesión</button>
          <button className="header-button" onClick={handleRegisterClick}>Regístrarse</button>
        </div>
      )}
      {view === 'options' && (
        <div>
          <h2>Lista de Opciones</h2>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button className="confirm-button" onClick={handleConfirmOptionClick}>Confirmar</button>
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
      )}
      {view === 'teachers' && (
        <div>
          <h2>Lista de Profesores</h2>
          <ul>
            {teachers.map((teacher, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="teachers"
                    value={teacher}
                    checked={selectedTeacher === teacher}
                    onChange={handleTeacherChange}
                  />
                  {teacher}
                </label>
              </li>
            ))}
          </ul>
          <button className="confirm-button" onClick={handleConfirmTeacherClick}>Confirmar</button>
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
      )}
      {view === 'subjects' && (
        <div>
          <h2>¿En qué materia te evaluaron?</h2>
          <ul>
            {subjects.map((subject, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="subjects"
                    value={subject}
                    checked={selectedSubject === subject}
                    onChange={handleSubjectChange}
                  />
                  {subject}
                </label>
              </li>
            ))}
          </ul>
          <button className="confirm-button" onClick={handleConfirmSubjectClick}>Confirmar</button>
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
      )}
      {view === 'topics' && (
        <div>
          <h2>¿En qué tema fue evaluado?</h2>
          <textarea
            value={topic}
            onChange={handleTopicChange}
            placeholder="Escribe el tema aquí"
            rows="4"
            cols="50"
          />
          <br />
          <button className="confirm-button" onClick={handleSubmitTopic}>Confirmar</button>
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
      )}
      {view === 'evaluation' && (
        <div>
          <h2>Evaluación</h2>
          <label>
            ¿Cómo crees que te fue? (1-10)
            <input
              type="number"
              name="difficulty"
              value={evaluation.difficulty}
              onChange={handleEvaluationChange}
              min="1"
              max="10"
            />
          </label>
          <br />
          <label>
            ¿Te resultó fácil la evaluación/trabajo práctico?
            <textarea
              name="feedback"
              value={evaluation.feedback}
              onChange={handleEvaluationChange}
              placeholder="Escribe tus comentarios aquí"
              rows="4"
              cols="50"
            />
          </label>
          <br />
          <button className="confirm-button" onClick={handleSubmitEvaluation}>Enviar</button>
          <button className="back-button" onClick={handleBackClick}>Volver</button>
        </div>
      )}
      {showLogin && <Login onClose={handleCloseLogin} onRegister={() => setView('register')} />}
      {showRegister && (
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
          <button className="back-button" onClick={handleCloseRegister}>Cancelar</button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
