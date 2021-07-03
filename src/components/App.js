import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


import Navbar from './Navbar'
import AllCard from "./AllCards";
import CardDetails from "./CardDetails";

function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Route exact path="/" component={AllCard} />
      <Route path="/details/:id" component={CardDetails} />
        
      </BrowserRouter>
      </div>
  );
}

export default App;
