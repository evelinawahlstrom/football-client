import React from "react";
import { connect } from "react-redux";
import { createPlayer } from "../actions/players";
import PlayerForm from "./PlayerForm";

class CreatePlayerContainer extends React.Component {
  state = {
    name: "",
    number: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    console.table(this.state);
    event.preventDefault();
    this.props.createPlayer({
      ...this.state,
      teamId: this.props.teamId
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    return (
      <PlayerForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createPlayer }
)(CreatePlayerContainer);
