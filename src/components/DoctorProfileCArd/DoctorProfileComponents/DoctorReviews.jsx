import React from "react";

export default function DoctorReviews({reviews, score}) {
  return (
    <div className="doctor-reviews">
      <div className="doctor-reviews-main"><h1>Reviews</h1>
      <span>Write review</span></div>
      
      <select>
        <option disabled selected>Выберите специализацию</option>
        <option selected>Акушер-гинеколог</option>
        <option>Терапевт</option>
        <option>Кардиолог</option>
      </select>
      <p className="rating">{score}/ 10.0</p>
      <p className="review-count">на основе {reviews} отзывов (4 общих)</p>
    </div>
  );
}

