import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import home from './home/home'

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={home} />
        </Switch>
    </Router>
)

export default BasicRoute