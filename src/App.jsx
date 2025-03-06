import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Estudiante 1", grade: 85 },
    { id: 2, name: "Estudiante 2", grade: 90 },
    { id: 3, name: "Estudiante 3", grade: 78 },
    { id: 4, name: "Estudiante 4", grade: 92 }
  ])

  return (
    <div className="container">
      <h1 className="text-center my-4">Notas de Estudiantes</h1>

      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Nota: {student.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
