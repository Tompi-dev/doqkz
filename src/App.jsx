import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClinicsSlider from './components/ClinicsSlider';
import FeedbackBox from './components/FeedbackBox';
import Footer from './components/Footer';
import './index.css';
import Searching from './components/Searching';
import DoctorList from './components/DoctorList';
import { DoctorsInfo } from './components/ClinicSheets/DoctorsInfo';
import { DoctorSheets } from './components/DoctorsSheets/DoctorSheets';
import DoctorProfileCard from './components/DoctorProfileCArd/DoctorProfileCard';
import ClinicWhiteHeader from './components/DoctorsSheets/ClinicWhiteHeader';
import ClinicHeader from './components/ClinicSheets/ClinicHeader';
const App = () => (
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

        <Route path='/Doctors' element={
          <>
            <DoctorsInfo />

          </>}



        />
        <Route path="/Doctors/Card/:id" element={
          <>
           <ClinicHeader />
            <ClinicWhiteHeader />
            <DoctorProfileCard />
          </>
        } />



      </Routes>
    </main>
  </Router>
);

export default App;
