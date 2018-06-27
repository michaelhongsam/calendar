export const TODAY = new Date();

let yearNow = TODAY.getFullYear();
let monthNow = TODAY.getMonth();
let dateNow = TODAY.getDate();
let dayNow = TODAY.getDay();

export const months = [
  "zero",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// console.log(yearNow)
// console.log(months[monthNow])
// console.log(days[dayNow])

export const currentYear = () => yearNow;

export const currentMonth = () => months[monthNow];

export const currentDay = () => days[dayNow];

export const daysInMonth = (month, year) => {
  //return getRange(new Date(year, month, 0).getDate()).map(day => new Date(this.state.year, this.state.month, day+1))
  return new Date(year, month, 0).getDate();
};

const getRange = number => [...Array(number).keys()]; // creates and array of size {number}, where the value of each element is the key of that element, the range of numbers from 0 to number 
