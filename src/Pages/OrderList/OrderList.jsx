import "./OrderList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { OrdersRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function OrderList() {

    const [Orders,setOrders]=useState(OrdersRows);
  const handleDelete=(id)=>
  {
    console.log(id);
    setOrders(Orders.filter((item) => item.id !== id));
    
  };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'custName', headerName: 'Customer', width: 130 },
        { field: 'restName', headerName: 'Resturaunt', width: 130 },
        {
          field: 'timestamp',
          headerName: 'Time',
          width: 100,
        },
        {
          field: 'Date',
          headerName: 'Date',
          width: 100,
        },
        {
          field: 'CustAdress',
          headerName: 'Customer Adress',
          width: 250,
        },
        {
          field: 'Price',
          headerName: 'Price',
          width: 120,
        },
        {
          field: 'Status',
          headerName: 'Status',
          width: 120,
          renderCell: (params)=>
          {
            return(
              <>
             <button className={"statusbutt "+ params.row.Status } >{params.row.Status}</button>
    
              </>
            )
          }

        },
        
        {
          field:'Action',
          headerName: 'Action',
          width:150,
          renderCell: (params)=>
          {
            return(
              <>
              <Link >
              <button className="actionedit">Edit</button>
              </Link>
              <DeleteIcon className="actiondelete" onClick={()=>handleDelete(params.row.id)}/>
    
              </>
            )
          }
        }
       
      ];

  return (
    <div className="orderlist">
        <h1>Orders Data</h1>
      
      <div style={{ height: 400, width: '100%',alignSelf:'center' }}>
   <DataGrid
     rows={Orders}
     columns={columns}
     pageSize={8}
     disableSelectionOnClick
     rowsPerPageOptions={[10]}
     checkboxSelection
   />
 </div>   
    </div>
  )
}
