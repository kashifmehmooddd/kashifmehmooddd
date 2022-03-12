import "./Home.css"

import FeaturedUserInfo from "../../Components/FeaturedUserInfo/FeaturedUserInfo"
import FeaturedRevInfo from "../../Components/FeaturedRevInfo/FeaturedRevInfo"
import WidgetSm from "../../Components/widgetSm/WidgetSm"
import WidgetLg from "../../Components/widgetLg/WidgetLg"

export default function Home() {
  return (
    <div className="home">  
       <FeaturedUserInfo/>
       
       <FeaturedRevInfo />
       <div className="homeWidget">
        
         <WidgetSm/>
         <WidgetLg/>
        
       </div>
       
    </div>
  )
}
