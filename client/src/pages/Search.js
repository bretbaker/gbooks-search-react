import React, { Component } from "react";
import SearchNav from"../components/SearchNav";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

export class Search extends Component {
  render() {
    return (
      <div>
        <SearchNav />
        <Jumbotron />
        <SearchForm />
        {/* <SearchResults /> */}
        <Footer />
      </div>
    )
  }
}

export default Search;
