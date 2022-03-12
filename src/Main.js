import "./Main.css"
import Topbar from './Topbar/topbar';
import Sidebar from './sidebar/sidebar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import FormList from "./Pages/RegForms/RegformsList";
import UserList from './Pages/UserList/UserList';
import User from './Pages/user/User';
import Resturaunt from './Pages/Resturaunt/Resturaunt';
import OrderList from './Pages/OrderList/OrderList';
import NewResturaunt from './Pages/NewResturaunt/NewResturaunt';
import ResturauntList from './Pages/ResturauntList/ResturauntList';
import ViewForm from "./Pages/viewForm/viewForm";


export default function Main() {
  return (
      
    <Router>
    <div className="main">
         <Topbar/>
        <div className="container">
          <Sidebar></Sidebar>
          <Switch>
            <Route exact path="/Home"> 
              <Home/>
            </Route>
            <Route  exact path="/userlist"> 
              <UserList/>
            </Route>
            <Route  path="/userlist/:userid"> 
              <User/>
            </Route>
            <Route  exact path="/Resturaunts"> 
            <ResturauntList/>
            </Route>
            <Route exact path="/Resturaunts/:restid"> 
              <Resturaunt/>
            </Route>
            <Route  path="/newRest"> 
              <NewResturaunt/>
            </Route>
            
            <Route  exact path="/Orders"> 
            <OrderList/>
            </Route>
            <Route  exact path="/Forms"> 
            <FormList/>
            </Route>
            <Route exact path="/Forms/:formsid"> 
              <ViewForm/>
            </Route>
           
         </Switch>
        </div>
    </div>
    </Router>
  )
}
