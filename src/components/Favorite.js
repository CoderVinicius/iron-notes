import { Component } from "react";
import axios from "axios";


class FavoriteNote extends Component {
  state = {
    cardName: this.props.location.query.name,
    comment: this.props.location.query.comment,
    description: this.props.location.query.description,
    myNote: this.props.location.query.myNote,
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;

    axios
    .put(`https://sao-ironrest.herokuapp.com/IronNote/${id}`, { ...this.state, favorite: !this.props.location.query.favorite })
    .then((response) => {
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