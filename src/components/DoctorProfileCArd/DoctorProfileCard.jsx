// DoctorProfileCard.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import BookingSection from './DoctorProfileComponents/BookingSection';
import DoctorCardBasicInfo from './DoctorProfileComponents/DoctorCardBasicInfo';
import DoctorReviews from './DoctorProfileComponents/DoctorReviews';
import DoctorInfoSections from './DoctorProfileComponents/DoctorInfoSections';
import ClinicCard from './DoctorProfileComponents/ClinicCard';
import './DoctorProfileCard.css';

export default function DoctorProfileCard() {
  const { id } = useParams();
  const [doctorProfile, setDoctorProfile] = useState(null);
  const navigate = useNavigate();

  const handleShowDoctorOnMap = () => {
  const lat = doctorProfile?.clinic?.latitude;
  const lng = doctorProfile?.clinic?.longitude;

  if (!lat || !lng) {
    alert("Координаты клиники недоступны.");
    return;
  }

  navigate(`/Doctors/map?lat=${lat}&lng=${lng}`);
};

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/Doctors/get/doctors/${id}/`)
      .then(response => {
        setDoctorProfile(response.data);
      })
      .catch(error => {
        console.error("Error fetching doctor profile:", error);
      });
  }, [id]);

  if (!doctorProfile) return <div>Загрузка...</div>;

  const {
    full_name,
    experience_years,
    description,
    photo,
    clinic,
    specialization,
    education,
    experience,
    procedures,
    availability,
    reviews
  } = doctorProfile;

  return (
    <div className="doctor-profile-page">
      <div className="doctor-profile-left">
        <DoctorCardBasicInfo
          doctor={{
            full_name,
            experience_years,
            description,
            photo,
            specialization: specialization?.name
          }}
        />
        <button onClick={handleShowDoctorOnMap} className="show-on-map-btn">
  📍 Показать, где находится врач
</button>

        <DoctorReviews
          reviews={reviews?.count}
          score={reviews?.user_score}
        />

        <DoctorInfoSections
          about={description}
          education={education}
          experience={experience}
          procedures={procedures.map(p => p.name)}
        />

        <ClinicCard clinic={clinic} />
      </div>

      <BookingSection
        price={{ ave_price: 12000 }} // замените на doctorProfile.price, если появится
        clinic={clinic}
        available={availability}
      />
    </div>
  );
}






// BookingSection.jsx
// export function BookingSection({ price, clinic, available }) {
//   return (
//     <div className="booking-section">
//       <h3>Запись на приём</h3>
//       <p><strong>Цена приёма:</strong> {price.ave_price} ₸</p>
//       <p><strong>Ближайшая доступная дата:</strong> {available.day} в {available.time}</p>
//       <p><strong>Клиника:</strong> {clinic.name}</p>
//     </div>
//   );
// }
