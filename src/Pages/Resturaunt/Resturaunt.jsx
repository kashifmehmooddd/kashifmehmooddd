import "./Resturaunt.css"
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
import {useState,useEffect} from 'react';
import { db } from "../../firebase/fbconfig";
import { getDoc,collection,getDocs,doc,setDoc } from "firebase/firestore";

export default function Resturaunt() {
       const {id}=useParams();
       console.log(id);
       const [data,setData]=useState([]);
       const [dishes,setDishes]=useState([]);
       const [images,setImages]=useState([]);

       //new data
        const [name, setName] = useState();
        const [address, setAddress] = useState();
        const [zipcode, setZip] = useState();
        const [state, setState] = useState();
        const [personname, setPname] = useState();
        const [personphone, setPphone] = useState();
        const [Restemail, setRemail] = useState();
        const [restphone, setrestphone] = useState();
        const [seats, setSeats] = useState();
        const [starttime, setstarttime] = useState();
        const [endtime, setendtime] = useState();
        const [cardnum, setCardnum] = useState();

    const updaterest=(e)=>
    {
      e.preventDefault();
     
      setDoc(doc(db,"Resturaunts",id),
      {
    
        name: name,
        address: address,
        zipcode: data.zipcode,
        state: data.state,
        person: personname,
        pContact: personphone,
        restMail: Restemail,
        restContact: restphone,
        seats:seats,
        start:starttime ,  
        end:endtime,
        bank: cardnum
    
       }).then(()=>
       {
         alert("Updated Resturaunt!")
       }).catch((err)=>
       {
         console.log(err.message);
       })

    }
  
    useEffect(()=>{
      getDoc(doc(db,"Resturaunts",id)).then(docsnap=>
        {
          console.log(docsnap.data());
          setData({...docsnap.data(),id:doc.id});
        }).finally(()=>
        {
          getDocs(collection(db,"Resturaunts",id,"dishes")).then((snapshot)=>
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
            getDocs(collection(db,"Resturaunts",id,"Images")).then((snapshot)=>
            { let tempimages=[];
              snapshot.docs.forEach((doc)=>
              {
                tempimages.push({...doc.data(),id:doc.id});
               
              })
              setImages(tempimages);
              
            }).catch((error)=>
            {
              console.log(error);
            });
          });
        });
    

      },[]);
   
      console.log(dishes,images,data);


     
     
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





  return (
    <div className="resturaunt">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Resturaunt</h1>    
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
            <span className="userShowInfoTitle">{data.pContact}</span>
          </div>
          <span className="userShowTitle">Resturaunt Bank Account</span>
          <div className="userShowInfo">
            <AccountBalance className="userShowIcon" />
            <span className="userShowInfoTitle">{data.bank}</span>
          </div>
        </div>
      </div>



          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" onSubmit={updaterest}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder={data.name}
                    className="userUpdateInput"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Start time</label>
                  <input
                    type="time"
                    required
                    placeholder={data.start}
                    className="userUpdateInput"
                    value={starttime}
                    onChange={(e) => setstarttime(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>End time</label>
                  <input
                    type="time"
                    placeholder={data.end}
                    required
                    className="userUpdateInput"
                    value={endtime}
                    onChange={(e) => setendtime(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={data.address}
                    className="userUpdateInput"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Resturaunt Capacity</label>
                  <input
                    type="number"
                    placeholder={data.seats}
                    className="userUpdateInput"
                    required
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Resturaunt Phone</label>
                  <input
                    type="number"
                    placeholder={data.restContact}
                    className="userUpdateInput"
                    value={restphone}
                    onChange={(e) => setrestphone(e.target.value)}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Resturaunt Mail</label>
                  <input
                    type="text"
                    placeholder={data.restMail}
                    className="userUpdateInput"
                    value={Restemail}
                    required
                    onChange={(e) => setRemail(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Owner's Name</label>
                  <input
                    type="text"
                    placeholder={data.person}
                    className="userUpdateInput"
                    value={personname}
                    required
                    onChange={(e) => setPname(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Owner's Phone</label>
                  <input
                    type="number"
                    placeholder={data.pContact}
                    className="userUpdateInput"
                    value={personphone}
                    onChange={(e) => setPphone(e.target.value)}
                    required
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Bank Account</label>
                  <input type="text"
                    placeholder={data.bank}
                    className="userUpdateInput" id="" cols="30" rows="10" value={cardnum}
                    required
                    onChange={(e) => setCardnum(e.target.value)}/>  
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={data.profile_picture}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton" type="submit">Update</button>
              </div>
            </form>
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
