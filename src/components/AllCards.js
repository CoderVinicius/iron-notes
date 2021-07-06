import React from "react";
import axios from "axios";
import GlobalCards from "./GlobalCards";

class AllCard extends React.Component {
  state = {
    cards: []
  };

  componentDidMount = async () => {
    try {
<<<<<<< HEAD
      const response = await axios
=======
        await axios
>>>>>>> d1def754c183ea7018f8e08151b0042c00ae2e30
        .get("https://sao-ironrest.herokuapp.com/IronNote")
        .then((response) => {
          this.setState({ cards:  [...response.data]  });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
          
        {this.state.cards.map((cards) => {
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
    );
  }
}

export default AllCard;
