import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";



class CardDetails extends React.Component {
  state = {
    _id: "",
    cardName: "",
    comment: "",
    description: "",
    myNote: "",
  };

  componentDidMount = async () => {
    try {
      let id = this.props.match.params.id;
        await axios
        .get(`https://sao-ironrest.herokuapp.com/IronNote/${id}`)
        .then((response) => {
          this.setState({ ...response.data });
        });
    } catch (err) {
      console.log(err);
    }
  };



  render() {




    return (


      <div className="d-flex flex-wrap" id={this.state._id}>
        <div to="/details">
          <div
            className="card cardsBorder"
            style={{ width: "18rem", backgroundColor: "#222831" }}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ color: "white" }}>
                {this.state.cardName}
              </h5>
              <h6 className="card-subtitle mb-2" style={{ color: "#9a9998" }}>
                {this.state.description}
              </h6>
              <p className="card-text" style={{ color: "white" }}>
                {this.state.myNote}
              </p>
              
            </div>
            <hr className="cardsHr" />
            <div className="container">
              <Link to={`/edit/${this.state._id}`} className="card-link">
                <i className="far fa-edit" style={{ color: "cornsilk" }}></i>
              </Link>
              <Link to={`/Delete/${this.state._id}`} className="card-link">
                <i class="far fa-trash-alt" style={{ color: "cornsilk" }}></i>
              </Link>
            </div>
          </div>
        </div>
        <div
            className="card cardsBorder"
            style={{ width: "18rem", height: "8rem", backgroundColor: "#222831" }}
          >
             <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
                Your Comment:
              </h5>
            <p className="card-text" style={{ color: "white" }}>
          {this.state.comment}
        </p>
        </div>
        
        </div>
        
      </div>

    );
  }
}

export default CardDetails;
