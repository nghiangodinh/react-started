import React, { Component } from "react";

const Stars = () => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);
  let stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star" />);
  }

  return <div className="col-5">{stars}</div>;
};

export default Stars;
