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
import DeleteNote from "./Delete";



function App() {
  return (
    
      <BrowserRouter>
      <div className="mt-4">
      <Nav/>
      <div className="container">
      <Sidebar/>
      <Route exact path="/" component={AllCard} />
      <Route path="/newnote" component={NewNote} />
      <Route exact path="/details/:id" component={CardDetails} />
      <Route path="/edit/:id" component={EditNote}/>
      <Route path="/Delete/:id" component={DeleteNote} />
      </div>
      </div>

      </BrowserRouter>
    
  );
}

export default App;
