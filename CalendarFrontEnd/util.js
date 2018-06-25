let yearNow = new Date(Date.now()).getFullYear()
let monthNow = new Date(Date.now()).getMonth()
let dateNow = new Date(Date.now()).getDate()
let dayNow = new Date(Date.now()).getDay()

export const months = ['zero', "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// console.log(yearNow)
// console.log(months[monthNow])
// console.log(days[dayNow])

export function currentYear(){
  return yearNow
}

export function currentMonth(){
  return months[monthNow]
}

export function currentDay(){
  return days[dayNow]
}

export function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}