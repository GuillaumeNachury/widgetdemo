import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AppStore from './reducers';
import AsyncDispatchMiddleware from './middlewares';
import {extractParams} from './utils/URLParser';
import {setCompanyGridParams} from './actions';
import {isMobile} from './utils/MobileDetector';

const store = createStore(AppStore, applyMiddleware(AsyncDispatchMiddleware));

/**
 * Try to get company widget params (i.e. cwcols & cwrows ) from the URL
 * ?cwcols=4&cwrows=2
 */
const cwParams = extractParams(["cwcols", "cwrows"]);
/**
 * hook the logic to force a col and row count to 1 on mobile
 * or if no param found add default
 */
if(isMobile()) {
    cwParams.cwcols = 1;
    cwParams.cwrows = 1;
}
else{
    cwParams.cwcols = 3;
    cwParams.cwrows = 2;
}
store.dispatch(setCompanyGridParams({cols:Number(cwParams.cwcols), rows:Number(cwParams.cwrows)}));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
