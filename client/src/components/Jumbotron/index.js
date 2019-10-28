import React, { Component } from 'react';

export class Jumbotron extends Component {
  render() {
    return (
      <header className="container">
        <div className="jumbotron jumbotron-fluid bg-info text-center shadow mb-5 border border-secondary">
          <div className="container">
            <h1 className="display-4 text-white">(React) Google Books Search</h1>
            <h3 className="font-weight-light">Search for and Save Books of Interest</h3>
          </div>
        </div>
      </header>
    )
  }
}

export default Jumbotron;
