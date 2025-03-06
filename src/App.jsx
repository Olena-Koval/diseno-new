import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar Router y las rutas
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';  // Importar los componentes de React Bootstrap
import { Link, useParams } from 'react-router-dom';  // Para usar Link y useParams de React Router
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar CSS de Bootstrap

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

// Componente principal de la página (Home)
const Home = ({ students }) => (
  <div className="row">
    {students.map((student) => (
      <div key={student.id} className="col-12 col-md-4 mb-4">
        <Card>  {/* Usamos el componente Card de React Bootstrap */}
          <Card.Body>
            <Card.Title>{student.name}</Card.Title>  {/* Nombre del estudiante */}
            <Card.Text>Nota: {student.grade}</Card.Text>  {/* Nota del estudiante */}
            {/* Usamos el componente Button de React Bootstrap */}
            <Button as={Link} to={`/detalles/${student.id}`} variant="primary">
              Ver Detalles
            </Button>
          </Card.Body>
        </Card>
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
