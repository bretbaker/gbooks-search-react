import React, { Component } from 'react';
import API from "../utils/API";

export class APIjson extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.searchBooks()
      .then(res => this.setState({ books: JSON.stringify(res.data.items, null, 2) }))
      .catch(err => console.error(err));
  }
  
  render() {
    console.log(this.state.books);
    return (
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>View the console for API data</h1>
      </div>
    )
  }
}

export default APIjson;
