import React from "react";
import { Link } from "react-router-dom";

class BootstrapNavbar extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              IronNote
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default BootstrapNavbar;
