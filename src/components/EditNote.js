import React from "react";
import axios from "axios";
import InpuGlobal from "./InputGlobal";

class EditNote extends React.Component {
  state = {
    _id: "",
    cardName: "",
    comment: "",
    description: "",
    myNote: "",
  };

  componentDidMount = async () => {
    try {
      const id = this.props.match.params.id;

      const response = await axios
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
    let id = this.props.match.params.id;
    event.preventDefault();

    axios
      .post(`https://sao-ironrest.herokuapp.com/IronNote/${id}`, this.state)
      .then((response) => {
        // console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("CardName= ", this.state.cardName)
    console.log("Description= ", this.state.description)

    return (
      <div>
      
        <h1 className="mb-3">Edit Notes</h1>
        <div className="d-flex">
        <form onSubmit={this.handleSubmit}>


          
          <InpuGlobal
            nameInput="Note Name"
            value={this.state.cardName}
            name="cardName"
            Change={this.handleChange}
            required
          />

          <InpuGlobal
            nameInput="Description"
            value={this.state.description}
            name="description"
            Change={this.handleChange}
            required
          />

          <div className="form-floating">
            <textarea
              value={this.state.myNote}
              name="myNote"
              onChange={this.handleChange}
              class="textWrap form-control"
              placeholder="Leave a comment here"
              required
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>




          {/* <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              NameCard
            </span>
            <input
              value={this.state.cardName}
              type="text"
              name="cardName"
              onChange={this.handleChange}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Description
            </span>
            <input
              value={this.state.description}
              type="text"
              name="description"
              onChange={this.handleChange}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              YourNote
            </span>
            <input
              value={this.state.myNote}
              type="text"
              name="myNote"
              onChange={this.handleChange}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div> */}

          {/* <div class="form-floating">
          <textarea
            class="form-control"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div> */}

          <hr />
          <button className="btn" type="submit">
            Save
          </button>
        </form>
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
              <a className="card-link">
                <i class="far fa-star" style={{ color: "cornsilk" }}></i>
              </a>

              <a className="card-link">
                <i class="far fa-edit" style={{ color: "cornsilk" }}></i>
              </a>
              <a className="card-link">
                <i class="far fa-trash-alt" style={{ color: "cornsilk" }}></i>
              </a>
            </div>
            </div>
      </div>
      </div>
    );
  }
}

export default EditNote;
