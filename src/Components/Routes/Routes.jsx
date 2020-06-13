import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/popular' render={
      props => (<Showfilms currentPage='Popular' category='popular'{...props} />
    )} />    
  </Switch>
)

export default Routes
