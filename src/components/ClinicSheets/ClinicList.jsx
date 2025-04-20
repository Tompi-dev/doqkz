import ClinicHeader from "./ClinicHeader"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhiteHeader from "./WhiteHeader";
import DoctorList from '../DoctorList'
export const ClinicList = () => {
    return (
        <div>
          
                <ClinicHeader />
                <WhiteHeader/>
                {/* <Routes>
                    <Route path="/Clinics" element={

                        <>
                            <WhiteHeader />
                        </>
                    }

                    />
                </Routes> */}

                <DoctorList classname='Cards' />
      



        </div>
    )
}
