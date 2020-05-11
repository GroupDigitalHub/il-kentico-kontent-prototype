import React from 'react';
import { translate } from 'react-translate';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: '#fff',
    clipPath: 'polygon(0 0,100% 24%,80% 73%,0% 89%)',
    paddingTop: '150px',
    paddingLeft: '30px',
    paddingRight: '100px',
    height: '800px',
    width: '60%'
  },
  title: {
      margin: '0em 0.0em',
      color: '#475496 !important'
  },
  subtitle: {
    fontWeight: '200'
  },
  content: {

  },
  link: {

  }
};

const SectionThird = props => {
  const { classes, title, section1Title, section1Content, section2Title, section2Content, callToAction } = props;
  return (
      <div className={classes.root}>
        <h2 className={classes.title}>{title.value}</h2>
        <h3 className={classes.subtitle}>{section1Title.value}</h3>
        <p className={classes.content}>{section1Content.value}</p>
        <h3 className={classes.subtitle}>{section2Title.value}</h3>
        <p className={classes.content}>{section2Content.value}</p>
        <a className={classes.link}>{callToAction.value}</a>
      </div>
  );
};

export default withStyles(styles)(translate('Banner')(SectionThird));
