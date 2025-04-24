import ClinicHeader from "./ClinicHeader";
import WhiteHeader from "./WhiteHeader";
import DoctorList from '../DoctorList';
import { useEffect, useState } from "react";
import axios from "axios";

export const ClinicList = () => {
  const [clinics, setClinics] = useState([]);
  const [originalClinics, setOriginalClinics] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Doctors/get/akushers/')
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
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortType === 'price') {
      sorted.sort((a, b) => {
        const aPrice = a.price?.discounted || a.price?.original || 0;
        const bPrice = b.price?.discounted || b.price?.original || 0;
        return aPrice - bPrice;
      });
    } else if (sortType === 'experience') {
      sorted.sort((a, b) => {
        const aYears = parseInt(a.experience);
        const bYears = parseInt(b.experience);
        return bYears - aYears;
      });
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
