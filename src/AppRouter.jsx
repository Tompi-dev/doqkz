import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Searching from './components/Searching';
import ClinicsSlider from './components/ClinicsSlider';
import FeedbackBox from './components/FeedbackBox';
import Footer from './components/Footer';
import DoctorSheets from './components/DoctorsSheets/DoctorSheets';
import DoctorsInfo from './components/ClinicSheets/DoctorsInfo';
import DoctorProfileCard from './components/DoctorProfileCArd/DoctorProfileCard';
import ClinicWhiteHeader from './components/DoctorsSheets/ClinicWhiteHeader';
import ClinicHeader from './components/ClinicSheets/ClinicHeader';
import MapPage from './components/miniComponents/MapPage';

const AppRouter = () => (
  <Router>
    <main>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Searching />
              <ClinicsSlider />
              <FeedbackBox />
              <Footer />
            </>
          }
        />
        <Route path="/procedures" element={
          <>

            <DoctorSheets />
          </>
        } />
        < Route path="/Doctors/map" element={<MapPage />} />
        <Route
          path="/Doctors"
          element={<DoctorsInfo />}

        />

        <Route
          path="/Doctors/Card/:id"
          element={
            <>
              <ClinicHeader />
              <ClinicWhiteHeader />
              <DoctorProfileCard />
            </>
          }
        />
      </Routes>
    </main>
  </Router>
);

export default AppRouter;
