import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'

function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Login}></Route>
            <Route path="/home" component={Home}></Route>
        </Router>
    )
}
 
export default AppRouter;