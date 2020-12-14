import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerItem from "./BoilerItem";

class Boilers extends Component {
  render() {
    return (
      <div>
        <h1>Boilers</h1>
        {this.props.boilers.map((boiler) => (
          <BoilerItem
          key={boiler.id}
          boiler={boiler}
          editBoiler={this.props.editBoiler}
          delBoiler={this.props.delBoiler} />

        ))}
      </div>
    );
  }
}

// PropTypes
Boilers.propTypes = {
  boilers: PropTypes.array.isRequired,
  delBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
};

export default Boilers;
