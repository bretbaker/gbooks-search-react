import React, { Component } from 'react';

export class SavedBooks extends Component {
  render() {
    return (
      <div className="container">
        <div className="border border-secondary shadow p-3 mb-5">
          <h3 className="mb-3">Saved Books</h3>
          <div id="no-results" className="border border-secondary text-center p-3 shadow-sm">
            <h4 className="mb-0 font-weight-light">No Saved Books</h4>
          </div>
          <div id="search-results">
            {/* this is where saved books will append */}
          </div>
        </div>
      </div>
    )
  }
}

export default SavedBooks;
