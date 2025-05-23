// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorList.css';

const DoctorCard = ({ doctor }) => {
  // const [isOpen, setOpen] = useState(true);
  const navigate = useNavigate();

  if (!doctor || typeof doctor !== 'object') return null;

  const handleId = (id) => {
    navigate(`/Doctors/Card/${id}`);
  };
  console.log("📷 doctor.photo =", doctor.photo);


  return (
    <div className="doctor-card">

      <div className="doctor-left">
       <img
  src={`http://127.0.0.1:8000${doctor.photo}`}
  alt={doctor.full_name}
  className="doctor-img"
/>



        <div className="rating">
          <span>
            {Array.isArray(doctor.reviews) && doctor.reviews.length > 0
              ? (
                doctor.reviews.reduce((sum, r) => sum + (r.user_score || 0), 0) /
                doctor.reviews.length
              ).toFixed(1)
              : '—'}
          </span>
          <p>{Array.isArray(doctor.reviews) ? doctor.reviews.length : 0} отзывов</p>
        </div>

      </div>


      <div className="doctor-info">
        <h3
          onClick={() => handleId(doctor.id)}
          style={{ cursor: 'pointer', color: '#007bff' }}
        >
          {doctor.full_name}
        </h3>

        <p>{doctor.specialization?.name}</p>
        <p>Стаж {doctor.experience_years} лет</p>
        <p>Прием в клинике</p>


        <div className="price-row">
          <span className="old-price">15000 тг.</span>
          <span className="new-price">12000 тг.</span>
          <span className="discount">-20%</span>
          <span
            data-bs-toggle="modal"
            data-bs-target={`#modal-${doctor.id}`}
            className="promo"
          >
            Подробнее
          </span>
        </div>


        <p className="clinic-name">{doctor.clinic?.name}</p>
        <p className="clinic-address">{doctor.clinic?.address}</p>
      </div>

      <div className="line"></div>


      <div
        className="modal fade"
        id={`modal-${doctor.id}`}
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">Подробнее</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Скидка действует только на первичный приём. Повторные приёмы оплачиваются по прайсу клиники.
              Для получения скидки предъявите СМС с подтверждением записи.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




const DoctorList = ({ clinics }) => {
  return (
    <div className="doctor-list-only">
      {clinics.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
