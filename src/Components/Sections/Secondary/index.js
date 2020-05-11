import React from 'react';
import { translate } from 'react-translate';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    border: 0,
    height: 43,
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '290px'
  },
  content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
  title: {
    color: '#333',
    fontSize: '25px !important',
    fontWeight: '200'
  },
  text: {
    margin: '20px 20px 40px 10px',
    fontSize: '16px',
    lineHeight: '24px',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    width: '215px'
  },
  button: {
    backgroundColor: '#24847c',
    color: '#fff !important',
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
  image: {
      marginRight: '25px',
      marginTop: '30px'
  }
};

const SectionSecondary = props => {
  const { title, content, button, classes } = props;
  return (
      <div className={classes.root}>
          <div className={classes.image} >
            <img src="assets/screen.png" className={classes.image} />
          </div>
          <div className={classes.content}>
            <h2 className={classes.title}>{title.value}</h2>
            <p className={classes.text}>{content.value}</p>
            <button className={classes.button}>{button.value}</button>
         </div>
      </div>
  );
};

export default withStyles(styles)(translate('Banner')(SectionSecondary));
