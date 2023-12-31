import React from 'react';
import "./Salaries.css";
import Navbar from './Navbar';
import { DataGrid } from '@mui/x-data-grid';

function Salaries() {


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'salary', headerName: 'Paid/Not Paid', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,salary:"Paid" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,salary:"Paid" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,salary:"Not Paid" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,salary:"Paid"},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 67 ,salary:"Paid"},
  { id: 6, lastName: 'Melisandre', firstName: 'Akab', age: 50,salary:"Paid" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,salary:"Not Paid"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,salary:"Paid"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,salary:"Paid" }
];

  return (

    <div className='salaries'>
        <Navbar/>
        <div style={{ height: "100vh", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default Salaries