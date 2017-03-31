import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './Home';
import Submit from './Submit';
import About from './About';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home} />
      <Route path="/submit" component={Submit}/>
    <Route path="/About" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
