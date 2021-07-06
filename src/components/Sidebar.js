import React from "react";

import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group mt-3">
          <div className="sidebar" className="flex-column">
            <Link className="list-group-item" to="/NewNote">
              Create New Note
            </Link>
            <Link className="list-group-item" to="/bgfgb">
              All Notes
            </Link>
            <Link className="list-group-item" to="/bfgbfg">
              Favorites
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
