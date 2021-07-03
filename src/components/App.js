import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import Nav from "./Nav";
import Sidebar from './Sidebar';


function App() {
  return (
     <BrowserRouter>
      <Nav/>
      <Sidebar/>
     </BrowserRouter> 
      
  );
}

export default App;
