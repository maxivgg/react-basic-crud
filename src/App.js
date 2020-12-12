import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Boilers from './components/Boilers';
import AddBoiler from './components/AddBoiler';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    boilers: []
  };

  componentDidMount() {
    const dataBoilers = require('./data/boilers.json');
    this.setState({ boilers: dataBoilers });
  }

  // Delete Boiler
  delBoiler = id => {
      this.setState({
        boilers: [...this.state.boilers.filter(boiler => boiler.id !== id)]
      })
  };

  // Add Boiler
  addBoiler = (typeId, maintainceRate, hourMaintainceCost, hourEventualCost) => {
    const newBoiler = {
      "id": uuidv4(),
      typeId,
      maintainceRate,
      hourMaintainceCost,
      hourEventualCost
    };

    this.setState({ boilers: [...this.state.boilers, newBoiler] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddBoiler addBoiler={this.addBoiler} />
                  <Boilers
                    boilers={this.state.boilers}
                    delBoiler={this.delBoiler}
                  />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;