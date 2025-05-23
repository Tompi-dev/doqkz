import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
const [searchParams] = useSearchParams();

useEffect(() => {
  const lat = parseFloat(searchParams.get('lat'));
  const lng = parseFloat(searchParams.get('lng'));

  const defaultCenter = [51.1605, 71.4704]; // Astana default
  const center = lat && lng ? [lat, lng] : defaultCenter;

  const map = L.map('map').setView(center, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // ✅ If specific coordinates passed (doctor's location), show just one marker
  if (lat && lng) {
    L.marker([lat, lng]).addTo(map).bindPopup('Доктор находится здесь').openPopup();
  } else {
    // ✅ Otherwise show all clinics
    const clinics = [
      {
        name: 'Клиника Нур',
        coords: [51.1605, 71.4704],
        popup: 'Клиника Нур — Главная улица, 10',
      },
      {
        name: 'Здоровье Плюс',
        coords: [51.1625, 71.4720],
        popup: 'Здоровье Плюс — проспект Республики, 24',
      },
      {
        name: 'Доктор+',
        coords: [51.1580, 71.4680],
        popup: 'Доктор+ — улица Бейбитшилик, 5',
      },
      {
        name: 'Медикал Центр',
        coords: [51.1640, 71.4755],
        popup: 'Медикал Центр — Назарбаева, 12',
      },
    ];

    clinics.forEach(clinic => {
      L.marker(clinic.coords).addTo(map).bindPopup(clinic.popup);
    });
  }
}, [searchParams]);



  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Карта клиник рядом</h2>
      <div id="map" style={{ height: '80vh', width: '100%' }}></div>
    </div>
  );
};

export default MapPage;
