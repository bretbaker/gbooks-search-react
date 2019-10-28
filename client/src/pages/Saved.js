import React, { Component } from 'react';
import SavedNav from "../components/SavedNav";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";

export class Saved extends Component {
  render() {
    return (
      <div>
        <SavedNav />
        <Jumbotron />
        <SavedBooks />
      </div>
    )
  }
}

export default Saved;
