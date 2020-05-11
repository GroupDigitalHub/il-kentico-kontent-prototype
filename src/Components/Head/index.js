import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SiteLogo from '../SiteLogo';
import TopNav from '../TopNav';
import TopBar from '../TopBar';

const styles = {
  root: {
    border: 0,
    height: 108,
    display: 'flex',
    flexDirection: 'column'
  },
};


const Head = props => {
  const { classes, language, changeLanguage, message } = props;
  return (
      <div className={classes.root}>
        <SiteLogo />
        <TopBar />
        <TopNav 
          language={language}
          changeLanguage={changeLanguage}
          message={message}
        /> 
      </div>
  );
};

export default withStyles(styles)(Head);
