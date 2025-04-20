import ClinicHeader from "./ClinicHeader"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhiteHeader from "./WhiteHeader";
import DoctorList from '../DoctorList'
import { useState } from "react";
import DoctorInfo from '../data/akushers.json'

export const ClinicList = () => {

    const [clinics, setClinics] =useState(DoctorInfo);

    return (
        <div>
          
                <ClinicHeader />
                <WhiteHeader  clinics={clinics}  setClinics={setClinics}/>
                {/* <Routes>
                    <Route path="/Clinics" element={

                        <>
                            <WhiteHeader />
                        </>
                    }

                    />
                </Routes> */}

                <DoctorList classname='Cards' clinics={clinics} />
      



        </div>
    )
}
