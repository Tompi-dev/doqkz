import React, { useState, useEffect } from 'react';
import ClinicForm from './ClinicForm';
import api from './api';



const ClinicsSlider = () => {
  const [clinics, setClinics] = useState([]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await api.get('/');
        setClinics(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке клиник:', error);
      }
    };

    fetchClinics();
  }, []);
  return (
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

      <button className="connect-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Скрыть форму' : 'Подключить клинику'}
      </button>

      {showForm && <ClinicForm onClinicAdded={() => {
        api.get('/').then(res => setClinics(res.data));
      }} />}
    </div>
  );
};

export default ClinicsSlider;
