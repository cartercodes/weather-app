import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import routes from './routes';

import App from "./components/App";
// import CommentBox from './components/CommentBox';
import './style.css';
require('./ably');

const ROOT_NODE = document.getElementById('root');
ReactDom.render((
    <BrowserRouter> 
        <Switch>
            <Route path='/' component={App} />
            {/* <Route path="comments" exact component={CommentBox} /> */}
        </Switch>
    </BrowserRouter>
    ),
    ROOT_NODE);