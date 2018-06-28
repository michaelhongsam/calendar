import React from "react";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';


// const emails = ["username@gmail.com", "user02@gmail.com"];
// const styles = {
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// };


export default class EventModal extends React.Component {
  state = {
    dialogTitle: this.props.dialogtitle,
    title: this.props.title,
    year: this.props.year,
    month: this.props.month,
    day: this.props.day,
    startTime: this.props.starttime,
    endTime: this.props.endtime,
    description: this.props.description,
    
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    console.log('saved')
    axios.post('/api', {
      title: this.state.title,
      year: this.state.year,
      month: this.state.month,
      day: this.state.day,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      description: this.state.description,
    })
    this.handleClose()
  };

  // handleListItemClick = value => {
  //   this.props.onClose(value);
  // };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">{this.state.dialogTitle}</DialogTitle>
        <div>
          <form noValidate autoComplete="off">
            <TextField
              id="title"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <br/>
            <TextField
              id="start-time"
              label="Start Time"
              value={this.state.startTime}
              onChange={this.handleChange('startTime')}
              margin="normal"
            />
            <br/>
            <TextField
              id="end-time"
              label="End Time"
              value={this.state.endTime}
              onChange={this.handleChange('endTime')}
              margin="normal"
            />
            <br/>
            <TextField
              id="description"
              label="Description"
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="normal"
            />
            <br/>
            <Button onClick={this.handleSave}>Save</Button>

          </form>
        </div>
      </Dialog>
    );
  }
}
