import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


import Navbar from './Navbar'
import AllCard from "./AllCards";
import CardDetails from "./CardDetails";
import EditNote from "./EditNote";

function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Route exact path="/" component={AllCard} />
      <Route exact path="/details/:id" component={CardDetails} />
      <Route path="/edit/:id" component={EditNote}/>
        
      </BrowserRouter>
      </div>
  );
}

export default App;
