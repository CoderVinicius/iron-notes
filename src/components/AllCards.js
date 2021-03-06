import React from "react";
import axios from "axios";
import GlobalCards from "./GlobalCards";
import Search from "./Search";

class AllCard extends React.Component {
  state = {
    cards: [],
    filtered: [],
    favorites: [],
  };

  componentDidMount = () => {
    try {
      axios
        .get("https://sao-ironrest.herokuapp.com/IronNote")
        .then((response) => {
          console.log("eu sou Mount= ", this.props.match.path);
          if (this.props.match.path === "/favoriteNotes") {
            this.setState({
              filtered: response.data.filter((card) => card.favorite),
              favorites: response.data.filter((card) => card.favorite),
            });
          } else {
            this.setState({
              cards: [...response.data],
              filtered: [...response.data],
              favorites: response.data.filter((card) => card.favorite),
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  filterNotes = (input) => {
    console.log(this.props.match.path);

    if (this.props.match.path === "/") {
      const filtered = this.state.cards.filter((el) =>
        el.cardName?.toLowerCase().includes(input?.toLowerCase())
      );
      console.log("eu sou filtered= ", filtered);
      this.setState({ filtered });
    }

    if (this.props.match.path === "/favoriteNotes") {
      console.log("eu sou favorites= ", this.state.favorites);
      const filtered = this.state.favorites.filter((elem) =>
        elem.cardName?.toLowerCase().includes(input?.toLowerCase())
      );
      this.setState({ filtered });
    }
  };

  pushNote = (note) => {
    const filtered = [...this.state.cards];
    filtered.unshift(note);
    this.setState({ filtered });
  };

  render() {
    // if (this.props.match.path === "/favoriteNotes") {
    //   this.state.filtered = this.state.favorites;
    //   this.state.filtered.map((el) => console.log(el)) ;
    // }

    return (
      <div>
        <Search filterNotes={this.filterNotes}/>
        <div className="d-flex flex-wrap">
          {this.state.filtered.map((card) => {
            return (
              <GlobalCards
                id={card._id}
                name={card.cardName}
                description={card.description}
                myNote={card.myNote}
                favorite={card.favorite}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllCard;
