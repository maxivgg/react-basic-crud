import React, { Component } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

export class UserItem extends Component {
  render() {
    const { id, first_name, last_name, email } = this.props.user;
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell>{first_name + " " + last_name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.editUser.bind(this, this.props.user)}
          >
            edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.delUser.bind(this, id)}
          >
            delete
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

// PropTypes
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  delUser: PropTypes.func.isRequired,
};

export default UserItem;
