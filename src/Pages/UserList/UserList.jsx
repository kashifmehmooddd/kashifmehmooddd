import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { customersRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";



  

export default function UserList() {

      const [customers,setCustomers]=useState(customersRows);
  const handleDelete=(id)=>
  {
    console.log(id);
    setCustomers(customers.filter((item) => item.id !== id));
    
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'Contact', headerName: 'Contact', width: 130 },
    {
      field: 'Age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'Buying',
      headerName: 'Buying',
      width: 90,
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 220,
    },
    {
      field:'Action',
      headerName: 'Action',
      width:150,
      renderCell: (params)=>
      {
        return(
          <>
          <Link to={`/userlist/${params.row.id}`} >
          <button className="actionedit">Edit</button>
          </Link>
          <DeleteIcon className="actiondelete" onClick={()=>handleDelete(params.row.id)}/>

          </>
        )
      }
    }
   
  ];
  return (
    <div className="userList">
      <h1>Customers Data</h1>
      
         <div style={{ height: 400, width: '100%',alignSelf:'center' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}
