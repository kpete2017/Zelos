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
    results: []
  }

  componentDidMount() {

    fetch("https://zelos-backend.herokuapp.com/zelos")
      .then(response => response.json())
      .then(result => this.setState({results: result[0]}))

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
                  home={this.state.results}
                  aboutPage={this.handleAboutPage}
                  teamPage={this.handleTeamPage}
                />
              </Route>
              <Route path="/about">
                <AboutContent 
                  about={this.state.results}
                />
              </Route>
              <Route path="/store">
                <StoreContent 
                  store={this.state.results}
                />
              </Route>
              <Route path="/teams">
                <TeamContent 
                  team={this.state.results}
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
