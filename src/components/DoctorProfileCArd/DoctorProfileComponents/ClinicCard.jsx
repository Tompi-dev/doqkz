export default function ClinicCard({ clinic }) {
  console.log(clinic); 
  return (
    <div className="clinic-card">
      <h3>Клиники</h3>
      <div className="clinic-info">
        <p className="clinic-name">{clinic.name}</p>
        <p className="clinic-address">{clinic.address}</p>
        <p className="clinic-location">Метро: {clinic.metro}</p>
        <p className="clinic-distance">~ {clinic.distance_km} км</p>

        <div className="clinic-price">
          <span className="price-old">15000₸</span>
          <span className="price-new">12000₸</span>
          <span className="discount">-20%</span>
        </div>
        <div className="clinic-booking">
          <p>Ближайшая запись на <strong>завтра</strong></p>
          <button>10:30</button>
        </div>
      </div>
    </div>
  );
}
