import "./ResturauntList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useState } from "react";
import { restref } from "../../firebase/fbconfig";
import { getDocs } from "firebase/firestore";
import { deleteRest } from "../../firebase/fbconfig";



export default function ResturauntList() {
    const [resturaunts,setresturaunts]=useState([]);
    const handleDelete=(id)=>
    {
      deleteRest(id);
      
    };
      
    let rest=[]
     
    


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
   

   
   
      

 
    const columns = [
        
      
        { field: 'id', headerName: 'ID', width: 130 },
        {
          field: 'name',
          headerName: 'name',
          width: 120,
        },
        {
          field:'phonenumber',
          headerName: 'phonenumber',
          width:150,
         
        },
        { field: 'category', headerName: 'Category', width: 130 },

        { field: 'location', headerName: 'address', width: 130 },
        
        {
          field: 'description',
          headerName: 'Description',
          width: 120,
        },
        {
          field: 'image',
          headerName: 'image',
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
              <Link to={`/Resturaunts/${params.row.id}`} >
              <button className="actionedit">Edit</button>
              </Link>
              <DeleteIcon className="actiondelete" onClick={()=>handleDelete(params.row.id)}/>
    
              </>
            )
          },

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
