import "./ResturauntList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { restref } from "../../firebase/fbconfig";
import { deleteRest } from "../../firebase/fbconfig";
import { useParam } from "react-router-dom/cjs/react-router-dom.min";
import { getDoc,doc,getDocs,collection,setDoc,addDoc,deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/fbconfig";


export default function ResturauntList() {
    const [resturaunts,setresturaunts]=useState([]);
    const handleDelete=(id)=>
    {
      deleteRest(id);
      
    };
      
    let rest=[]
     
    


    
   
    useEffect(()=>
    {
      getDocs(restref).then((snapshot)=>
      {
        snapshot.docs.forEach((doc)=>
        {
          rest.push({...doc.data(),id:doc.id});
        })
        setresturaunts(rest);
      }).catch((error)=>
      {
        console.log(error);
      })
      
    });
  
   
   
      

 
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
            <Link to={`Resturaunts/${params.row.id}`}>
            <button className="actionedit">Edit</button>
            </Link>
            <DeleteIcon className="actiondelete" onClick={()=>handleDelete(params.row.id)}/>
  
            </>
          )
        }
      }

    ];
  return (
<div className="resturauntList">
<div className="userTitleContainer">
        <h1 className="userTitle">Resturaunts Data</h1>
        <Link to="/newRest">
          <button className="buttondes">Add New</button>
        </Link>
      </div>    
      <div style={{ height: 400, width: '100%',alignSelf:'center' }}>
   <DataGrid
     rows={resturaunts}
     columns={columns}
     pageSize={6}
     disableSelectionOnClick
     rowsPerPageOptions={[5]}
     checkboxSelection
   />
 </div>   
</div>
  )
}
