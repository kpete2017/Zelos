import React from 'react';
import './App.css';
import HeaderContent from './containers/Header-Content'
import BodyContent from './containers/Body-Content'
import AboutContent from './containers/About-Content'
import StoreContent from './containers/Store-Content';
import TeamContent from './containers/Team-Content';
import ScrollToTop from './components/ScrollToTop'
import Apply from './components/Apply'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <Router>
        <ScrollToTop/>
        <div className="App">
          <HeaderContent />
          <Switch>
            <Route exact path="/">
              <BodyContent 
              aboutPage={this.handleAboutPage}
              teamPage={this.handleTeamPage}/>
            </Route>
            <Route path="/about">
              <AboutContent />
            </Route>
            <Route path="/store">
              <StoreContent />
            </Route>
            <Route path="/teams">
              <TeamContent />
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

export default App;
