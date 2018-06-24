import React, { Component } from "react";
import Header from "./header";
import Event from "./event";
import { currentYear, currentMonth, currentDay } from "../util";

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
    const { classes } = props;

    this.state = {
      classes,
      year: currentYear(),
      month: currentMonth(),
      day: currentDay(),
      data: []
    };
    // this.updateTable();
  }

  updateTable = () => {
    // get selected month's first sunday
    let counter = new Date(`${this.state.month} 1`).getDay();
    console.log(this.state.month);
    console.log(counter);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    console.log(days[counter]);
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
    // this.updateTable();
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
              <MenuItem value={"January"}>January</MenuItem>
              <MenuItem value={"February"}>February</MenuItem>
              <MenuItem value={"March"}>March</MenuItem>
              <MenuItem value={"April"}>April</MenuItem>
              <MenuItem value={"May"}>May</MenuItem>
              <MenuItem value={"June"}>June</MenuItem>
              <MenuItem value={"July"}>July</MenuItem>
              <MenuItem value={"August"}>August</MenuItem>
              <MenuItem value={"September"}>September</MenuItem>
              <MenuItem value={"October"}>October</MenuItem>
              <MenuItem value={"November"}>November</MenuItem>
              <MenuItem value={"December"}>December</MenuItem>
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
