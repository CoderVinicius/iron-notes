import { Component } from "react";
import axios from "axios";


class FavoriteNote extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
    .post(`https://ironrest.herokuapp.com/IronNote/grupo4/${id}`, { ...this.props, favorite: !this.props.favorite })
    .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
    .catch((err) => {
      console.log(err);
    });
  };
  render() {
    return <div>Favoriting...</div>;
  }
}

export default FavoriteNote;