import React from "react";
import "./App.css";
import "./Loading.css";
import HeaderContent from "./containers/Header-Content";
import BodyContent from "./containers/Body-Content";
import AboutContent from "./containers/About-Content";
import StoreContent from "./containers/Store-Content";
import TeamContent from "./containers/Team-Content";
import ScrollToTop from "./components/ScrollToTop";
import Success from "./components/Success";
import logo from "./assets/Zelos_Denver_Hue.png";
import Lookbook from "./containers/Lookbook-Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    isLoading: true,
    results: [],
  };

  componentDidMount() {
    fetch("https://zelos-backend.herokuapp.com/frontend/index")
      .then((response) => response.json())
      .then((result) => this.setState({ results: result, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div id="zelos-loading-logo">
          <img height="300" width="400" src={logo} alt="Zelos Esports"></img>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <Router>
          <ScrollToTop />
          <div className="App">
            <HeaderContent />
            <Switch>
              <Route exact path="/">
                <BodyContent
                  home={this.state.results.zelos}
                  teams={this.state.results.teams}
                />
              </Route>
              <Route path="/about">
                <AboutContent
                  about={this.state.results.zelos}
                  founders={this.state.results.founders}
                />
              </Route>
              <Route path="/store">
                <StoreContent store={this.state.results.zelos} items={this.state.results.items}/>
              </Route>
              <Route path="/teams">
                <TeamContent teams={this.state.results.teams} />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
              <Route path="/lookbook">
                <Lookbook images={this.state.results.zelos} />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
