import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: '#fff',
    border: 0,
    height: 65,
    display: 'flex !important',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    marginLeft: '30%'
  },
  item: {
    padding: '0px 20px'
  },
  menuItem: {
    textDecoration: 'none',
    color: '#475496',
    fontWeight: '400',
    fontSize: '18px',
  }
};


const TopNav = props => {
  const { classes } = props;

  const menuItems = [
    {
      label: 'Life Insurance',
      href: `/${props.language}/life-insurance}`
    },
    {
      label: 'Health Insurance',
      href: `/${props.language}/health-insurance}`
    },
    {
      label: 'Pensions',
      href: `/${props.language}/pensions}`
    },
    {
      label: 'Investments',
      href: `/${props.language}/investments}`
    },
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

export default withStyles(styles)(TopNav);
