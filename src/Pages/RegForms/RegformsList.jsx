import "./RegformsList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { OrdersRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { formRef } from "../../firebase/fbconfig";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/fbconfig";

export default function FormList() {

    const [forms,setForms]=useState([]);
    const [restimgs,setrestimgs]=useState([]);
    const [dishes,setdishes]=useState([]);
  const handleDelete=(id)=>
  {
    console.log(id);
    setForms(forms.filter((item) => item.id !== id));
    
  };

  
  


  useEffect(()=>
  {
    getDocs(formRef).then((snapshot)=>
  { 
    let tempform=[];
    snapshot.docs.forEach((doc)=>
    {
      tempform.push({...doc.data(),id:doc.id});
    })
    setForms(tempform)
    
  }).catch((error)=>
  {
    console.log(error);
  });

   
  getDocs(collection(db,"Forms","11","dishes")).then((snapshot)=>
  { let tempform=[];
    snapshot.docs.forEach((doc)=>
    {
      tempform.push({...doc.data(),id:doc.id});
    })
    setdishes(tempform)
    
  }).catch((error)=>
  {
    console.log(error);
  });

   


  },[])
     
 

  const columns = [
        
      
    { field: 'id', headerName: 'ID', width: 130 },
    {
      field: 'name',
      headerName: 'name',
      width: 120,
    },
    {
      field:'address',
      headerName: 'Address',
      width:150,
     
    },
   
    {
      field: 'restMail',
      headerName: 'Email',
      width: 120,
    },
    {
      field: 'restContact',
      headerName: 'Contact',
      width: 250,
    },
    {
      field:'Action',
      headerName: 'Action',
      width:150,
      renderCell: (params)=>
      {
        return(
          <>
          <Link  to={`/Forms/${params.row.id}`}>
          <button className="actionedit">View</button>
          </Link>
         

          </>
        )
      },

    }
    
  
   
  ];

  return (
    <div className="orderlist">
        <h1>Registration forms</h1>
      
      <div style={{ height: 400, width: '100%',alignSelf:'center' }}>
   <DataGrid
     rows={forms}
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

