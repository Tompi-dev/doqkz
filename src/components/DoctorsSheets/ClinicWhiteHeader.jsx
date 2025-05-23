import './ClinicWhiteHeader.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// import clinicData from '../data/clinics_255.json'


const ClinicWhiteHeader = ({clinics, setClinics, onSortChange}) => {
  const [calendar, showCalendar] = useState(false);
  const [sortType, setSortType] = useState('');

  const navigate =useNavigate();
  
  const handleSortChange =(e) => {
    const value =e.target.value;
    setSortType(value);
  
    setClinics(clinics)
    onSortChange(value)

   

  };

  const handleLocation = () => {
    // alert("We need ur location, sir")
    navigate('/')


  }

 useEffect(() =>{

 },[clinics])

  return (
    <div>
      <div className="white-header">
        <div className="breadcrumb">
          <a href="/">Главная</a> / <span>Все клиники</span>
        </div>

        <div className="title-block">
          <h1>Частные клиники и медицинские центры в Алматы (160)</h1>

        </div>

        <div className="filters">
          <select  onChange={handleSortChange}  value={sortType} className="filter-btn" name="По умолчанию" id="">
            <option value="">По умолчанию</option>
            <option value="rating">По рейтингу </option>
            <option value="price">По цене</option>
            <option value="experience">По стажу</option>
           
          </select>
         
          <button onClick={handleLocation} className="filter-btn">Рядом</button>

          <button onClick={() => showCalendar(!calendar)} className="filter-btn">Дата приёма</button>

          {calendar && (
            <input type="date" className="calendar-popup" />
          )}
        </div>


      </div>
      <div className="gradient">
        <h3>Удобная запись без оплаты</h3>
      </div>




    </div>
  );
};

export default ClinicWhiteHeader;
