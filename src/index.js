import React from 'react';
import ReactDOM from 'react-dom';

import App from "../src/components/App";
import './style.css';
require('./ably');

const ROOT_NODE = document.getElementById('root');
ReactDOM.render(<App />, ROOT_NODE);