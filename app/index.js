import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router} from 'react-router';
import routes from './config/routes';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'

ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
);