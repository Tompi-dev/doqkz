import './WhiteHeader.css';
import { useState, useEffect } from 'react';
import doctorData from '../data/akushers.json'

const WhiteHeader = ({clinics, setClinics}) => {
  const [calendar, showCalendar] = useState(false);
  const [sortType, setSortType] = useState('');

  const handleSortChange =(e) => {
    const value =e.target.value;
    setSortType(value);

    if (value=== 'rating'){
      const sorted = [...clinics].sort((a,b) => b.rating - a.rating );
      setClinics(sorted);
    }

    else if( value ==='price'){
      const sorted = [...clinics].sort((a, b) => b.price.original - a.price.original);
      setClinics(sorted)
    }
    else if(value ==='reviews'){
      const sorted = [...clinics].sort((a, b) => b.reviews - a.reviews);
      setClinics(sorted)
    }

    else if(value === ''){
      setClinics(doctorData)
    }
    else {
      console.log('choose anothe ples')
    }

  };

  const handleLocation = () => {
    alert("We need ur location, sir")


  }

 useEffect(() =>{

 },[clinics])


  return (
    <div>
    <div className="white-header">
      <div className="breadcrumb">
        <a href="/">Главная</a> / <span>Акушеры-гинекологи</span>
      </div>

      <div className="title-block">
        <h1>Акушер-гинекологи, Алматы (161)</h1>
        <p className="short-description">
          <strong>Акушер-гинеколог</strong> — врач, который контролирует состояние женщины во&nbsp;время беременности, родов и&nbsp;в&nbsp;послеродовом периоде.&nbsp;
          <a href="#">Читать далее</a>
        </p>
      </div>

      <div className="filters">
           <select  onChange={handleSortChange}  value={sortType} className="filter-btn" name="По умолчанию" id="">
             <option value="">По умолчанию</option>
             <option value="rating">По рейтингу </option>
             <option value="price">По цене</option>
            <option value="reviews">По стажу</option>
           
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

export default WhiteHeader;


// 
// import './ClinicWhiteHeader.css';
// import { useState, useEffect } from 'react';
// import clinicData from '../data/clinics_255.json'


// const ClinicWhiteHeader = ({clinics, setClinics}) => {
//   const [calendar, showCalendar] = useState(false);
//   const [sortType, setSortType] = useState('');

//   const handleSortChange =(e) => {
//     const value =e.target.value;
//     setSortType(value);

//     if (value=== 'rating'){
//       const sorted = [...clinics].sort((a,b) => b.rating - a.rating );
//       setClinics(sorted);
//     }

//     else if( value ==='price'){
//       const sorted = [...clinics].sort((a, b) => b.price - a.price);
//       setClinics(sorted)
//     }
//     else if(value ==='experience'){
//       const sorted = [...clinics].sort((a, b) => b.price - a.price);
//       setClinics(sorted)
//     }

//     else if(value === ''){
//       setClinics(clinicData)
//     }
//     else {
//       console.log('choose anothe ples')
//     }

//   };

//   const handleLocation = () => {
//     alert("We need ur location, sir")


//   }

//  useEffect(() =>{

//  },[clinics])

//   return (
//     <div>
//       <div className="white-header">
//         <div className="breadcrumb">
//           <a href="/">Главная</a> / <span>Все клиники</span>
//         </div>

//         <div className="title-block">
//           <h1>Акушер-гинекологи, Алматы (161)</h1>

//         </div>

//         <div className="filters">
//           <select  onChange={handleSortChange}  value={sortType} className="filter-btn" name="По умолчанию" id="">
//             <option value="">По умолчанию</option>
//             <option value="rating">По рейтингу </option>
//             <option value="price">По цене</option>
//             <option value="experience">По стажу</option>
           
//           </select>
         
//           <button onClick={handleLocation} className="filter-btn">Рядом</button>

//           <button onClick={() => showCalendar(!calendar)} className="filter-btn">Дата приёма</button>

//           {calendar && (
//             <input type="date" className="calendar-popup" />
//           )}
//         </div>


//       </div>
//       <div className="gradient">
//         <h3>Удобная запись без оплаты</h3>
//       </div>




//     </div>
//   );
// };

// export default ClinicWhiteHeader;
