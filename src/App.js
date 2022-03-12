import "./App.css";
import Main from "./Main";
import SignIn from "./Pages/Signin/signin"
import SignUp from "./Pages/SignUp/SignUp"
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ResturauntList from './Pages/ResturauntList/ResturauntList';

import { useState } from "react";



function App() {
  const [auth,setAuth]=useState(); 



  return (
    <Router>
      <div className="app">
       <Switch>
         <Route exact path="/">
           <SignUp />
         </Route>
         <Route  path="/Signin">
           <SignIn />
         </Route>
         <Route  path="/Home">
          <Main/>
         </Route>
       </Switch>
      </div>
      </Router>
  );
}

export default App;
