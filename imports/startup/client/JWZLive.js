import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from '/imports/api/redux/store';

import AppContainer from '/imports/ui/containers/AppContainer';
import HelpMe from '/imports/ui/components/HelpMe';

const JWZLive = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HelpMe} />
        <Route path="*" component={HelpMe} />
      </Route>
    </Router>
  </Provider>
);

export default JWZLive;
