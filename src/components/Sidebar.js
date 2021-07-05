import React from "react";
import { Link } from "react-router-dom";

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
          
            to="/hgnfhn"
            className="list-group-item"
          >
            Creat New Note
          </Link>
        </ul>
        </div>

      
    );
  }
}

export default Sidebar;
