import React from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div class="sidebar" className="flex-column">
          <NavLink activeClassName="active" className="btn-sidebar" to="/">
            Create New Note
          </NavLink>
          <NavLink activeClassName="active" className="btn-sidebar" to="/">
            All Notes
          </NavLink>
          <NavLink activeClassName="active" className="btn-sidebar" to="/">
            Favorites
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Sidebar;
