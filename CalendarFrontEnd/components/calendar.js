import React, { Component } from "react";
import Event from './event'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  // cell: {
  //   borderStyle: 'solid',
  //   borderColor: 'lightgray',
  //   width: '12.8vw'
  // }
});

let week = 0;
function createData(sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
  week += 1;
  return { week, sunday, monday, tuesday, wednesday, thursday, friday, saturday };
}

const data = [
  createData(
    <div>1
      <Event/>
    </div>, '2', '3', '4', '5', '6', '7'),
  createData('8', '9', '10', '11', '12', '13', '14'),
  createData('15', '16', '17', '18', <div>19<Event></Event></div> , '20', '21'),
  createData('22', '23', '24', '25', '26', '27', '28'),
  // createData('29', '30', '31', '32', '33', '34', '35')
  createData(
    // <div>29<Event></Event></div>,
    // <div>30<Event></Event></div>,
    // <div>31<Event></Event></div>,
    // <div>32<Event></Event></div>,
    // <div>33<Event></Event></div>,
    // <div>34<Event></Event></div>,
    // <div>35<Event></Event></div>
     '29', '30', '31', '32', '33', '34', '35', 
    )
];

class Calendar extends Component{
  constructor(props){
    super(props)
    const { classes } = props;

    let year = new Date(Date.now()).getFullYear();
    let month = new Date(Date.now()).getMonth();
    this.state = {
      year, month, classes
    }
  }
  render(){
    return (
      <Paper className={this.state.classes.root}>
        <Table className={this.state.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Sunday</TableCell>
              <TableCell>Monday</TableCell>
              <TableCell>Tuesday</TableCell>
              <TableCell>Wednesday</TableCell>
              <TableCell>Thursday</TableCell>
              <TableCell>Friday</TableCell>
              <TableCell>Saturday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.sunday}</TableCell>
                  <TableCell>{n.monday}</TableCell>
                  <TableCell>{n.tuesday}</TableCell>
                  <TableCell>{n.wednesday}</TableCell>
                  <TableCell>{n.thursday}</TableCell>
                  <TableCell>{n.friday}</TableCell>
                  <TableCell>{n.saturday}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(Calendar);