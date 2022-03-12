import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  const users=[{'id':1,'name':'Kashif Mehmood','Orders':'202'},
  {'id':2,'name':'Kashif Mehmood','Orders':'202'},
  {'id':3,'name':'Kashif Mehmood','Orders':'202'},
  {'id':4,'name':'Kashif Mehmood','Orders':'202'},
  {'id':5,'name':'Kashif Mehmood','Orders':'202'},
  {'id':6,'name':'Kashif Mehmood','Orders':'202'}];
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Customers</span>
      <ul className="widgetSmList">
        {users.map(user=>(
        <li className="widgetSmListItem" key={user.id}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.name}</span>
            <span className="widgetSmUserTitle">{user.Orders+' Orders'}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>))}
       
      </ul>
    </div>
  );
}