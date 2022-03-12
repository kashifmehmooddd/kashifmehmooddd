import React from "react";
import "./topbar.css";
import { Settings,LogoutRounded} from "@mui/icons-material";
import { authentication } from "../firebase/fbconfig";
import { signOut } from "firebase/auth";
export default function Topbar() {
  const Logout=()=>
  {
    signOut(authentication).then(()=>
    {
      console.log("user signed out")
      window.location="/signin"
    }) .catch(err => {
      console.log(err.message)
    })
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Specialite</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <LogoutRounded onClick={Logout}/>
          </div>
        </div>
      </div>
    </div>
  );
}