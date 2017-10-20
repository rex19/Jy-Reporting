import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import line1Index from './components/line1Index.js';
import line2Index from './components/line2Index.js';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={line1Index} />
            <Route path="line1" component={line1Index} />
            <Route path="line2" component={line2Index} />
        </Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();



