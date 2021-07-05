import React from 'react'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
  import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
  

class BootstrapNavbar extends React.Component{

    render(){
        return(
                <div className="navbar" className="row w-100">
                    <Router>
                    <Navbar>
                    <Navbar.Brand>Iron Notes</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Button variant="outline-primary">Search</Button>
                    </Navbar>
                    </Router>
            </div>
        )  
    }
}

export default BootstrapNavbar;