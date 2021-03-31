import React, { useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.scss'

// import SideBar from './components/SideBar/SideBar'
// import Main from './components/Main/Main'
import Admin from './Pages/Admin'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/admin" component={Admin} />
    </Router>
  )
}

export default App
