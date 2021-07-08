import { Component } from "react";
import axios from "axios";

import InputGlobal from "./InputGlobal";

class NewNote extends Component {
  state = {
    cardName: "",
    comment: "",
    description: "",
    myNote: "",
    favorite: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://sao-ironrest.herokuapp.com/IronNote", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="editNote">
        <h1 className="editTitle mb-3">Create Note</h1>
        <form onSubmit={this.handleSubmit}>
          <InputGlobal
            label="Name Card"
            type="text"
            name="cardName"
            onChange={this.handleChange}
            value={this.state.CardName}
            required
          />
          <InputGlobal
            label="Description"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.Description}
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
          <span className="editComment">
            Comment note is not required, you can review it in detail
          </span>
          <InputGlobal
            label="Comment"
            value={this.state.comment}
            name="comment"
            onChange={this.handleChange}
          />

          <hr />

          <div className="saveButton form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewNote;
