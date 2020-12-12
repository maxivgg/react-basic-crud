import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddBoiler extends Component {
  state = {
    typeId: "",
    maintainceRate: "",
    hourMaintainceCost: "",
    hourEventualCost: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBoiler(
      this.state.typeId,
      this.state.maintainceRate,
      this.state.hourMaintainceCost,
      this.state.hourEventualCost
    );
    this.setState({
      typeId: "",
      maintainceRate: "",
      hourMaintainceCost: "",
      hourEventualCost: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h3>Add new boiler</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="typeId"
            style={inputStyle}
            placeholder="Type boiler..."
            value={this.state.typeId}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="maintainceRate"
            style={inputStyle}
            placeholder="Maintaince rate ..."
            value={this.state.maintainceRate}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="hourMaintainceCost"
            style={inputStyle}
            placeholder="Hour maintaince cost ..."
            value={this.state.hourMaintainceCost}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="hourEventualCost"
            style={inputStyle}
            placeholder="Hour maintaince cost ..."
            value={this.state.hourEventualCost}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="Submit"
            style={inputStyle}
          />
        </form>
      </div>
    );
  }
}

// PropTypes
AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
};

const inputStyle = {
  padding: "10px",
  width: "50%",
  margin: "5px",
  borderRadius: "5px",
};

export default AddBoiler;
