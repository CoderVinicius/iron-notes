import { Component } from "react";
import axios from "axios";


class DeleteNote extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
      .delete(`https://sao-ironrest.herokuapp.com/IronNote/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return <div>Deleting...</div>;
  }
}

export default DeleteNote;