<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
=======
import React from 'react'

import { NavLink } from 'react-router-dom'
  
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <ul class="list-group mt-3">
          <Link to="/" className="list-group-item">
            All Notes
          </Link>
          <Link
          
            to="/ghnnh"
            className="list-group-item"
          >
            Starred Notes
          </Link>
          <Link
          
<<<<<<< HEAD
            to="/hgnfhn"
            className="list-group-item"
          >
            Creat New Note
          </Link>
        </ul>
        </div>

      
    );
  }
=======
            <div class='side'>
                   <div class='sidebar' className="flex-column">
                   <NavLink activeClassName='active' class='btn-sidebar' to="/NewNote">Create New Note</NavLink>
                    <NavLink activeClassName='active' class='btn-sidebar' to="/">All Notes</NavLink>
                    <NavLink activeClassName='active' class='btn-sidebar' to="/">Favorites</NavLink>
                    </div>
           </div>
        )  
    }
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
}

export default Sidebar;
