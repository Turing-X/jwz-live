import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import 'normalize.css';

import Header from './Header';
import Content from './Content';

const propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

const App = props => (
  <div className={props.classes.body}>
    <Header />
    <Content>
      {props.children}
    </Content>
  </div>
);

App.propTypes = propTypes;

const styles = {
  body: {
    width: '100%',
    height: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
};

export default injectSheet(styles)(App);
