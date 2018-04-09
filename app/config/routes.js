import React from 'react'
import Main from '../components/layouts/Main';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import TimelineView from '../views/groups/Timeline';

import {browserHistory, IndexRedirect, Route, Router} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main"/>
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
            <Route path="timeline" component={TimelineView}> </Route>
        </Route>
    </Router>

);