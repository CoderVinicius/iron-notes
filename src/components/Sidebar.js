import React from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends React.Component{

    render(){
        return(
          
             <div>
                   <div class='sidebar' className="flex-column">
                   <NavLink activeClassName="active" class='btn-sidebar' to="/">Create New Note</NavLink>
                    <NavLink activeClassName="active" class='btn-sidebar' to="/">All Notes</NavLink>
                    <NavLink activeClassName="active" class='btn-sidebar' to="/">Favorites</NavLink>
                    </div>
              </div>   
        )  
    }
}

export default Sidebar;