import "./viewForm.css"
import { DataGrid } from '@mui/x-data-grid';

import {
    CategoryRounded,
    LocationCityRounded,
    Shop2Outlined,
    StorefrontOutlined,
    DescriptionRounded,
    PhoneAndroid,
    EmailSharp,
    Publish,
    Description,
    AccessTime,
    ReduceCapacity,
    Person,
    AccountBalance,
    PostAdd
  } from "@mui/icons-material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useEffect, useState} from 'react'
import { getDoc,doc,getDocs,collection,setDoc,addDoc,deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/fbconfig";


export default function ViewForm()
{
  const [restid,setRestid]=useState(1);
  const {formsid}=useParams();
  console.log(formsid)
  const [data,setData]=useState([]);
  const [dishes,setDishes]=useState([]);
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(false);


useEffect(()=>{
getDoc(doc(db,"Forms",formsid)).then(docsnap=>
  {
    console.log(docsnap.data());
    setData({...docsnap.data(),id:doc.id});
  }).finally(()=>
  {
    getDocs(collection(db,"Forms",formsid,"dishes")).then((snapshot)=>
    { let tempdishes=[];
      snapshot.docs.forEach((doc)=>
      {
        tempdishes.push({...doc.data(),id:doc.id});
      })
      setDishes(tempdishes);
      
    }).catch((error)=>
    {
      console.log(error);
    }).finally(()=>
    {
      getDocs(collection(db,"Forms",formsid,"Images")).then((snapshot)=>
      { let tempimages=[];
        snapshot.docs.forEach((doc)=>
        {
          tempimages.push({...doc.data(),id:doc.id});
          setIsLoading(true);
        })
        setImages(tempimages);
        
      }).catch((error)=>
      {
        console.log(error);
      });
    });
  });

  

 
},[]);

const Postdata=(e)=>
{
  
 
  setDoc(doc(db,"Resturaunts",formsid),
  {

    name: data.name,
    address: data.address,
    zipcode: data.zipcode,
    state: data.state,
    person: data.person,
    pContact: data.pContact,
    restMail: data.restMail,
    restContact: data.restContact,
    seats: data.seats,
    start:data.start ,  
    end:data.end,
    takeaway:data.takeaway,
    bank: data.bank

   }).then(()=>
   {
     console.log("Successfully added!");
     images.map(images=>
      {
        setDoc(doc(db,"Resturaunts",formsid,"Images",images.id),
        {
          imageUrl: images.imageUrl,
      
        }).then(()=>
        {
          console.log("successfully added!");
        }).catch(err=>
          {
            console.log(err.message);
          }).finally(()=>
          {
             
          });
      })
    
      dishes.map(dish=>
        {
          addDoc(collection(db,"Resturaunts",formsid,"dishes"),{
     
            name:dish.name,
            category:dish.category,
            averageprice:dish.averageprice,
            description:dish.description,
            imageUrl:dish.imageUrl,
        
           }).then(()=>
           {
             console.log("added!");
           }).catch((error)=>
           {
             console.log(error.message);
           })
        })

     
   }).catch((error)=>
   {
     console.log(error.message);
   }).finally(()=>
   {
     
    
    alert("Resturaunt Approved!");

    deleteDoc(doc(db,'Forms',formsid)).then(()=>
    {
      console.log("added!");
    }).catch((error)=>
    {
      console.log(error.message);
    }).finally(()=>
    {
      window.location.href = "/Forms"
      images.map(image=>
        {
          deleteDoc(doc(db,'Forms',formsid,"Images",image.id)).then(()=>
          {
            console.log("added!");
          }).catch((error)=>
          {
            console.log(error.message);
          })
        })

        dishes.map(dish=>
          {
            deleteDoc(doc(db,'Forms',formsid,"dishes",dish.id)).then(()=>
          {
            console.log("added!");
          }).catch((error)=>
          {
            console.log(error.message);
          })
          })
    })

   })
 



  

}

const columns = [
        
      
  { field: 'id', headerName: 'ID', width: 130 },
  {
    field: 'name',
    headerName: 'name',
    width: 120,
  },
  {
    field:'averageprice',
    headerName: 'Basic Price',
    width:150,
   
  },
 
  {
    field: 'category',
    headerName: 'Category',
    width: 120,
  },
  {
    field: 'description',
    headerName: 'Contact',
    width: 250,
  }
  

 
];

 console.log(data,images,dishes)

       
 return (
  <div className="resturaunt">
 
 <div className="userTitleContainer">
      <h1 className="userTitle">Form Registration</h1>
      
    </div>
    <div className="userContainer">
      <div className="userShow">
      {images &&
        <div className="userShowTop" >
          
          <img
            alt=""
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">{data.name}</span>
          </div>
        </div>
        }
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <StorefrontOutlined className="userShowIcon" />
            <span className="userShowInfoTitle">{data.name}</span>
          </div>
          <div className="userShowInfo">
            <AccessTime className="userShowIcon" />
            <span className="userShowInfoTitle">{data.start+" -- "+data.end}</span>
          </div>
          <div className="userShowInfo">
            <ReduceCapacity className="userShowIcon" />
            <span className="userShowInfoTitle">{data.seats}</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{data.restContact}</span>
          </div>
          <div className="userShowInfo">
            <LocationCityRounded className="userShowIcon" />
            <span className="userShowInfoTitle">{data.address}</span>
          </div>
          <div className="userShowInfo">
            <EmailSharp className="userShowIcon" />
            <span className="userShowInfoTitle">{data.restMail}</span>
          </div>

          <span className="userShowTitle">Owner's Details</span>
          <div className="userShowInfo">
            <Person className="userShowIcon" />
            <span className="userShowInfoTitle">{data.person}</span>
          </div>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{data.restContact}</span>
          </div>
          <span className="userShowTitle">Resturaunt Bank Account</span>
          <div className="userShowInfo">
            <AccountBalance className="userShowIcon" />
            <span className="userShowInfoTitle">{data.bank}</span>
          </div>
        </div>
        <button className="userUpdateButton" onClick={Postdata}>Approve</button>
      </div>
      
    </div>

  <h1>Resturaunt Dishes</h1>
      
      <div style={{ height: 400, width: '100%',alignSelf:'center' }}>
   <DataGrid
     rows={dishes}
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