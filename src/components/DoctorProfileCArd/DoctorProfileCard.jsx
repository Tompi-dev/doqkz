import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import BookingSection from './DoctorProfileComponents/BookingSection';
import DoctorCardBasicInfo from './DoctorProfileComponents/DoctorCardBasicInfo';
import DoctorReviews from './DoctorProfileComponents/DoctorReviews';
import DoctorInfoSections from './DoctorProfileComponents/DoctorInfoSections';
import ClinicCard from './DoctorProfileComponents/ClinicCard';
import './DoctorProfileCard.css';

export default function DoctorProfileCard() {
  const { id } = useParams();
  const [doctorProfile, setDoctorProfile] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/Doctors/get/akushers/${id}`)
      .then(response => {
        setDoctorProfile(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching doctor profile:", error);
      });
  }, [id]);

  if (!doctorProfile) return <div>Загрузка...</div>;

  return (
    <div className="doctor-profile-page">
      <div className="doctor-profile-left">
        <DoctorCardBasicInfo doctor={doctorProfile} />
        <DoctorReviews reviews={doctorProfile.reviews_count} score={doctorProfile.user_score} />
        <DoctorInfoSections
          about={doctorProfile.about}
          education={doctorProfile.education}
          experience={doctorProfile.experience_places}
          procedures={doctorProfile.procedures}
        />

        <ClinicCard 
        clinic={{ name: doctorProfile.clinic_name, address: doctorProfile.clinic_address, 
        metro: doctorProfile.nearest_metro, distance_km: doctorProfile.distance_km }} />
      </div>
      <BookingSection 
       price = {{ave_price : doctorProfile.price}}
      clinic={{ name: doctorProfile.clinic_name, address: doctorProfile.clinic_address, 
        metro: doctorProfile.nearest_metro, distance_km: doctorProfile.distance_km }} 
      available={{ day: doctorProfile.next_available_day, time: doctorProfile.next_available_time }} />
    </div>
  );
}
