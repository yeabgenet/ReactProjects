import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router'
import Nav from './Components/Nav/Nav'

function App() {
  

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route /* path='' element={} *//>
      </Routes>
    </Router>
    </>
  )
}

export default App
