import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';

const propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const Header = ({ classes }) => (
  <div className={classes.wrapper}>
    <h1 className={classes.text}>Jedes Wort Zählt!</h1>
  </div>
);

Header.propTypes = propTypes;

const styles = {
  wrapper: {
    backgroundColor: '#47b8e0',
    width: '100%',
    height: 64,
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 300,
    margin: 0,
  },
};

export default injectSheet(styles)(Header);
