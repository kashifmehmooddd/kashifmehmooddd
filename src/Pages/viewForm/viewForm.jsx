
import "./viewForm.css"
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
  } from "@mui/icons-material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useState} from 'react'
import { getDoc,doc, } from "firebase/firestore";
import { db } from "../../firebase/fbconfig";


export default function ViewForm() {
    const {restid}=useParams();
    const [data,setData]=useState([]);
        const [name,setName]=useState('');
       const [category,setCategory]=useState('');
       const [description,setDesription]=useState('');
       const [address,setAddress]=useState('');
       const [phonenumber,setPhonenumber]=useState('');

      
       

  return (
    <div className="resturaunt">
    <div className="userTitleContainer">
      <h1 className="userTitle">Form Registration</h1>
      
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
            <span className="userShowInfoTitle">{data.location}</span>
          </div>
          <div className="userShowInfo">
            <EmailSharp className="userShowIcon" />
            <span className="userShowInfoTitle">{data.Email}</span>
          </div>
          <span className="userShowTitle">Resturaunt Description</span>
          <div className="userShowInfo">
            <Description className="userShowIcon" />
            <span className="userShowInfoTitle">{data.description}</span>
          </div>
        </div>
      </div>
      
    </div>
</div>
  )
}
