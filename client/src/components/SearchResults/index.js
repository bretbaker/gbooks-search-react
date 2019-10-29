import React, { Component } from 'react';

export class SearchResults extends Component {
  
  // renderBooks = () => {
  //   this.props.books.map(element => {
  //       <div key={element.id}>

  //       </div>
  //   });
  // }
  
  render() {
    console.log(this.props.books);
    return (
      // this.renderBooks()
      this.props.books.map(element => {
        // <div key={element.id}>
        //   <h1>Hello</h1>
        // </div>
        console.log("hello!");
      })
    )
  }
}

export default SearchResults;

