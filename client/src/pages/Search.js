import React, { Component } from "react";
import SearchNav from"../components/SearchNav";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";
import "./style.css";

export class Search extends Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <SearchNav />
          <Jumbotron />
          <SearchForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Search;
