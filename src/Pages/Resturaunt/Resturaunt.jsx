import "./Resturaunt.css"
import {
    CategoryRounded,
    LocationCityRounded,
    Shop2Outlined,
    StorefrontOutlined,
    PhoneAndroid,
    Publish,
  } from "@mui/icons-material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useState} from 'react'


export default function Resturaunt() {
    const {restid}=useParams();
    const [data,setData]=useState([]);
        const [name,setName]=useState('');
       const [category,setCategory]=useState('');
       const [description,setDesription]=useState('');
       const [address,setAddress]=useState('');
       const [phonenumber,setPhonenumber]=useState('');

    const updaterest=(e)=>
    {
      e.preventDefault();
     
      

    }

   



  return (
    <div className="resturaunt">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Resturaunt</h1>
          
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop" >
              <img
                src={data.profile_picture}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{data.name}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <StorefrontOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{data.name}</span>
              </div>
              <div className="userShowInfo">
                <CategoryRounded className="userShowIcon" />
                <span className="userShowInfoTitle">{data.category}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{data.phonenumber}</span>
              </div>
              <div className="userShowInfo">
                <LocationCityRounded className="userShowIcon" />
                <span className="userShowInfoTitle">{data.address}</span>
              </div>
              <span className="userShowTitle">Resturaunt Sales</span>
              <div className="userShowInfo">
                <Shop2Outlined className="userShowIcon" />
                <span className="userShowInfoTitle">{data.description}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder={data.name}
                    className="userUpdateInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Category</label>
                  <input
                    type="text"
                    placeholder={data.category}
                    className="userUpdateInput"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={data.address}
                    className="userUpdateInput"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={data.phonenumber}
                    className="userUpdateInput"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Description</label>
                  <textarea type="text"
                    placeholder={data.description}
                    className="userUpdateInput" id="" cols="30" rows="10" value={description}
                    onChange={(e) => setDesription(e.target.value)}></textarea>
                   
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
                <button className="userUpdateButton" onClick={updaterest}>Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
