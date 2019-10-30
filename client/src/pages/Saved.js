import React, { Component } from 'react';
import SavedNav from "../components/SavedNav";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import Footer from "../components/Footer";
import "./style.css";

export class Saved extends Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <SavedNav />
          <Jumbotron />
          <SavedBooks />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Saved;
