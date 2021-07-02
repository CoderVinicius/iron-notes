import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

function GlobalCards(props) {
  return (
    <div id={props.id}>
      <div className="card" style={{width: "18rem", backgroundColor:"#222831"}}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
          <p className="card-text">{props.myNote}</p>
          <Link to="#" className="card-link">
          <i class="far fa-star"></i>
          </Link>
          <Link to="#" className="card-link">
          <i class="far fa-edit"></i>
          </Link>
          <Link to="#" className="card-link">
          <i class="far fa-trash-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GlobalCards;
