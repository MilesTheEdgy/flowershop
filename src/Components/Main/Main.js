import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeWrapper from '../Home/HomeWrapper.js'
import About from '../About/About.js'
import ShopWrapper from "../Shop/ShopWrapper"

const Main = () => {
return ( 
   <main>
    <Switch>
      <Route path='/home'> <HomeWrapper/> </Route>
      <Route path='/about'> <About/> </Route>
      <Route path ="/shop"> <ShopWrapper/> </Route>
    </Switch>
  </main>
  )
}

export default Main