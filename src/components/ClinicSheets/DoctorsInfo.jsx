import React, { useEffect, useState } from 'react';
import ClinicHeader from "./ClinicHeader";
import WhiteHeader from "./WhiteHeader";
import DoctorList from '../DoctorList';
import usePagination from '@mui/material/usePagination';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  color: 'black',
 
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '20px'
});

const DoctorsInfo = () => {
  const [clinics, setClinics] = useState([]);
  const [count, setCount] = useState(0);        // total count from backend
  const [page, setPage] = useState(1);          // 1-based for backend
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortType, setSortType] = useState("rating");
  const [hasError, setHasError] = useState(false);

  const fetchDoctors = async (page, pageSize, sort) => {
    try {
      const response = await axios.get(
  `http://127.0.0.1:8000/Doctors/get/doctors/?page=${page}&sort=${sort}&page_size=${pageSize}`
);

      const data = response.data;

      if (!Array.isArray(data.results)) {
        console.warn("Unexpected data format:", data);
        setHasError(true);
        return;
      }

      setClinics(data.results);
      setCount(data.count);
      setHasError(false);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchDoctors(page, rowsPerPage, sortType);
  }, [page, rowsPerPage, sortType]);

  const handleSortChange = (sort) => {
    setSortType(sort);
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1); 
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const totalPages = Math.ceil(count / rowsPerPage);

  const { items } = usePagination({
    count: totalPages,
    page,
    onChange: (event, newPage) => {
      setPage(newPage);
    },
  });

  return (
    <div>
      <ClinicHeader />
      {hasError && <div style={{ color: 'red', padding: '10px' }}>Failed to load doctors.</div>}

      <WhiteHeader clinics={clinics} setClinics={setClinics} onSortChange={handleSortChange} />

      <DoctorList classname='Cards' clinics={clinics} />

      {/* UsePagination Buttons */}
      <nav>
        <List>
          {items.map(({ page: btnPage, type, selected, ...item }, index) => {
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
                    padding: '6px 12px',
                    margin: '0 4px',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                  {...item}
                >
                  {btnPage}
                </button>
              );
            } else {
              children = (
                <button
                  type="button"
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    padding: '6px 12px',
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

      {/* TablePagination Dropdown */}
      <TablePagination
        component="div"
        count={count}
        page={page - 1} // Convert to 0-based for component
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        labelRowsPerPage="Doctors per page"
      />
    </div>
  );
};

export default DoctorsInfo;
