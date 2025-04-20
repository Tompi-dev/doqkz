import ClinicHeader from '../ClinicSheets/ClinicHeader'
import ClinicWhiteHeader from './ClinicWhiteHeader'
import ClinicsCardss from './ClinicsCardss'
import clinicData from '../data/clinics_255.json'
import { useState } from 'react'

export const DoctorSheets = () => {

  const [clinics, setClinics] =useState(clinicData);





  return (
    <div>
        <ClinicHeader />
        <ClinicWhiteHeader  clinics={clinics}  setClinics={setClinics} />
        <ClinicsCardss clinics={clinics} />

        

    </div>
  )
}
