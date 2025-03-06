import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar Router y las rutas

import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Estudiante 1", grade: 85 },
    { id: 2, name: "Estudiante 2", grade: 90 },
    { id: 3, name: "Estudiante 3", grade: 78 },
    { id: 4, name: "Estudiante 4", grade: 92 },
    { id: 5, name: "Estudiante 5", grade: 91 },
    { id: 6, name: "Estudiante 6", grade: 95 },
  ]);

  return (
    <Router> {/* Envuelve todo con Router */}
      <div className="container">
        <h1 className="text-center my-4">Notas de Estudiantes</h1>

        {/* Configura las rutas aquí */}
        <Routes>
          <Route path="/" element={<Home students={students} />} /> {/* Página principal */}
          <Route path="/detalles/:id" element={<Detalles students={students} />} /> {/* Detalles del estudiante */}
        </Routes>
      </div>
    </Router>
  );
}

// Componente principal de la página
const Home = ({ students }) => (
  <div className="row">
    {students.map((student) => (
      <div key={student.id} className="col-12 col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{student.name}</h5>
            <p className="card-text">Nota: {student.grade}</p>
            {/* Enlace a la página de detalles */}
            <Link to={`/detalles/${student.id}`} className="btn btn-primary">Ver Detalles</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Componente de detalles del estudiante
const Detalles = ({ students }) => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const student = students.find((s) => s.id === parseInt(id)); // Busca el estudiante correspondiente
  
  if (!student) {
    return <p>Estudiante no encontrado</p>;
  }

  return (
    <div>
      <h2>Detalles de {student.name}</h2>
      <p>Nota: {student.grade}</p>
    </div>
  );
};

export default App;

