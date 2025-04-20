
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';

const SSearch = ({

    selectedCity,
    selectedDistrict,
    setSelectedCity,
    setSelectedDistrict,
    cities,
}) => {

    const { t } = useTranslation();
    const selectedValue = `${selectedCity}|${selectedDistrict}`;
    
      const allSpecialties = cities[selectedCity]?.[selectedDistrict]?.flatMap(group => group.items) || [];
      const [searchValue, setSearchValue] = useState('');

      
    
  return (
    <div>
        <div className="search-row">
        <select
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        >
          <option value="">{t('search.doctorPlaceholder')}</option>
          {allSpecialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>

        <select
          className="search-input"
          value={selectedValue}
          onChange={(e) => {
            const [city, district] = e.target.value.split('|');
            setSelectedCity(city);
            setSelectedDistrict(district);
            localStorage.setItem('selectedCity', city);
            localStorage.setItem('selectedDistrict', district);
          }}
        >
          {Object.entries(cities).map(([city, districts]) => (
            <optgroup key={city} label={city}>
              {Object.keys(districts).map((district) => (
                <option
                  key={`${city}|${district}`}
                  value={`${city}|${district}`}
                >
                  {district}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

                <button className="search-button" aria-label="search">
                  <CiSearch />
                </button>
              </div>
        

    </div>
  )
}

export default SSearch