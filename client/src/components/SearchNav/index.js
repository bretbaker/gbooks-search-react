import React, { Component } from 'react';

export class SearchNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info mb-3 shadow border-bottom border-secondary">
        <a className="navbar-brand text-white" href="#">GBooks</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Search <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default SearchNav;