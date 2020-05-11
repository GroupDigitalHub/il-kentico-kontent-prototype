import React from 'react';
import { translate } from 'react-translate';
import { withStyles } from '@material-ui/core/styles';
import RichTextElement from './RichTextElement';

const styles = {
  root: {
    border: 0,
    height: 43,
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  },
  home: {
    height: '460px',
  },
  bannerContainer: {
    maxWidth: '960px !important',
    width: '100%'
  },
  homeBanner: {
    
  },
  homeBannerTitle: {
    textTransform: 'none !important',
    fontSize: '28px !important'
  },
  homeBannerText: {
    fontStyle: 'italic',
    lineHeight: '24px',
    fontSize: '16px !important'
  },
  bannerBox: {
    backgroundColor: '#475496',
    width: '460px',
    color: '#fff'
  },
  callToAction: {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    padding: '10px 25px 10px 25px',
    fontSize: '16px',
    margin: '0px 16px 22px !important'
  }
};

const Banner = props => {
  const { heroUnit, pageType, classes } = props;
  const images = heroUnit.image && heroUnit.image.value;
  const imageUrl = images && images.length && images[0].url;
  const isHome = pageType === 'home';
  const sectionClass = isHome ? `banner-section ${classes.home}` : 'banner-section';
  const bannerClass = isHome ? `${classes.homeBanner} ${classes.bannerContainer}` : `${classes.bannerContainer}`;
  const bannerTitleClass = isHome ? `banner-heading ${classes.homeBannerTitle}` : 'banner-heading';
  const bannerTextClass = isHome ? `banner-text ${classes.homeBannerText}` : 'banner-text';
  return (
    <section
      className={sectionClass}
      style={
        imageUrl ? { backgroundImage: 'url(' + imageUrl + ')' } : undefined
      }
    >
      <div className={bannerClass}>
        <div className={classes.bannerBox}>
          <h2 className={bannerTitleClass}>
            {heroUnit.title && heroUnit.title.value}
          </h2>
          {heroUnit.marketingMessage && (
            <RichTextElement
              element={heroUnit.marketingMessage}
              className={bannerTextClass}
            />
          )}
          <button className={classes.callToAction}>Find out more</button>
        </div>
      </div>
    </section>
  );
};

// export default translate('Bannr')(Banner);
export default withStyles(styles)(translate('Banner')(Banner));
