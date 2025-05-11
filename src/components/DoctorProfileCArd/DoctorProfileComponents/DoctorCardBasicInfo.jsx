import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../feautures/counter/counterSlice.js'


export default function DoctorCardBasicInfo({doctor}) {
  const count = useSelector((state) => state.counter2.value);
  const userId= useSelector((state) => state.counter2.userId)
  const dispatch = useDispatch();
  return (
    <div className="doctor-header">
     
      <img className="doctor-photo" src={doctor.photo} alt={doctor.full_name}  />
      <div>
      
      <h2>{doctor.full_name}</h2>
      <p><strong>Специальность:</strong> {doctor.specialization}</p>
      <p><strong>Опыт:</strong> {doctor.experience_years} лет</p>
      <p>{doctor.description}</p>
      <h2>Count: {count}</h2>
      <h2>{userId} UserId</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  )};



// // DoctorCardBasicInfo.jsx
// export function DoctorCardBasicInfo({ doctor }) {
//   return (
//     <div className="doctor-basic-info">
//       <img src={doctor.photo} alt={doctor.full_name} className="doctor-photo" />
//       <h2>{doctor.full_name}</h2>
//       <p><strong>Специальность:</strong> {doctor.specialization}</p>
//       <p><strong>Опыт:</strong> {doctor.experience_years} лет</p>
//       <p>{doctor.description}</p>
//     </div>
//   );
// }