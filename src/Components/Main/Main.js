import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'

const Main = () => (
  <main>
    <Switch>
      <Route path='/home'> <Home/> </Route>
      <Route path='/about'> <About/> </Route>
    </Switch>
  </main>
)

export default Main