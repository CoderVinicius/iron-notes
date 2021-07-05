import React from 'react'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
  import { Nav, Button } from 'react-bootstrap'
  

class Sidebar extends React.Component{

    render(){
        return(
          
             <Router>
                   <Nav class='sidebar' defaultActiveKey="/home" className="flex-column">
                   <Button class='btn-sidebar' eventKey="/">Create New Note</Button>
                    <Button class='btn-sidebar' eventKey="/">All Notes</Button>
                    <Button class='btn-sidebar' eventKey="/">Favorites</Button>
                    </Nav>
              </Router>   
        )  
    }
}

export default Sidebar;