import React from "react";
import GlobalCards from "./GlobalCards";
import axios from "axios";

class AllCard extends React.Component {
  state = {
    cardsNotes: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios
        .get("https://ironrest.herokuapp.com/IronNote")
        .then((response) => {
          this.setState({ cardsNotes: { ...response.data } });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
          
        {this.state.cardsNotes.map((cardsNotes) => {
          return (
            <GlobalCards
              id={cardsNotes._id}
              name={cardsNotes.cardName}
              description={cardsNotes.description}
              myNote={cardsNotes.myNote}
            />
          );
        })}
      </div>
    );
  }
}

export default AllCard;
