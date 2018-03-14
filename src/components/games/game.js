import React from "react";
import PropTypes from "prop-types";
import Stars from "./stars";
import Button from "./button";
import Answer from "./answer";
import Numbers from "./numbers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />

        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

Game.propTypes = {};

export default Game;
