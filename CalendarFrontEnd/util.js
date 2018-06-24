let yearNow = new Date(Date.now()).getFullYear();
let monthNow = new Date(Date.now()).getMonth();
let dateNow = new Date(Date.now()).getDate()
let dayNow = new Date(Date.now()).getDay()

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

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