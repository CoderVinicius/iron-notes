import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

function GlobalCards(props) {
  return (
    <div id={props.id}>
      <div to="/details" >
      <div className="card cardsBorder" style={{width: "18rem", backgroundColor:"#222831"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "white"}}>{props.name}</h5>
          <h6 className="card-subtitle mb-2" style={{color: "#9a9998"}}>{props.description}</h6>
          <p className="card-text" style={{color: "white"}}>{props.myNote}</p>
          </div>
          <hr className="cardsHr"/>
          <div className="container">
          <Link to="#" className="card-link">
          <i class="far fa-star" style={{color:"cornsilk"}}></i>
          </Link>
          
          <Link to="#" className="card-link">
          <i class="far fa-edit" style={{color:"cornsilk"}}></i>
          </Link>
          <Link to="#" className="card-link">
          <i class="far fa-trash-alt" style={{color:"cornsilk"}}></i>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalCards;
