import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    border: 0,
    height: 108,
    display: 'flex',
    flexDirection: 'column'
  },
};


const Hero = props => {
  const { classes, language, changeLanguage, message } = props;
  return (
      <div className={classes.root}>
Hero
      </div>
  );
};

export default withStyles(styles)(Hero);
