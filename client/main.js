import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import { Bins } from '../imports/collections/bins';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

const routes = (
  <Router history={browserHistory}>
    <App>
      <Switch>
        <Route exact path="/" component={BinsList} />
        <Route path="/bins/:binId" component={BinsMain} />
      </Switch>
    </App>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'))
})
