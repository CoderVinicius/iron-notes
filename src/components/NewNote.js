import { Component } from "react";
import axios from "axios";

import TextInput from './TextInput'



class NewNote extends Component {
    state = {
        cardName: "",
        description: "",
        myNote: "",
      };

  handleChange = (event) => {
    this.setState({ [event.target.cardName]: event.target.value });
  };

  
  handleSubmit = (event) => {
    event.preventDefault(); 

    axios
      .post("https://ironrest.herokuapp.com/IronNote", this.state)
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>NameCard</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Name card"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.nameCard}
            required
          />
          <TextInput
            label="Description"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
            required
          />
          <TextInput
            label="YourNote"
            type="text"
            name="yourNote"
            onChange={this.handleChange}
            value={this.state.yourNote}
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