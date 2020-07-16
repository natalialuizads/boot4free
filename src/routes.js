/* eslint-disable no-unused-expressions */
import React from 'react'
import {BrowserRouter, Switch, Route}  from 'react-router-dom'

import Home from './pages/Home'
import CourseProfile from './pages/CourseProfile'

const Routes = () =>  (
    <BrowserRouter>
     <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/bootcamps/:id" component={CourseProfile}/>
     </Switch>
    </BrowserRouter>
)


export default Routes