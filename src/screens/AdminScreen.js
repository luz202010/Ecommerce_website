import React, { Component } from "react";
import Sum from "../components/Sum";

export default class AdminScreen extends Component {
  render() {
    return (
      <div>
        <div className="summary">
          <a href="/create">CREATE</a>
          <a href="/">BACK TO MAINPAGE</a>
        </div>
        <div>
          <Sum />
        </div>
      </div>
    );
  }
}
