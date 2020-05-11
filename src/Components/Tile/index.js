import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      width:'50%',
      paddingBottom: '80px'
  },
  title: {
    fontSize: '18px !important',
    color: '#333',
    paddingBottom: '25px',
    fontWeight: '300',
    color: '#333'
  },
  content: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#606060',
    height: '110px'
  },
  button: {
    textAlign: 'center',
    width: '196px',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    height: '45px',
    border: '2px solid #24847c'
  },
  button1: {
    backgroundColor: '#24847c',
    color: '#fff !important',
    marginRight: '25px !important'
  },
  button2: {
    backgroundColor: '#fff',
    color: '#24847c !important'
  }
};


const Tile = props => {
  const { classes, title, content, button1, button2 } = props;


  return (
    <div className={classes.root}>
        <h2 className={classes.title}>{title.value}</h2>
        <p className={classes.content}>{content.value}</p>
        <button className={`${classes.button} ${classes.button1}`}>{button1.value}</button>
        <button className={`${classes.button} ${classes.button2}`}>{button2.value}</button>
    </div>
  );
};

export default withStyles(styles)(Tile);
