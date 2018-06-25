import React, { Component } from "react";
import Header from "./header";
import Event from "./event";
import { months, days, currentYear, currentMonth, currentDay, daysInMonth } from "../util";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { Typography } from "@material-ui/core";

let week = 0;
function createData(sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
  week += 1;
  return {
    week, sunday, monday, tuesday, wednesday, thursday, friday, saturday
  };
}

const data = [
  // createData(
  //   <div>1
  //     <Event/>
  //   </div>, '2', '3', '4', '5', '6', '7'),
  createData("1", "2", "3", "4", "5", "6", "7"),
  createData("8", "9", "10", "11", "12", "13", "14"),
  createData("15", "16", "17", "18", "19", "20", "21"),
  // createData('15', '16', '17', '18', <div>19<Event></Event></div> , '20', '21'),
  createData("22", "23", "24", "25", "26", "27", "28"),
  createData("29", "30", "31", "32", "33", "34", "35")
  // createData(
  //   // <div>29<Event></Event></div>,
  //   // <div>30<Event></Event></div>,
  //   // <div>31<Event></Event></div>,
  //   // <div>32<Event></Event></div>,
  //   // <div>33<Event></Event></div>,
  //   // <div>34<Event></Event></div>,
  //   // <div>35<Event></Event></div>
  //    '29', '30', '31', '32', '33', '34', '35',
  //   )
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    // const { classes } = props;

    this.state = {
      // classes,
      year: new Date(Date.now()).getFullYear(),
      month: new Date(Date.now()).getMonth(),
      day: new Date(Date.now()).getDay(),

      data: []
    };
    this.updateTable();
  }

  updateTable = () => {
    // get selected month's first sunday
    let leadingZeros = new Date(`${this.state.month}, 1 ${this.state.year}`).getDay()

    let numberOfDays = daysInMonth(this.state.month, this.state.year)

    console.log(months[this.state.month] + '(' +this.state.month + ') has ' + numberOfDays + ' days')
    console.log(leadingZeros + ' leading zeros')
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log(days[leadingZeros]);
  };

  selectMonth = event => {
    // console.log('[event.target.name]: event.target.value,' + event.target.name + event.target.value )
    // console.log(
    //   "setting state " + event.target.name + " " + event.target.value
    // );
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log("updating table");
    this.updateTable();
  };

  render() {
    return (
      <div>
        <form autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="select-month">Month</InputLabel>
            <Select
              value={this.state.month}
              onChange={this.selectMonth}
              inputProps={{
                name: "month",
                id: "select-month"
              }}
            >
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>February</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>June</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Paper>
          <Table>
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
      </div>
    );
  }
}

export default Calendar;
