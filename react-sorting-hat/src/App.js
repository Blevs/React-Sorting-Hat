import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./scenes/Home/";
import Questions from "./scenes/Questions/";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/questions" component={Questions}/>
          </div>
        </Router>
    );
  }
}

export default App;
