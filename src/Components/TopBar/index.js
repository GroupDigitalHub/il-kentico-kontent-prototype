import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    border: 0,
    height: 43,
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    marginLeft: '50%'
  },
  item: {
    padding: '0px 10px'
  },
  menuItem: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '400',
    fontSize: '16px',
  }
};


const TopBar = props => {
  const { classes } = props;

  const menuItems = [
    {
      label: 'Contact',
      href: `/contact`
    },
    {
      label: 'Health Insurance',
      href: `/help}`
    },
    {
      label: 'Login',
      href: `/login`
    }
  ];

  return (
    <nav className={classes.root}>
        <ul className={classes.menu}>
          {menuItems.map(({ label, href }) =>
            <li key={href} className={classes.item}>
              <a className={classes.menuItem} href={href}>{label}</a>
            </li>
          )}
        </ul>
    </nav>
  );
};


export default withStyles(styles)(TopBar);
