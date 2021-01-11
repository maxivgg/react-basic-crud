import React, { Component } from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    userEdit: null,
    showForm: false,
  };

  componentDidMount() {
    const data = require("./data/MOCK_DATA.json");
    this.setState({ users: data });
  }

  handleShowForm = (showForm) => {
    this.setState({
      showForm: showForm,
      userEdit: null,
    });
    window.scrollTo(0, 0);
  };

  editUser = (user) => {
    this.setState({
      userEdit: user,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  updateUser = (id, first_name, last_name, email) => {
    this.setState({
      users: this.state.users.map((user) => {
        if (user.id === id) {
          user.first_name = first_name;
          user.last_name = last_name;
          user.email = email;
        }
        return user;
      }),
    });
  };

  delUser = (id) => {
    this.setState({
      users: [...this.state.users.filter((user) => user.id !== id)],
    });
  };

  addUser = (first_name, last_name, email) => {
    const newUser = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
    };

    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    return (
      <div className="App">
        {this.state.showForm ? (
          <AddUser
            addUser={this.addUser}
            updateUser={this.updateUser}
            userEdit={this.state.userEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <Users
            users={this.state.users}
            delUser={this.delUser}
            editUser={this.editUser}
            handleShowForm={this.handleShowForm}
          />
        )}
      </div>
    );
  }
}

export default App;
