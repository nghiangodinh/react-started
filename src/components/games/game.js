import React from "react";
import PropTypes from "prop-types";
import Stars from "./stars";
import Button from "./button";
import Answer from "./answer";
import Numbers from "./numbers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumbers: [],
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    };
  }

  selectNumber = clickedNumber => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >=0) {
      return;
    }

    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };

  unselectNumber = clickedNumber => {
    this.setState(prevState =>({
      selectedNumbers: prevState.selectedNumbers.filter(number => number != clickedNumber)
    }))
  }


  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />

        <div className="row">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
          <Button selectedNumbers={this.state.selectedNumbers}/>
          <Answer selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber}/>
      </div>
    );
  }
}

Game.propTypes = {};

export default Game;
