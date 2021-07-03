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
      console.log(this.state.cardsNotes)
    return (
      <div class="d-flex flex-wrap">
        <GlobalCards
          id={this.state.cardsNotes._data}
          name="GianLucas"
          description="I'm GianLucas ñfmg oirejnv oinv ovlnfe"
          myNote="I'mljnvfdj fjonvoefj oeirjnvoefj oihvofnv oijvoifn ikjdfovefnk ioforvn pifjvpdfiobv pidjfoviknmd pidfbvoi odfknvpfdknv fivnfe"
        />
        <GlobalCards
          name="GianLucas"
          description="I'm GianLucas ñfmg oirejnv oinv ovlnfe"
          myNote="I'mljnvfdj fjonvoefj oeirjnvoefj oihvofnv oijvoifn ikjdfovefnk ioforvn pifjvpdfiobv pidjfoviknmd pidfbvoi odfknvpfdknv fivnfe"
        />
        <GlobalCards
          name="GianLucas"
          description="I'm GianLucas ñfmg oirejnv oinv ovlnfe"
          myNote="I'mljnvfdj fjonvoefj oeirjnvoefj oihvofnv oijvoifn ikjdfovefnk ioforvn pifjvpdfiobv pidjfoviknmd pidfbvoi odfknvpfdknv fivnfeov goverg oirefnejorv ihfejr vefjubviv erhfcer vnfrvi rvijbver vejriv b fgj ji fvjo fkgjuo oj fghj gp grj gijnjfhuoviknmd pidfbvoi odfknvpfdknv fivnfeov goverg oirefnejorv ihfejr vefjubviv erhfcer vnfrvi rvijbver vejriv b fgj ji fvjo fkgjuo oj fghj gp grj gijnjfhu"
        />
        <GlobalCards
          name="GianLucas"
          description="I'm GianLucas ñfmg oirejnv oinv ovlnfe"
          myNote="I'mljnvfdj fjonvoefj oeirjnvoefj oihvofnv oijvoifn ikjdfovefnk ioforvn pifjvpdfiobv pidjfoviknmd pidfbvoi odfknvpfdknv fivnfeov goverg oirefnejorv ihfejr vefjubviv erhfcer vnfrvi rvijbver vejriv b fgj ji fvjo fkgjuo oj fghj gp grj gijnjfhuoviknmd pidfbvoi odfknvpfdknv fivnfeov goverg oirefnejorv ihfejr vefjubviv erhfcer vnfrvi rvijbver vejriv b fgj ji fvjo fkgjuo oj fghj gp grj gijnjfhu"
        />
        <GlobalCards
          name="GianLucas"
          description="I'm GianLucas ñfmg oirejnv oinv ovlnfe"
          myNote="I'mljnvfdj fjonvoefj oeirjnvoefj oihvofnv oijvoifn ikjdfovefnk ioforvn pifjvpdfiobv pidjfoviknmd pidfbvoi odfknvpfdknv fivnfe"
        />
      </div>
    );
  }
}

export default AllCard;
