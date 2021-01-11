import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class AddUser extends Component {
  state = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
  };

  componentDidMount() {
    if (this.props.userEdit) {
      this.handleEdit(this.props.userEdit);
    }
  }

  handleEdit = (userEdit) => {
    this.setState({
      id: userEdit.id,
      email: userEdit.email,
      first_name: userEdit.first_name,
      last_name: userEdit.last_name,
    });
    this.props.handleShowForm(true);
  };

  handleCleanForm = () => {
    this.setState({
      id: "",
      email: "",
      first_name: "",
      last_name: "",
    });
    this.props.handleShowForm(false);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateUser(
        this.state.id,
        this.state.first_name,
        this.state.last_name,
        this.state.email
      );
    } else {
      this.props.addUser(
        this.state.first_name,
        this.state.last_name,
        this.state.email
      );
    }
    this.handleCleanForm();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h3>{this.state.id !== "" ? "Edit User" : "Add new User"}</h3>
        <form onSubmit={this.onSubmit}>
          <input type="hidden" name="id" value={this.state.id} />
          <TextField
            label="First Name"
            variant="outlined"
            name="first_name"
            value={this.state.first_name}
            onChange={this.onChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="last_name"
            value={this.state.last_name}
            onChange={this.onChange}
          />
          <TextField
            label="Email User"
            variant="outlined"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

// PropTypes
AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  userEdit: PropTypes.object,
  handleShowForm: PropTypes.func.isRequired,
};

export default AddUser;
