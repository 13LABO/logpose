import React from 'react';
import ReactDOM from 'react-dom';
import './css/materialize/css/materialize.css';
import './css/index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';

ReactGA.initialize('UA-159843081-1');
const history = createBrowserHistory();
history.listen(({ pathname }) => {
	console.log(pathname);
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
