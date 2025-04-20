
import React, { useEffect, useState } from 'react';
import './SpecialtyList.css';
import astanaData from './cities/astana_specialties_full.json';
import almatyData from './cities/almaty_specialties_full.json';
import shymkentData from './cities/shymkent_specialties_full.json';
import aktobeData from './cities/aktobe_specialties_full.json';

const cities = {
  Astana: astanaData,
  Almaty: almatyData,
  Shymkent: shymkentData,
  Aktobe: aktobeData,
};

const SpecialtyList = ({ selectedCity, selectedDistrict }) => {
  const [specialties, setSpecialties] = useState(cities[selectedCity][selectedDistrict]);

  useEffect(() => {
    setSpecialties(cities[selectedCity][selectedDistrict]);
  }, [selectedCity, selectedDistrict]);

  return (
    <div className="specialty-list">
      <div className='specialty-list-start'><h2>Врачи</h2>
      <h2>{specialties?.reduce((sum, group) => sum + group.items.length, 0)} </h2>
</div>
      
      <div className="specialty-grid">
        {specialties.map((group) => (
          <div key={group.letter} className="specialty-group">
            <h3>{group.letter}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* <div className="line"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyList;
