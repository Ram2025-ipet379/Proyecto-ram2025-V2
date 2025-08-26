import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [view, setView] = useState('main');
  const [showLogin, setShowLogin] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [topic, setTopic] = useState('');

  const handleStartClick = () => {
    setView('options');
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
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
      alert(`Tema ingresado: ${topic}`);
      setView('main');
    } else {
      alert('Por favor, ingresa un tema.');
    }
  };

  const handleBackClick = () => {
    if (view === 'topics') {
      setView('subjects');
    } else if (view === 'subjects') {
      setView('teachers');
    } else if (view === 'teachers') {
      setView('options');
    } else if (view === 'options') {
      setView('main');
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
          <h1>Bienvenidos sean</h1>
          <button className="start-button" onClick={handleStartClick}>Comenzar</button>
          <button className="header-button" onClick={handleLoginClick}>Inicio</button>
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
      {showLogin && <Login onClose={handleCloseLogin} />}
    </div>
  );
}

export default App;
