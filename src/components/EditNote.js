import React from "react";
import axios from "axios";

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
        .get(`https://ironrest.herokuapp.com/IronNote/${id}`)
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
      .put(`https://ironrest.herokuapp.com/IronNote/grupo4/${id}`, this.state)
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
      <div>
        <h1 className="mb-4">Edit Notes</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
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
          </div>

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
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditNote;
