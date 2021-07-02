import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     
      </BrowserRouter>
      </div>
  );
}

export default App;
