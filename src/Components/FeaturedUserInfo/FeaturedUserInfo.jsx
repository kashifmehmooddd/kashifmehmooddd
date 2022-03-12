import {PermIdentity,Storefront,GradeSharp} from "@mui/icons-material"
import "./FeaturedUserInfo.css"
export default function FeaturedUsersInfo() {
  return (
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Total Customers</span>
      <div className="featuredMoneyContainer">
          
      <span className="featuredMoney"><span className="featuredIcon"><PermIdentity/></span> 2,415</span>
      
    
      </div>
      <span className="featuredSub">Till the Project Launched</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Total Partners</span>
      <div className="featuredMoneyContainer">
          
      <span className="featuredMoney"><span className="featuredIcon"><Storefront/></span> 2,415</span>
      
    
      </div>
      <span className="featuredSub">Till the Project Launched</span>
    </div>

    <div className="featuredItem">
      <span className="featuredTitle">Total Orders</span>
      <div className="featuredMoneyContainer">
          
      <span className="featuredMoney"><span className="featuredIcon"><GradeSharp/></span> 2,415</span>
      </div>
      <span className="featuredSub">Till the Project Launched</span>
    </div>
    </div>
    
  )
}
