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

class SimpleDialog extends React.Component {
  state = {
    title: '',
    startTime: '',
    endTime: '',
    description: '',
    date: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleSave = () => {
    console.log('saved')
    axios.post('/api', {
      title: this.state.title,
      date: new Date(Date.now()),
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      description: this.state.description,
    })
    this.handleClose()
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Create new event</DialogTitle>
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
          {/*<List>
            {emails.map(email => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(email)}
                key={email}
              >
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={() => this.handleListItemClick("addAccount")}
            >
              <ListItemText primary="add account" />
            </ListItem>
          </List>*/}
        </div>
      </Dialog>
    );
  }
}

// SimpleDialog.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onClose: PropTypes.func,
//   selectedValue: PropTypes.string,
// };

const SimpleDialogWrapped = SimpleDialog;

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    // selectedValue: emails[1],
    // id: 0,
    date: 0,
    month: 0,
    year: 0,
    startTime: "",
    endTime: "",
    description: ""
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({
      selectedValue: value,
      open: false,
      date: new Date(Date.now()),
      startTime: "hey",
      endTime: "world",
      description: "test"
    });
  };

  render() {
    return (
      <div>
        <Typography variant="subheading">
          Selected: {this.state.selectedValue}
        </Typography>
        <Typography variant="body1">Date: {this.state.date.toString()}</Typography>
        <Typography variant="body1">Year: {this.state.year}</Typography>
        <Typography variant="body1">
          Start Time: {this.state.startTime}
        </Typography>
        <Typography variant="body1">End Time: {this.state.endTime}</Typography>
        <Typography variant="body1">
          Description: {this.state.description}
        </Typography>

        <Button onClick={this.handleClickOpen}>Click Me</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;
