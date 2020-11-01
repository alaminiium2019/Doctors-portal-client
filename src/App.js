import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddDoctor from './Components/AddDoctor/AddDoctor';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/allpatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>

          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
      
  );
}

export default App;
