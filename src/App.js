import './App.css';
import React, {component} from 'react';
import {Route, Switch} from'react-router-dom'
import Dashboard from './Components/dashboard'
import ParentManage from './Components/parentManage'
import RM_Management from './Components/RM_Manage'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/dashboard.css';
import { useHistory } from "react-router-dom";


function App()   {
  let history = useHistory();
  history.push('/dashboard')

  return (
    <div>
  <nav className="navbar navbar-expand navbar-light navbarr" style={{backgroundColor:'lightblue'}}>
  <a className="navbar-brand" >
      <img src="https://saarthi-drag-drop-games.web.app/assets/logo.jpg" className="logoImg" alt="no"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <NavLink  to="dashboard" className="nav-item nav-link active" >Dashboard</NavLink>
    <NavLink to="parentManagement" className="nav-item nav-link " >Parent Management</NavLink>
    <NavLink to="RM_Management" className="nav-item nav-link " >RM Management</NavLink>

  
    </div>
  </div>
</nav>

<Switch>
      <Route path="/dashboard" component={Dashboard}/>
         <Route path="/parentManagement" component={ParentManage}/>
         <Route path="/RM_Management" component={RM_Management}/>
      </Switch>

</div>

     
      
  );

  
  
}

export default App;
