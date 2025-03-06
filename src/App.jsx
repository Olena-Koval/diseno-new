import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './App.css'; // Mantén tus estilos personalizados si los tienes

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Estudiante 1", grade: 85 },
    { id: 2, name: "Estudiante 2", grade: 90 },
    { id: 3, name: "Estudiante 3", grade: 78 }
  ]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Notas de Estudiantes</h1>
      
      {/* Mapeamos sobre el estado de los estudiantes y mostramos sus notas en tarjetas */}
      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Nota: {student.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
