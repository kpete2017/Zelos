import React from 'react';
import './App.css';
import HeaderContent from './containers/Header-Content'
import BodyContent from './containers/Body-Content'
import FooterContent from './containers/Footer-Content'
import AboutContent from './containers/About-Content'
import StoreContent from './containers/Store-Content';
import TeamContent from './containers/Team-Content';


class App extends React.Component {

  state = {
    titlePage: true,
    aboutPage: false,
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
      storePage: false,
      teamPage: false
    })
  }

  handleAboutPage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: true,
      storePage: false,
      teamPage: false
    })
  }

  handleStorePage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      storePage: true,
      teamPage: false
    })
  }

  handleSchedulePage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      storePage: false,
      teamPage: false
    })
  }

  handleTeamPage = () => {
    this.scrollToTop()
    this.setState({
      titlePage: false,
      aboutPage: false,
      storePage: false,
      teamPage: true
    })
  }
  

  render() {

    let bodyRender

    if(this.state.titlePage) {
      bodyRender = <BodyContent 
      aboutPage={this.handleAboutPage}
      teamPage={this.handleTeamPage}
      />
    } else if (this.state.aboutPage) {
      bodyRender = <AboutContent />
    } else if (this.state.storePage) {
      bodyRender = <StoreContent />
    } else if (this.state.teamPage) {
      bodyRender = <TeamContent />
    }

    return (
      <div className="App">
        <HeaderContent 
          titlePage={this.handleTitlePage} 
          aboutPage={this.handleAboutPage} 
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
