import React, { Component } from 'react';
import "./style.css";

export class SearchResults extends Component {

  saveBook = (googleId, title, authors, description) => {
    let newBook = {
      googleId: googleId,
      tite: title,
      authors: authors,
      description: description
    }
    // console.log(newBook);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Post success!");
        console.log(newBook);
      }
    };
    xhttp.open("POST", "/api/saved", true);
    xhttp.send(newBook);
  }

  render() {

    return (
      this.props.books.map(book => (
        <div key={book.id} className="book-div border border-secondary p-3 shadow-sm mb-3">
          <button onClick={() => { this.saveBook(book.id, book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description) }} className="btn btn-success float-right ml-3" value={book.id}>Save</button>
          <a href={book.volumeInfo.infoLink} target="_blank"><button className="btn btn-primary float-right ml-3">View</button></a>
          <h4>{book.volumeInfo.title}</h4>
          <h6 className="mb-3">Written by: {book.volumeInfo.authors}</h6>
          <img className="float-left mr-3 mb-3" src={book.volumeInfo.imageLinks.thumbnail} alt={book.id}></img>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))
    )
  }
}

export default SearchResults;

