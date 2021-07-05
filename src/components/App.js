import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';

import Nav from "./Nav";
import Sidebar from './Sidebar';
import AllCard from "./AllCards";
import NewNote from "./NewNote"
import CardDetails from "./CardDetails";
import EditNote from "./EditNote";




function App() {
  return (
    
      <BrowserRouter>
      <Nav/>
      <div className="container">
      <Sidebar/>
      <Route exact path="/" component={AllCard} />
      <Route path="/new-note" component={NewNote} />
      <Route exact path="/details/:id" component={CardDetails} />
      <Route path="/edit/:id" component={EditNote}/>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
