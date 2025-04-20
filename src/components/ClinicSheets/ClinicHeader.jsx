import React, { useState, useEffect } from 'react';
import astanaData from '../cities/astana_specialties_full.json';
import almatyData from '../cities/almaty_specialties_full.json';
import SSearch from '../SSearch';
import logo from '/logo.svg';
import './ClinicHeader.css';
import { Reg } from '../Reg';
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const cities = {
  Astana: astanaData,
  Almaty: almatyData,
};

const ClinicHeader = () => {
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState('Almaty');
  const [selectedDistrict, setSelectedDistrict] = useState('Весь город');

  useEffect(() => {
    const city = localStorage.getItem('selectedCity');
    const district = localStorage.getItem('selectedDistrict');
    if (city) setSelectedCity(city);
    if (district) setSelectedDistrict(district);
  }, []);

  return (
    <header className="clinic-header">
      <div className="clinic-header-top">
        <img src={logo} alt="Logo" className="clinic-logo" />

        <div className="clinic-search">
          <SSearch
            selectedCity={selectedCity}
            selectedDistrict={selectedDistrict}
            setSelectedCity={setSelectedCity}
            setSelectedDistrict={setSelectedDistrict}
            cities={cities}
          />
        </div>

        <div className="clinic-auth">
          <Reg />
        </div>
      </div>

      <div className="clinic-header-bottom">
        <ul className="nav-links">
          <li>{t("header.title")}</li>
          <li>{t("search.clinics")}</li>
          <li>{t("search.procedures")}</li>
        </ul>
        <div className="add-clinic">
          <span>{t("header.connectClinic") || 'Подключить клинику'}</span>
          <FaArrowRight />
        </div>
      </div>
    </header>
  );
};

export default ClinicHeader;
