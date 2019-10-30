import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import APIjson from "./pages/APIjson";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route exact path="/api/saved" component={APIjson} /> */}
      </Switch>
    </Router>
  );
}

export default App;
