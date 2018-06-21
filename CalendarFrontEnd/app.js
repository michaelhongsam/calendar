import React from 'react'
import Header from './components/header'
import Calendar from './components/calendar'

const App = () => {
  console.log('in app.js')
  return (
    <div className="app">
      <Header />
      <Calendar />
    </div>
  )
}

export default App