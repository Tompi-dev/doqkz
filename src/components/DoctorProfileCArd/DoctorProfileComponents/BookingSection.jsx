import React from "react";

// export default function BookingSection({price, clinic, available}) {
//   return (
//     <div className="doctor-profile-right">
//       <div className="booking-section">
//         <h4>Удобная запись без оплаты</h4>
//         <p>Poka</p>

//         <div className="booking-clinic">
//           <p className="clinic-name">{clinic.name}</p>
//           <p className="clinic-address">{clinic.address}</p>
//           <p className="clinic-distance">{clinic.distance_km}</p>
//           <p className="clinic-location">На карте</p>
//         </div>

//         <div className="booking-price">
//           <span className="price-old">15000₸</span>
//           <span className="price-new">{price.ave_price}</span>
//           <span className="discount">-20%</span>
//           <span className="tag">doq.kz</span>
//         </div>

//         <div className="booking-calendar">
//           <div className="calendar-day">сегодня<br />24 апр</div>
//           <div className="calendar-day active">{available.day}<br /><button>{available.time}</button></div>
//           <div className="calendar-day">сб<br />{available.time}</div>
//           <div className="calendar-day">вс<br />27 апр</div>
//         </div>
//       </div>
//     </div>
//   );
// }






export default function BookingSection({ price, clinic, available }) {
  return (
    <div className="doctor-profile-right">
      <div className="booking-section">
        <h4>Удобная запись без оплаты</h4>
        <p>Poka secret</p>

        <div className="booking-clinic">
          <p className="clinic-name">{clinic.name}</p>
          <p className="clinic-address">{clinic.address}</p>
          <p className="clinic-distance">{clinic.distance_km} км</p>
          <p className="clinic-location">На карте</p>
        </div>

        <div className="booking-price">
          <span className="price-old">15000₸</span>
          <span className="price-new">{price.ave_price}₸</span>
          <span className="discount">-20%</span>
          <span className="tag">doq.kz</span>
        </div>

        <div className="booking-calendar">
          {available?.booking_days?.slice(0, 4).map((day, index) => (
            <div key={index} className={`calendar-day ${day === available.day ? 'active' : ''}`}>
              {day}<br />
              {day === available.day ? (
                <button>{available.time}</button>
              ) : (
                <span>{available.time}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
