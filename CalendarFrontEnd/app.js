import React from 'react'
// import Header from './components/header'
import Calendar from './components/calendar'

import CreateEvent from './components/createEvent'

const App = () => {
  return (
    <div className="app">

      <CreateEvent/>
      <Calendar />
    </div>
  )
}

export default App