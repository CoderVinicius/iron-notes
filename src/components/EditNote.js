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

      await axios
        .get(`https://sao-ironrest.herokuapp.com/IronNote/${id}`)
        .then((response) => {
          delete response.data._id;
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
    let id = this.props.match.params.id;
    event.preventDefault();

    axios
      .put(`https://sao-ironrest.herokuapp.com/IronNote/${id}`, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="editNote">
        <h1 className="editTitle mb-3">Edit Notes</h1>
        <div className="d-flex align-items-start">
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
                placeholder="Write your note here"
                required
              ></textarea>
              <label for="floatingTextarea">Note</label>
            </div>
            <div>
              <div>
                <span className="editComment">
                  You can review your comment in details
                </span>
                <InputGlobal
                  label="Comment"
                  value={this.state.comment}
                  name="comment"
                  onChange={this.handleChange}
                />
              </div>
              <div
                className="card cardsBorder"
                style={{
                  width: "18rem",
                  height: "8rem",
                  backgroundColor: "#222831",
                }}
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

            <hr />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>

          <div
            className="cardsBorder d-flex align-items-end"
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
            <div className="buttoNote">
              <hr className="cardsHr" />
              <div className=" container">
                <a href className="card-link">
                  <i className="far fa-star" style={{ color: "cornsilk" }}></i>
                </a>
                <a href className="card-link">
                  <i className="far fa-edit" style={{ color: "cornsilk" }}></i>
                </a>
                <a href className="card-link">
                  <i
                    className="far fa-trash-alt"
                    style={{ color: "cornsilk" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditNote;
