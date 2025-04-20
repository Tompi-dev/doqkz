
import React from 'react';


const clinics = [
  { name: 'Samed', rating: 9.6 },
  { name: 'KK Clinic', rating: 9.7 },
  { name: 'Ева', rating: 9.6 },
  { name: 'IMC', rating: 9.1 },
  { name: 'LifeMed', rating: 9.7 },
  { name: 'Innova', rating: 9.8 },
  { name: 'Bio Center', rating: 9.7 },
];

const ClinicsSlider = () => (
  <div className="clinics-slider">
    <h2>Клиникам и врачам</h2>
    <p>Наш сервис создан для того, чтобы врачи могли уделять максимальное внимание пациенту и не думать об организационных моментах.</p>
    <div className="clinic-list">
      {clinics.map((clinic, idx) => (
        <div key={idx} className="clinic">
          <div>{clinic.name}</div>
          <div className="rating">{clinic.rating}</div>
        </div>
      ))}
    </div>
    <button className="connect-btn">Подключить клинику</button>
  </div>
);

export default ClinicsSlider;