import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'

unregisterServiceWorker();

ReactDOM.render(
    <HashRouter basename="/">
        <App/>
    </HashRouter>, document.getElementById( 'root' ) );
