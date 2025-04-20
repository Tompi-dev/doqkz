import React from 'react';
import clinicData from '../data/clinics_255.json'
import './ClinicListss.css';

const ClinicCardss = ({ clinic }) => {
  return (
    <div className="clinic-card">
      <div className="clinic-left">
        <img src={clinic.logo} alt={clinic.name} className="clinic-img" />
        <div className="rating">
          <span>{clinic.rating}</span>
          <p>{clinic.reviews} отзывов</p>
        </div>
      </div>

      <div className="clinic-info">
        <h3>{clinic.name}</h3>
        <p>{clinic.description}</p>
        <div className="clinic-addresses">
          <strong>Адреса:</strong>
          <ul>
            {clinic.addresses.map((address, idx) => (
              <li key={idx}>{address}</li>
            ))}
          </ul>
        </div>
        <p>
          <a href={clinic.mapLink} target="_blank" rel="noreferrer">Открыть на карте</a>
        </p>
        {clinic.is24h && <p><strong>Работает 24/7</strong></p>}
      </div>
    </div>
  );
};

const ClinicListss = () => {
  return (
    <div className="clinic-list-only">
      {clinicData.map((clinic, index) => (
        <ClinicCardss key={index} clinic={clinic} />
      ))}
    </div>
  );
};

export default ClinicListss;
