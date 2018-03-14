import React, { Component } from "react";

const Button = props => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button = (
        <button className="btn btn-success">
          <i className="fa fa-check" />
        </button>
      );
      break;
    case false:
      button = (
        <button className="btn btn-danger">
          <i className="fa fa-times" />
        </button>
      );
      break;
    default:
      button = (
        <button
          className="btn"
          disabled={props.selectedNumbers === 0}
          onClick={props.checkAnswer}
        >
          =
        </button>
      );
      break;
  }

  return <div className="col-2">{button}</div>;
};

export default Button;
