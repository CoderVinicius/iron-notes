import React from "react";
import axios from "axios";
import GlobalCards from "./GlobalCards";
import Search from "./Search";

class AllCard extends React.Component {
  state = {
    cards: [],
    filtered: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios
        .get("https://sao-ironrest.herokuapp.com/IronNote")
        .then((response) => {
          this.setState({ cards: [...response.data], filtered: [...response.data]  });
        });
    } catch (err) {
      console.log(err);
    }
  };


  filterNotes = (input) => {
    console.log(this.state.cards, '- cards')
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


  render() {
    return (
      <div>
      <Search filterNotes={this.filterNotes}/>
      <div className="d-flex flex-wrap">
        
        {this.state.filtered.map((cards) => {
          return (
            <GlobalCards
              id={cards._id}
              name={cards.cardName}
              description={cards.description}
              myNote={cards.myNote}
            />
          );
        })}
      </div>
      </div>
    );
  }
}

export default AllCard;
