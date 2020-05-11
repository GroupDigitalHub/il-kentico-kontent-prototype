import React, { Component } from 'react';
import { translate } from 'react-translate';
import { withStyles } from '@material-ui/core/styles';
import { HomeStore } from '../Stores/Home';
import Banner from '../Components/Banner.js';
import Tile from '../Components/Tile';
import SectionSecondary from '../Components/Sections/Secondary';
import SectionThird from '../Components/Sections/Third';
import Metadata from '../Components/Metadata';

const styles = {
  tiles: {
    background: '#fff',
    display: 'flex !important',
    justifyContent: 'center',
    paddingTop: '80px'
  },
  sectionContainer: {
    width: '100%',
    maxWidth: '960px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  secondary: {
    backgroundColor: '#efeeee',
    display: 'flex !important',
    justifyContent: 'center',
  },
  container3: {
    backgroundImage: 'url("../Assets/secondary.jpg")',
    width: '100%',
    backgroundAttachment: 'fixed',
    display: 'flex !important',
    justifyContent: 'center',
  }
};

let getState = props => {
  return {
    home: HomeStore.getHome(props.language)
  };
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = getState(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.addChangeListener(this.onChange);
    HomeStore.provideHome(this.props.language);
  }

  componentWillUnmount() {
    HomeStore.removeChangeListener(this.onChange);
    HomeStore.unsubscribe();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.language !== nextProps.language) {
      HomeStore.provideHome(nextProps.language);
      return {
        language: nextProps.language
      };
    }
    return null;
  }

  onChange() {
    this.setState(getState(this.props));
  }

  render() {
    const { home } = this.state;
    const { classes } = this.props;
    const { tiles } = home;
    const tileItems = tiles ? tiles.value : [];

    return (
      <div className="container">
        <Metadata
          title={home.metadataMetaTitle}
          description={home.metadataMetaDescription}
          ogTitle={home.metadataOgTitle}
          ogImage={home.metadataOgImage}
          ogDescription={home.metadataOgDescription}
          twitterTitle={home.metadataMetaTitle}
          twitterSite={home.metadataTwitterSite}
          twitterCreator={home.metadataTwitterCreator}
          twitterDescription={home.metadataTwitterDescription}
          twitterImage={home.metadataTwitterImage}
        />
        {home.heroUnit &&
          home.heroUnit.value &&
          home.heroUnit.value.length && (
            <Banner heroUnit={home.heroUnit.value[0]} pageType="home"/>
          )}
         {home.tiles &&
          home.tiles.value &&
          home.tiles.value.length && (
            <section className={classes.tiles}>
              <div className={classes.sectionContainer}>
              {tileItems.map(( { title, content, button1, button2 }) =>
                <Tile key={title} title={title} content={content} button1={button1} button2={button2}/>
              )}
              </div>
            </section>
          )} 
          {home.secondary_section &&
          home.secondary_section.value &&
          home.secondary_section.value.length && (
            <section className={classes.secondary}>
              <div className={classes.sectionContainer}>
                <SectionSecondary title={home.secondary_section.value[0].title} content={home.secondary_section.value[0].content_06da3d1} button={home.secondary_section.value[0].button} />
              </div>
            </section>
          )}   
          {home.third_section &&
          home.third_section.value &&
          home.third_section.value.length && (   
            <section className={classes.container3}>
              <div className={classes.sectionContainer}>
                <SectionThird 
                  title={home.third_section.value[0].title}
                  section1Title={home.third_section.value[0].section_1_title}
                  section1Content={home.third_section.value[0].section_1_content}
                  section2Title={home.third_section.value[0].section_2_title}
                  section2Content={home.third_section.value[0].section_2_content}
                  callToAction={home.third_section.value[0].call_to_action}
                />
              </div>
            </section> 
          )}   
      </div>
    );
  }
}

export default withStyles(styles)(translate('Home')(Home));
