import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaArrowRight, FaUserDoctor } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SSearch from './SSearch';

const SearchBar = ({
  selectedCity,
  selectedDistrict,
  setSelectedCity,
  setSelectedDistrict,
  cities,
}) => {
  const { t } = useTranslation();

  return (
    <div className="search-container">
     
        <SSearch
          selectedCity={selectedCity}
          selectedDistrict={selectedDistrict}
          setSelectedCity={setSelectedCity}
          setSelectedDistrict={setSelectedDistrict}
          cities={cities}
        />
      

      <div className="tab-row">
        <Link to="/procedures" className="tab">
          <div className="tab-left">
            <div className="icons-bg">
              <FaUserDoctor />
            </div>
            <span>{t('search.procedures')}</span>
          </div>
          <FaArrowRight />
        </Link>

        <Link to="/Doctors" className="tab">
          <div className="tab-left">
            <div className="icons-bg">
              <FaUserDoctor />
            </div>
            <span>{t('search.clinics')}</span>
          </div>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
