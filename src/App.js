import "./App.css";

import { BrowserRouter as Router,Route,Redirect, Switch, useRouteMatch } from 'react-router-dom';
import Topbar from './Topbar/topbar';
import Sidebar from './sidebar/sidebar';
import Home from './Pages/Home/Home';
import FormList from "./Pages/RegForms/RegformsList";
import UserList from './Pages/UserList/UserList';
import User from './Pages/user/User';
import Resturaunt from './Pages/Resturaunt/Resturaunt';
import OrderList from './Pages/OrderList/OrderList';
import NewResturaunt from './Pages/NewResturaunt/NewResturaunt';
import ResturauntList from './Pages/ResturauntList/ResturauntList';
import ViewForm from "./Pages/viewForm/viewForm";


import { useState } from "react";



function App() {
  let  {path} = useRouteMatch()

  return (
    
    <div className="main">
         <Topbar/>
        <div className="container">
          <Sidebar></Sidebar>
          
          <Switch>
            <Route  exact path="/userlist"> 
              <UserList/>
            </Route>
            <Route  exact path="/userlist/:userid"> 
              <User/>
            </Route>
            <Route exact path="/Resturaunts"> 
            <ResturauntList/>
            </Route>
            <Route exact path="/Resturaunts/:id"> 
              <Resturaunt/>
            </Route>
            <Route exact path="/newRest"> 
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
            <Route path='/Home'> 
              <Home/>
            </Route>
            <Route path='/'> 
              <Redirect to ={path= "/home"}/>
            </Route>
         </Switch>
         
          
        </div>
    </div>
   
  )
}

export default App;
