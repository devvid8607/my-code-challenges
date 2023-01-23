import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: true,
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.on ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
