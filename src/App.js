import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Addtrip from './components/Addtrip';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Trips from './components/Trips';

function App() {
  return (
     
     <div className="container">
       <div className="wrapper">
       <div className="app_left">

   <Sidebar />
   </div>
   <div className="app_right">
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/addtrip" component={Addtrip} />
       <Route exact path="/trips" component={Trips} />
    
    </Switch>
   </div>
   </div>
   </div>
  );
}

export default App;
