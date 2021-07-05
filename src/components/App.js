import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';

import Nav from "./Nav";
import Sidebar from './Sidebar';
import AllCard from "./AllCards";
import CardDetails from "./CardDetails";
import EditNote from "./EditNote";


function App() {
  return (

      <BrowserRouter>
      <div className="container mt-4">
      <Nav/>
      <div className="d-flex justify-content-lg-around">
      <Sidebar/>
      <Route exact path="/" component={AllCard} />
      <Route exact path="/details/:id" component={CardDetails} />
      <Route path="/edit/:id" component={EditNote}/>
      </div>
      </div>
      
      
      </BrowserRouter>

  );
}

export default App;
