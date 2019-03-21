import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./scenes/Home/";
import Quiz from "./scenes/Quiz/";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/quiz" component={Quiz}/>
          </div>
        </Router>
    );
  }
}

export default App;
