import React from 'react'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
  import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
  

class Sidebar extends React.Component{

    render(){
        return(
          
             <Router>
                   <Nav defaultActiveKey="/home" className="flex-column">
                   <Nav.Link href="/home">Create New Note</Nav.Link>
                    <Nav.Link eventKey="link-1">All Notes</Nav.Link>
                    <Nav.Link eventKey="link-2">Favorites</Nav.Link>
                    </Nav>
              </Router>   
        )  
    }
}

export default Sidebar;