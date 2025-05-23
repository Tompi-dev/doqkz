import { useState, useEffect } from 'react'
import axios from 'axios'

import ClinicHeader from '../ClinicSheets/ClinicHeader'
import ClinicWhiteHeader from './ClinicWhiteHeader'
import ClinicsCardss from './ClinicsCardss'


const DoctorSheets = () => { 



  const [clinics, setClinics] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Clinics/get/clinics/')
      .then(response => {
        setClinics(response.data)
      })
      .catch(error => {
        console.error('Error fetching clinics:', error)
      })
  }, []) 



  const handleSortChange = (sortType) => {
    alert(sortType)
    setClinics([])
    axios.get('http://127.0.0.1:8000/Clinics/get/clinics/?type=' +sortType)
      .then(response => {
        setClinics(response.data)
      })
      .catch(error => {
        console.error('Error fetching clinics:', error)
      })

    
  }


  return (
    <div>
      <ClinicHeader />
      <ClinicWhiteHeader clinics={clinics} setClinics={setClinics} onSortChange={handleSortChange} />
      <ClinicsCardss clinics={clinics} />
    </div>
  )
}

export default DoctorSheets;