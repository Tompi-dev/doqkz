import React, { useEffect, useState } from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export default function PaginatedDoctorList() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [doctors, setDoctors] = useState([]);

  const pageSize = 5; // match your Django pagination size

  const fetchDoctors = async (currentPage) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/Doctors/get/doctors/?page=${currentPage}`
      );
      const data = await response.json();
      setDoctors(data.results);
      setCount(Math.ceil(data.count / pageSize)); // Total pages
    } catch (error) {
      console.error('Failed to fetch doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors(page);
  }, [page]);

  const { items } = usePagination({
    count,
    page,
    onChange: (event, value) => {
      setPage(value);
    },
  });

  return (
    <div>
      <h2>Doctors List (Page {page})</h2>

      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <strong>{doctor.full_name}</strong> — Experience: {doctor.experience_years} years
          </li>
        ))}
      </ul>

      <nav style={{ marginTop: '20px' }}>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? 'bold' : undefined,
                    backgroundColor: selected ? '#eee' : 'white',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    padding: '6px 10px',
                    margin: '0 4px',
                    cursor: 'pointer',
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              // next/prev buttons
              children = (
                <button
                  type="button"
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    padding: '6px 10px',
                    margin: '0 4px',
                    cursor: 'pointer',
                  }}
                  {...item}
                >
                  {type}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </div>
  );
}
