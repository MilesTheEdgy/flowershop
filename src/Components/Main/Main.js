import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home.js'
import About from '../About/About.js'
import Shop from "../Shop/Shop.js"

const Main = () => (
  <main>
    <Switch>
      <Route path='/home'> <Home/> </Route>
      <Route path='/about'> <About/> </Route>
      <Route path ="/shop"> <Shop/> </Route>
    </Switch>
  </main>
)

export default Main