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

  componentDidMount = async () => {
    try {
        await axios
        .get("https://sao-ironrest.herokuapp.com/IronNote")
        .then((response) => {
          this.setState({ cards: [...response.data], filtered: [...response.data], favorites: []  });
        });
    } catch (err) {
      console.log(err);
    }
  };


  filterNotes = (input) => {
    const filtered = this.state.cards.filter((el) =>
      el.cardName?.toLowerCase().includes(input?.toLowerCase())
    );
    this.setState({ filtered: filtered });
  };

  pushNote = (note) => {
    const filtered = [...this.state.cards];
    filtered.unshift(note);
    this.setState({ filtered });
  };

  favoriteNote = (note) => {
    this.state.favorites.push(note);
    console.log(this.state.favorites);
  }

  unfavoriteNote = (note) => {
    const noteIndex = this.state.favorites.indexOf(note);
    // acha a nota com filter - joga no favorites - chama a api atualizando a nota - prop: favorite - boolean
    this.state.favorites.splice(noteIndex, 1)
  }

  handleFavorite = (id) => {
    if(this.state.favorites.includes(id)) {
      this.unfavoriteNote(id);
    } else {
      this.favoriteNote(id);
    }
  }


  render() {
    return (
      <div className="d-flex flex-wrap">
        <Search filterNotes={this.filterNotes}/>
        {this.state.filtered.map((cards) => {
          return (
            <GlobalCards
              id={cards._id}
              name={cards.cardName}
              description={cards.description}
              myNote={cards.myNote}
              handleFavorite={this.handleFavorite}
            />
          );
        })}
      </div>
    );
  }
}

export default AllCard;
