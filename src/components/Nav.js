import React from "react";
import { Link } from "react-router-dom";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">IronNote</Link>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default BootstrapNavbar;
