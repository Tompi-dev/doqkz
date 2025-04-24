import React, { useState } from 'react';
import './DoctorList.css';
// import doctorData from './data/akushers.json';

const DoctorCard = ({ doctor }) => {
  
  const [isOpen, setOpen] = useState(true);
  if (!doctor || typeof doctor !== 'object') return null;


  return (
    <div className="doctor-card">
      
      <div className="doctor-left">
        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
        <div className="rating">
          <span>{doctor.rating}</span>
          <p>{doctor.reviews} отзывов</p>
        </div>
      </div>

      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialty}</p>
        <p>Стаж {doctor.experience}</p>
        <p>Прием в клинике</p>
        <div className="price-row">
  <span className="old-price">{doctor.price?.original ?? '—'} тг.</span>
  <span className="new-price">{doctor.price?.discounted ?? '—'} тг.</span>
  <span className="discount">-{doctor.price?.discount ?? '0%'}</span>
  <span data-bs-toggle="modal" data-bs-target="#exampleModal" className="promo">
    {doctor.price?.promo ?? 'Подробнее'}
  </span>
</div>

        <p className="clinic-name">{doctor.clinic}</p>
        <p className="clinic-address">{doctor.address}</p>
        <p className="metro">{doctor.nearest_metro}</p>
      </div>

      <div className="line"></div>

      <div className="doctor-times">
        <div className={isOpen ? 'doctor-times-real' : 'doctor-times-real2'}>
          {Object.entries(doctor.available_slots).map(([date, times]) => (
            <div key={date} className="date-column">
              <strong>{date}</strong>
              <div className="slots">
                {times.map((time) => (
                  <button key={time} className="slot-btn">
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="more">
          <button onClick={() => setOpen(!isOpen)} className="more-slots">
            {isOpen ? 'Показать больше' : 'Меньше '}
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Подробнее
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Скидка действует только на первичный приём, повторные приёмы оплачиваются по прайсу клиники.
              Для получения скидки предъявите СМС с подтверждением записи.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorList = ({clinics}) => {
  return (
    <div className="doctor-list-only">
      {clinics.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
