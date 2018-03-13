import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Result from "./components/result";
import CardList from "./components/cardlist";
import FindUserForm from "./components/finduserform";

class App extends Component {
  state = {
    counter: 0,
    cards: [
      {
        name: "Nghia Ngo",
        avatar_url: "https://avatars1.githubusercontent.com/u/6440504?v=4",
        company: "Coco Leaf"
      },
      {
        name: "Paul O'shannessy",
        avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
        company: "Facebook"
      },
      {
        name: "Ben Alpert",
        avatar_url: "https://avatars1.githubusercontent.com/u/6820?v=4",
        company: "Facebook"
      }
    ]
  };

  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />

        <Result counter={this.state.counter} />

        <hr />
        <FindUserForm onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
