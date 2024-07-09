import React from 'react';
const Record = ({ nombre, apellido,dia,horaEntrada,horaSalida ,dni}) => (
    <div className="record">
      <h3>{apellido} {nombre}</h3>
      <h3>{dni}</h3>
      <p>Fecha: {dia}</p>
      <p>Hora Entrada: {horaEntrada}</p>
      <p>Hora Salida: {horaSalida}</p>
    </div>
  );
export default Record;
