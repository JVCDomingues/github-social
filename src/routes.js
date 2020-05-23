import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import User from './pages/User/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/user/:username" component={User} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;