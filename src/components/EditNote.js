import React from "react";
import axios from "axios";
import InputGlobal from "./InputGlobal";

class EditNote extends React.Component {
  state = {
    cardName: "",
    comment: "",
    description: "",
    myNote: "",
  };

  componentDidMount = async () => {
    try {
      const id = this.props.match.params.id;
<<<<<<< HEAD

      const response = await axios
=======
       const response = await axios
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
        .get(`https://sao-ironrest.herokuapp.com/IronNote/${id}`)
        .then((response) => {
          console.log(response.data);
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
<<<<<<< HEAD
      .put(`https://sao-ironrest.herokuapp.com/IronNote/${id}`, this.state)
=======
      .post (`https://ironrest.herokuapp.com/IronNote/grupo4/${id}`, this.state)
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
      .then((response) => {
        // console.log(response);
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="editNote">
        <h1 className="editTitle mb-3">Edit Notes</h1>
        <div className="d-flex">
          <form onSubmit={this.handleSubmit}>
            <InputGlobal
              label="Name Card"
=======
      <div>
        <h1 className="mb-3">Edit Notes</h1>
        <form onSubmit={this.handleSubmit}>
          <InputGlobal
            nameInput="cardName"
            value={this.state.cardName}
            name="cardName"
            Change={this.handleChange}
          />

          <InputGlobal
            nameInput="Description"
            value={this.state.description}
            name="description"
            Change={this.handleChange}
          />

          <div class="form-floating">
            <textarea
              value={this.state.myNote}
              name="myNote"
              onChange={this.handleChange}
              class="form-control"
              placeholder="Leave a comment here"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>

          {/* <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              NameCard
            </span>
            <input
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
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
