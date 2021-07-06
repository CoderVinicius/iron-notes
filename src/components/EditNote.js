import React from "react";
import axios from "axios";
import InputGlobal from "./InputGlobal";

class EditNote extends React.Component {
  state = {
    cardName: "",
    comment: "",
    description: "",
    myNote: "",
    favorite: false,
  };

  componentDidMount = async () => {
    try {
      const id = this.props.match.params.id;

      const response = await axios
        .get(`https://sao-ironrest.herokuapp.com/IronNote/${id}`)
        .then((response) => {
          delete response.data._id
          this.setState({ ...response.data });

        });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    let id = this.props.match.params.id;
    event.preventDefault();
    axios
      .put(`https://sao-ironrest.herokuapp.com/IronNote/${id}`, this.state)
      .then((response) => {
        
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    console.log("eu spou o props edit", this.props)
    return (
      <div className="editNote">
        <h1 className="editTitle mb-3">Edit Notes</h1>
        <div className="d-flex">
          <form onSubmit={this.handleSubmit}>
            <InputGlobal
              label="Name Card"
              value={this.state.cardName}
              name="cardName"
              onChange={this.handleChange}
              required
            />

            <InputGlobal
              label="Description"
              value={this.state.description}
              name="description"
              onChange={this.handleChange}
              required
            />

            <div className="form-floating">
              <textarea
                value={this.state.myNote}
                name="myNote"
                onChange={this.handleChange}
                className="textWrap form-control"
                placeholder="Leave a comment here"
                required
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <hr />
            <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
          </form>

          <div
            className="cardEdit cardsBorder"
            style={{ width: "20rem", backgroundColor: "#222831" }}
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
              <a className="card-link">
                <i className="far fa-star" style={{ color: "cornsilk" }}></i>
              </a>

              <a className="card-link">
                <i className="far fa-edit" style={{ color: "cornsilk" }}></i>
              </a>
              <a className="card-link">
                <i
                  className="far fa-trash-alt"
                  style={{ color: "cornsilk" }}
                ></i>
              </a>
            </div>
          </div>




          
        </div>
      </div>
    );
  }
}

export default EditNote;
