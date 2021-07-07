import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

import Nav from "./Nav";
import Sidebar from "./Sidebar";
import AllCard from "./AllCards";
import NewNote from "./NewNote";
import CardDetails from "./CardDetails";
import EditNote from "./EditNote";
import DeleteNote from "./Delete";
import FavoriteNote from "./Favorite";


function App() {
  return (
    <BrowserRouter>
      <div className="mt-4">
        <Nav />
        <div className="d-flex">
          <Sidebar />
          <div className="d-flex flex-wrap">
            <Route exact path="/" component={AllCard} />
          </div>
          <Route path="/newnote" component={NewNote} />
          <Route exact path="/details/:id" component={CardDetails} />
          <Route path="/edit/:id" component={EditNote} />
          <Route path="/delete/:id" component={DeleteNote} />
          <Route path="/favorite/:id" component={FavoriteNote} />
          <Route path="/favoriteNotes" component={AllCard} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
