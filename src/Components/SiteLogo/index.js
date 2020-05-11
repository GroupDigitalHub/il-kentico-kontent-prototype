import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '312px'
  },
  logo: {
      width: '100%'
  }
};


const SiteLogo = props => {
  const { classes } = props;

  return (
      <a className={classes.root} href="/">
          <img className={classes.logo} src="https://www.irishlife.ie/sites/retail/files/images/IL_Shard.svg" alt="Irish Life logo"/>
    </a>
  );
};


export default withStyles(styles)(SiteLogo);
