import React, { Component } from "react";
import { TODAY, daysInMonth, daysOfWeek } from "../util";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

import Day from "./day";

class Calendar extends Component {
  constructor(props) {
    super(props);
    // const { classes } = props;

    this.state = {
      // classes,
      year: TODAY.getFullYear(),
      month: TODAY.getMonth() + 1, // getMonth() STARTS AT 0. Jan --> 0
      day: TODAY.getDay(), // getDay() STARTS AT 0. Sunday --> 0

      events: []
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then(res => res.data)
      .then(data => {
        this.setState({
          events: data
        });
      });
  }

  selectMonth = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderTable() {
    let leadingSpaces = new Date(
      `${this.state.month}, 1 ${this.state.year}`
    ).getDay();
    let numberOfDays = daysInMonth(this.state.month, this.state.year);

    let trailingSpaces = 0;

    let remainder = leadingSpaces + (numberOfDays % 7);
    if (remainder !== 0) trailingSpaces = 7 - remainder;

    let totalSpaces = leadingSpaces + numberOfDays + trailingSpaces;
    let numberOfWeeks = totalSpaces / 7;

    let counter = 1;
    let arrWeeks = [];

    for (let i = 0; i < numberOfWeeks; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (leadingSpaces > 0) {
          week.push(<Day />);
          leadingSpaces--;
        } else if (counter <= numberOfDays) {
          week.push(<Day date={counter} />);
          counter++;
        } else if (trailingSpaces > 0) {
          week.push(<Day />);
          trailingSpaces--;
        }
      }
      // console.log(week);
      arrWeeks.push(week);
    }
    console.log(arrWeeks)
    return arrWeeks.map(week => {
      return (
        <TableRow>
          {week.map(day => {
            // console.log(day)
            return(
              <TableCell style={{padding: '2px', }}>{day}</TableCell>
            )
          })}
        </TableRow>
      );
    });
  }

  render() {
    // let data = this.state.data
    // console.log("events: " + this.state.events);
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
              {this.renderTable() /* Renders the TableRow(s) and TableCell(s) */}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Calendar;
