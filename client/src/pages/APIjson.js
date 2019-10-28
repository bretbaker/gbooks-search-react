import React, { Component } from 'react';
import API from "../utils/API";

export class APIjson extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.error(err));
  }
  
  render() {
    return (
      <div>
        {JSON.stringify(this.state.books)}
      </div>
    )
  }
}

export default APIjson;
