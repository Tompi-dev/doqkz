import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SpecialtyList from './SpecialtyList';
import astanaData from './cities/astana_specialties_full.json';
import almatyData from './cities/almaty_specialties_full.json';
import shymkentData from './cities/shymkent_specialties_full.json';
import aktobeData from './cities/aktobe_specialties_full.json';
import Header from './Header';

const cities = {
  Astana: astanaData,
  Almaty: almatyData,
  Shymkent: shymkentData,
  Aktobe: aktobeData,
};

const Searching = () => {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem('selectedCity') || 'Astana'
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    localStorage.getItem('selectedDistrict') || 'Весь город'
  );
  
  useEffect(() => {
    const city = localStorage.getItem('selectedCity');
    const district = localStorage.getItem('selectedDistrict');
    if (city) setSelectedCity(city);
    if (district) setSelectedDistrict(district);
  }, []);
  
  return (
    <div className="app-container">  
      <Header />
      <SearchBar
        selectedCity={selectedCity}
        selectedDistrict={selectedDistrict}
        setSelectedCity={setSelectedCity}
        setSelectedDistrict={setSelectedDistrict}
        cities={cities}
      />
      <SpecialtyList
        selectedCity={selectedCity}
        selectedDistrict={selectedDistrict}
      />
    </div>
  );
};

export default Searching;
