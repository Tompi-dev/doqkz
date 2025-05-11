import ClinicHeader from "./ClinicHeader";
import WhiteHeader from "./WhiteHeader";
import DoctorList from '../DoctorList';
import { useEffect, useState } from "react";
import axios from "axios";

export const DoctorsInfo = () => {
  const [clinics, setClinics] = useState([]);
  const [originalClinics, setOriginalClinics] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Doctors/get/doctors/')
      .then(response => {
        setClinics(response.data);
        setOriginalClinics(response.data);
      })
      .catch(error => {
        console.error("Error fetching akushers", error);
      });
  }, []);

  const handleSortChange = (sortType) => {
    let sorted = [...originalClinics];
  
    if (sortType === 'rating') {
      sorted.sort((a, b) => (b.reviews?.total_score || 0) - (a.reviews?.total_score || 0));

    } 
    else if (sortType === 'price') {
      const getPrice = doc => doc.price?.discounted || doc.price?.original || 0;
      sorted.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortType === 'experience') {
      sorted.sort((a, b) => (b.experience_years || 0) - (a.experience_years || 0));
    }
  
    setClinics(sorted);
  };
  

  return (
    <div>
      <ClinicHeader />
      <WhiteHeader clinics={clinics} setClinics={setClinics} onSortChange={handleSortChange} />
      <DoctorList classname='Cards' clinics={clinics} />
    </div>
  );
};
