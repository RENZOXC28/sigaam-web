import React, { useEffect, useState } from 'react';
import './App.css';
import Record from './Record';

function App() {
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState({
    dia: '',
    horaEntrada: '',
    horaSalida: ''
  });

  useEffect(() => {
    const data = [
      {
        "id": 1,
        "dni": 72526247,
        "nombre": "Renzo",
        "apellido": "Porta",
        "dia": "2024-07-01",
        "horaEntrada": "10:00",
        "horaSalida": "11:00"
      },
      {
        "id": 2,
        "dni": 83462715,
        "nombre": "Mariana",
        "apellido": "Lopez",
        "dia": "2024-07-02",
        "horaEntrada": "09:00",
        "horaSalida": "10:30"
      },
      {
        "id": 3,
        "dni": 94573826,
        "nombre": "Carlos",
        "apellido": "Fernández",
        "dia": "2024-07-03",
        "horaEntrada": "08:00",
        "horaSalida": "09:00"
      },
      {
        "id": 4,
        "dni": 75683947,
        "nombre": "Laura",
        "apellido": "García",
        "dia": "2024-07-04",
        "horaEntrada": "11:00",
        "horaSalida": "12:00"
      },
      {
        "id": 5,
        "dni": 86794058,
        "nombre": "Jorge",
        "apellido": "Martínez",
        "dia": "2024-07-05",
        "horaEntrada": "12:00",
        "horaSalida": "13:00"
      },
      {
        "id": 6,
        "dni": 72839102,
        "nombre": "Sofía",
        "apellido": "Castro",
        "dia": "2024-07-06",
        "horaEntrada": "13:00",
        "horaSalida": "14:00"
      },
      {
        "id": 7,
        "dni": 67891234,
        "nombre": "Andrés",
        "apellido": "Morales",
        "dia": "2024-07-07",
        "horaEntrada": "14:00",
        "horaSalida": "15:00"
      },
      {
        "id": 8,
        "dni": 56378291,
        "nombre": "Lucía",
        "apellido": "Ramírez",
        "dia": "2024-07-08",
        "horaEntrada": "15:00",
        "horaSalida": "16:00"
      },
      {
        "id": 9,
        "dni": 49283756,
        "nombre": "Roberto",
        "apellido": "Núñez",
        "dia": "2024-07-09",
        "horaEntrada": "16:00",
        "horaSalida": "17:00"
      },
      {
        "id": 10,
        "dni": 83746592,
        "nombre": "Elena",
        "apellido": "Prieto",
        "dia": "2024-07-10",
        "horaEntrada": "10:00",
        "horaSalida": "11:00"
      },
      {
        "id": 11,
        "dni": 19283746,
        "nombre": "David",
        "apellido": "Ortiz",
        "dia": "2024-07-11",
        "horaEntrada": "09:00",
        "horaSalida": "10:00"
      },
      {
        "id": 12,
        "dni": 98237645,
        "nombre": "Carmen",
        "apellido": "López",
        "dia": "2024-07-12",
        "horaEntrada": "08:00",
        "horaSalida": "09:00"
      },
      {
        "id": 13,
        "dni": 74839201,
        "nombre": "Felipe",
        "apellido": "Ruiz",
        "dia": "2024-07-13",
        "horaEntrada": "07:00",
        "horaSalida": "08:00"
      },
      {
        "id": 14,
        "dni": 56273948,
        "nombre": "Patricia",
        "apellido": "Vega",
        "dia": "2024-07-14",
        "horaEntrada": "06:00",
        "horaSalida": "07:00"
      },
      {
        "id": 15,
        "dni": 83746598,
        "nombre": "Manuel",
        "apellido": "Gil",
        "dia": "2024-07-15",
        "horaEntrada": "05:00",
        "horaSalida": "06:00"
      },
      {
        "id": 16,
        "dni": 74839215,
        "nombre": "Ana",
        "apellido": "Santos",
        "dia": "2024-07-16",
        "horaEntrada": "04:00",
        "horaSalida": "05:00"
      },
      {
        "id": 17,
        "dni": 94827564,
        "nombre": "Pablo",
        "apellido": "Martínez",
        "dia": "2024-07-17",
        "horaEntrada": "03:00",
        "horaSalida": "04:00"
      },
      {
        "id": 18,
        "dni": 58273901,
        "nombre": "Sara",
        "apellido": "Jiménez",
        "dia": "2024-07-18",
        "horaEntrada": "02:00",
        "horaSalida": "03:00"
      },
      {
        "id": 19,
        "dni": 47293058,
        "nombre": "Oscar",
        "apellido": "Fernández",
        "dia": "2024-07-19",
        "horaEntrada": "01:00",
        "horaSalida": "02:00"
      },
      {
        "id": 20,
        "dni": 18374659,
        "nombre": "Lorena",
        "apellido": "Ruiz",
        "dia": "2024-07-20",
        "horaEntrada": "00:00",
        "horaSalida": "01:00"
      }
    ];
    setRecords(data);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      dia: '',
      horaEntrada: '',
      horaSalida: ''
    });
  };

  const filteredRecords = records.filter(record =>
    (filters.dia === '' || record.dia === filters.dia) &&
    (filters.horaEntrada === '' || record.horaEntrada === filters.horaEntrada) &&
    (filters.horaSalida === '' || record.horaSalida === filters.horaSalida)
  );

  return (
    <div className="App">
      <h1>Registros</h1>
      <div>
        <label>
          Día:
          <input type="date" name="dia" value={filters.dia} onChange={handleFilterChange} />
        </label>
        <label>
          Hora Entrada:
          <input type="time" name="horaEntrada" value={filters.horaEntrada} onChange={handleFilterChange} step="3600" />
        </label>
        <label>
          Hora Salida:
          <input type="time" name="horaSalida" value={filters.horaSalida} onChange={handleFilterChange} step="3600" />
        </label>
        <button onClick={handleResetFilters}>Mostrar Todos</button>
      </div>
      <div className="record-container">
        {filteredRecords.map(record => (
          <Record
            key={record.id}
            nombre={record.nombre}
            apellido={record.apellido}
            dni={record.dni}
            dia={record.dia}
            horaEntrada={record.horaEntrada}
            horaSalida={record.horaSalida}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
