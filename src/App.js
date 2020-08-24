import React from 'react';
import './App.css';
import HeaderContent from './containers/Header-Content'
import BodyContent from './containers/Body-Content'
import AboutContent from './containers/About-Content'
import StoreContent from './containers/Store-Content';
import TeamContent from './containers/Team-Content';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  render() {

    return (
      <Router>
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
