import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';

const propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.shape({
    wrapper: PropTypes.string.isRequired,
  }).isRequired,
};

const Header = ({ classes, children }) => (
  <div className={classes.wrapper}>
    {children}
  </div>
);

Header.propTypes = propTypes;

const styles = {
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    color: '#fff',
  },
};

export default injectSheet(styles)(Header);
