import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Boilers from "./components/Boilers";
import AddBoiler from "./components/AddBoiler";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    boilers: [],
    boilerEdit: null,
  };

  componentDidMount() {
    const dataBoilers = require("./data/boilers.json");
    this.setState({ boilers: dataBoilers });
  }

  // Edit Boiler
  editBoiler = (boiler) => {
    this.setState({
      boilerEdit: boiler,
    });
    window.scrollTo(0, 0);
  };

  // Update Boiler
  updateBoiler = (
    id,
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost
  ) => {
    this.setState({
      boilers: this.state.boilers.map((boiler) => {
        if (boiler.id === id) {
          boiler.typeId = typeId;
          boiler.maintainceRate = maintainceRate;
          boiler.hourMaintainceCost = hourMaintainceCost;
          boiler.hourEventualCost = hourEventualCost;
        }
        return boiler;
      }),
    });
  };

  // Delete Boiler
  delBoiler = (id) => {
    this.setState({
      boilers: [...this.state.boilers.filter((boiler) => boiler.id !== id)],
    });
  };

  // Add Boiler
  addBoiler = (
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost
  ) => {
    const newBoiler = {
      id: uuidv4(),
      typeId,
      maintainceRate,
      hourMaintainceCost,
      hourEventualCost,
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
              render={(props) => (
                <React.Fragment>
                  <AddBoiler
                    addBoiler={this.addBoiler}
                    updateBoiler={this.updateBoiler}
                    boilerEdit={this.state.boilerEdit}
                  />
                  <Boilers
                    boilers={this.state.boilers}
                    delBoiler={this.delBoiler}
                    editBoiler={this.editBoiler}
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
