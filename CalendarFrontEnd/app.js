import React from 'react'
// import Header from './components/header'
import Calendar from './components/calendar'

import SimpleDialogDemo from './components/createEvent'

// import {currentYear, currentMonth, currentDay } from '../util'

const App = () => {
  // console.log('in app.js')
  return (
    <div className="app">

      <SimpleDialogDemo/>
      {/*<Header month={currentMonth()} year={currentYear()}/>*/}
      <Calendar />
    </div>
  )
}

export default App