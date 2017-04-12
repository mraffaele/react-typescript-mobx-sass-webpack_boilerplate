import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

require("../sass/style.scss");

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);