import React, { Component } from 'react';

export class SearchForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="border border-secondary p-3 shadow mb-3">
          <h3>Book Search</h3>
          <div className="form-group">
            <label htmlFor="bookInput">Book</label>
            <input type="text" className="form-control" id="bookInput" placeholder="Title, Author, etc..."></input>
          </div>
          <button type="button" className="btn btn-info">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
