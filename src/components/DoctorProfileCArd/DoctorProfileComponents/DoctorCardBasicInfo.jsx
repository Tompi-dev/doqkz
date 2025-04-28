

export default function DoctorCardBasicInfo({doctor}) {
  return (
    <div className="doctor-header">
      <img
        src="https://via.placeholder.com/100"
        alt="Доктор"
        className="doctor-photo"
      />
      <div>
        <h2>{doctor.name}</h2>
        <p>{doctor.specialty}</p>
        <p className="experience">{doctor.experience} years</p> 
      </div>
    </div>
  )};