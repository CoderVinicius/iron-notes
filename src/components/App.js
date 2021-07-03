import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


import Navbar from './Navbar'
import AllCard from "./AllCards";

function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Route path="/" component={AllCard} />
        
      </BrowserRouter>
      </div>
  );
}

export default App;
