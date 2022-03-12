import "./FeaturedRevInfo.css"

export default function FeaturedRevInfo() {
  return (
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Revenue</span>
      <div className="featuredMoneyContainer">
          
      <span className="featuredMoney"><span className="featuredIcon"></span> $2,415</span>
      
    
      </div>
      <span className="featuredSub">Till the Project Launched</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Revenue</span>
      <div className="featuredMoneyContainer">
          
      <span className="featuredMoney"><span className="featuredIcon"></span> $2,415</span>
      
    
      </div>
      <span className="featuredSub">From the Last Month</span>
    </div>

    <div className="featuredItem">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
          
      <span className="featuredMoney"><span className="featuredIcon"></span>$2,415</span>
      </div>
      <span className="featuredSub">From the Last Month</span>
    </div>
    </div>
  )
}
