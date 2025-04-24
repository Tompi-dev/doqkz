import React, { useState } from 'react';
import axios from 'axios';

const ClinicForm = ({ onClinicAdded }) => {
  const [formData, setFormData] = useState({
    name: '111',
    logo: '555',
    description: '666'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/Clinics/create/clinics/', {
        name: formData.name,
        logo: formData.logo,
        description: formData.description,
      });
  
     console.log(onClinicAdded)
     
    } catch (error) {
      console.error('Error submitting clinic:', error);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Название клиники"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        step="0.1"
        placeholder="Рейтинг"
        value={formData.logo}
        onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
        required
      />

<input
        type="number"
        step="0.1"
        placeholder="Рейтинг"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <button onClick={handleSubmit} type="submit">Добавить клинику</button>
    </div>
  );
};




export default ClinicForm;

