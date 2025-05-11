export default function DoctorInfoSections({ about, education, experience, procedures }) {
  // Преобразуем JSON-строки в массивы/объекты
  

  return (
    <>
      <div className="doctor-section">
        <h3>О враче</h3>
        <ul>
          <li>{about}</li>
        </ul>
      </div>

      <div className="doctor-section">
        <h3>Образование</h3>
        <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.university}, {edu.specialty}, {edu.location}, {edu.year}
          </li>
        ))}
      </ul>
      </div>

      <div className="doctor-section">
        <h3>Опыт работы</h3>
        <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.clinic} — {exp.role}, {exp.location} ({exp.years})
          </li>
        ))}
      </ul>
      </div>

      <div className="doctor-section">
        <h3>Проводимые процедуры</h3>
        <ul>
        {procedures.map((proc, index) => <li key={index}>{proc}</li>)}
      </ul>

      </div>

      <div className="doctor-photo-section">
        <h3>Фото</h3>
        <img
          src="https://via.placeholder.com/80"
          alt="Доктор фото"
          className="doctor-small-photo"
        />
      </div>
    </>
  );
}
