import React from 'react'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'

class BootstrapNavbar extends React.Component{
    
    render(){
        return(
                <div class='navbar' className="row w-100">
                    <Router>
                    <Navbar>
                    <Navbar.Brand>Iron Notes</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    </Navbar>
                    </Router>
            </div>
        )  
    }
}

export default BootstrapNavbar;