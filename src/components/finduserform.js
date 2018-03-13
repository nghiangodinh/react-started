import React, { Component } from "react";
import axios from "axios";

class FindUserForm extends Component {
  state = { userName: "" };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.props.onSubmit(res.data);
        this.setState({ userName: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          required
          placeholder="Github username"
          value={this.state.username}
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default FindUserForm;
