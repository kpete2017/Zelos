import React from 'react';
import './App.css';
import './Loading.css'
import HeaderContent from './containers/Header-Content'
import BodyContent from './containers/Body-Content'
import AboutContent from './containers/About-Content'
import StoreContent from './containers/Store-Content';
import TeamContent from './containers/Team-Content';
import ScrollToTop from './components/ScrollToTop'
import Apply from './components/Apply'
import logo from './assets/Zelos_Denver_Hue.png'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  state = {
    isLoading: true,
    homeResults: [],
    aboutResults: [],
    teamResults: []
  }

  componentDidMount() {

    fetch("http://localhost:3001/homes")
      .then(response => response.json())
      .then(results => this.setState({homeResults: results[0]}))

    fetch("http://localhost:3001/abouts")
      .then(response => response.json())
      .then(results => this.setState({aboutResults: results[0]}))

    fetch("http://localhost:3001/teams")
      .then(response => response.json())
      .then(results => this.setState({teamResults: results[0]}))

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000)
  }

  render() {
    if(this.state.isLoading) {
      return(
        <div id="zelos-loading-logo">
          <img height="400" width="600"src={logo} alt="Zelos Esports"></img>
          <h1>Loading...</h1>
        </div>
      )
    } else {
      return (
        <Router>
          <ScrollToTop/>
          <div className="App">
            <HeaderContent />
            <Switch>
              <Route exact path="/">
                <BodyContent 
                home={this.state.homeResults}
                aboutPage={this.handleAboutPage}
                teamPage={this.handleTeamPage}/>
              </Route>
              <Route path="/about">
                <AboutContent 
                about={this.state.aboutResults}
                />
              </Route>
              <Route path="/store">
                <StoreContent />
              </Route>
              <Route path="/teams">
                <TeamContent 
                  team={this.state.teamResults}
                />
              </Route>
              <Route path="/apply">
                <Apply />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
