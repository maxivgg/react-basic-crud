import React, { Component } from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const styles = {
  table: {
    minWidth: 650,
    fontWeight: 600,
  },
};

class Users extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Users</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.handleShowForm(true)}
        >
          Add user
        </Button>

        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users.map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  editUser={this.props.editUser}
                  delUser={this.props.delUser}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

// PropTypes
Users.propTypes = {
  users: PropTypes.array.isRequired,
  delUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleShowForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(Users);
