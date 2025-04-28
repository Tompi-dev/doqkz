export default function DoctorInfoSections({ about, education, experience, procedures }) {
  // Преобразуем JSON-строки в массивы/объекты
  const parsedEducation = JSON.parse(education || '[]');
  const parsedExperience = JSON.parse(experience || '[]');
  const parsedProcedures = JSON.parse(procedures || '[]');

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
          {parsedEducation.map((edu, index) => (
            <li key={index}>
              {edu.university}, {edu.specialty} ({edu.year}) — {edu.location}
            </li>
          ))}
        </ul>
      </div>

      <div className="doctor-section">
        <h3>Опыт работы</h3>
        <ul>
          {parsedExperience.map((exp, index) => (
            <li key={index}>
              {exp.clinic}, {exp.role} ({exp.years})
            </li>
          ))}
        </ul>
      </div>

      <div className="doctor-section">
        <h3>Проводимые процедуры</h3>
        <ul>
          {parsedProcedures.map((procedure, index) => (
            <li key={index}>{procedure}</li>
          ))}
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
