import React, { Component } from 'react';
import API from "../../utils/API";
// import SearchResults from '../SearchResults';

export class SearchForm extends Component {
  
  state = {
    apiUrl: null,
    books: []
  };

  thenConsoleLog = () => {
    console.log(this.state.books);
  }

  setNewStates = () => {
    // console.log(this.state.apiUrl);
    API.searchBooks(this.state.apiUrl)
      .then((res) => {
        this.setState({ books: res });
        // this.thenConsoleLog();
        this.toggleDisplay();
      })
      .catch(err => console.error(err));
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  handleSearchInput = () => {
    let newUrl = "https://www.googleapis.com/books/v1/volumes?q=" + this.refs.searchInput.value + "&key=";
    this.setState({ apiUrl: newUrl });
    this.refs.searchInput.value = '';
    setTimeout(this.setNewStates, 100);
  }

  toggleDisplay = () => {
    let noRes = document.getElementById("no-results");
    let yesRes = document.getElementById("search-results");
    if (this.state.books.length === 0) {
      noRes.setAttribute('style', 'display: block;');
      yesRes.setAttribute('style', 'display: none;');
    } else {
      noRes.setAttribute('style', 'display: none;');
      yesRes.setAttribute('style', 'display: block;');
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="border border-secondary p-3 shadow mb-3">
          <h3>Book Search</h3>
          <div className="form-group">
            <label htmlFor="bookInput">Book</label>
            <input ref="searchInput" type="text" className="form-control" id="bookInput" placeholder="Title, Author, etc..."></input>
          </div>
          <button onClick={this.handleSearchInput} className="btn btn-info">Search</button>
        </form>
        <div className="border border-secondary shadow p-3 mb-5">
          <h3 className="mb-3">Results</h3>
          <div id="no-results" className="border border-secondary text-center p-3 shadow-sm">
            <h4 className="mb-0 font-weight-light">Search Above for Results</h4>
          </div>
          <div id="search-results">
            {/* <SearchResults books={this.state.books}/> */}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;
