import { Component } from "react";
import axios from "axios";

import InputGlobal from "./InputGlobal";


class NewNote extends Component {
    state = {
      cardName: "",
      comment: "",
      description: "",
      myNote: "",
    }

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
      <div>
        <h1>Create Note</h1>
        <hr />
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
          <InputGlobal
            label="YourNote"
            type="text"
            name="myNote"
            onChange={this.handleChange}
            value={this.state.MyNote}
            required
          />
           <InputGlobal
            label="Comments"
            type="text"
            name="comment"
            onChange={this.handleChange}
            value={this.state.Comment}
            required
          />

          <hr />

          <div className="form-group">
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