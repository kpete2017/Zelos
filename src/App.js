import React from 'react';
import './App.css';
import HeaderContent from './containers/Header-Content'
import BodyContent from './containers/Body-Content'
import FooterContent from './containers/Footer-Content'
import AboutContent from './containers/About-Content'
import MediaContent from './containers/Media-Content';
import StoreContent from './containers/Store-Content';
import ScheduleContent from './containers/Schedule-Content';
import TeamContent from './containers/Team-Content';


class App extends React.Component {

  state = {
    titlePage: true,
    aboutPage: false,
    mediaPage: false,
    storePage: false,
    schedulePage: false,
    teamPage: false
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  handleTitlePage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: true,
      aboutPage: false,
      mediaPage: false,
      storePage: false,
      schedulePage: false,
      teamPage: false
    })
  }

  handleAboutPage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: true,
      mediaPage: false,
      storePage: false,
      schedulePage: false,
      teamPage: false
    })
  }

  handleMediaPage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      mediaPage: true,
      storePage: false,
      schedulePage: false,
      teamPage: false
    })
  }

  handleStorePage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      mediaPage: false,
      storePage: true,
      schedulePage: false,
      teamPage: false
    })
  }

  handleSchedulePage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      mediaPage: false,
      storePage: false,
      schedulePage: true,
      teamPage: false
    })
  }

  handleTeamPage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      mediaPage: false,
      storePage: false,
      schedulePage: false,
      teamPage: true
    })
  }
  

  render() {

    let bodyRender

    if(this.state.titlePage) {
      bodyRender = <BodyContent />
    } else if (this.state.aboutPage) {
      bodyRender = <AboutContent />
    } else if (this.state.mediaPage) {
      bodyRender = <MediaContent />
    } else if (this.state.storePage) {
      bodyRender = <StoreContent />
    } else if (this.state.schedulePage) {
      bodyRender = <ScheduleContent />
    } else if (this.state.teamPage) {
      bodyRender = <TeamContent />
    }

    return (
      <div className="App">
        <HeaderContent 
          titlePage={this.handleTitlePage} 
          aboutPage={this.handleAboutPage} 
          mediaPage={this.handleMediaPage}
          storePage={this.handleStorePage}
          schedulePage={this.handleSchedulePage}
          teamPage={this.handleTeamPage}
          />
        {bodyRender}
        <FooterContent />
      </div>
    );
  }
}

export default App;
