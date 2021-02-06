import React from "react";
import Title from "../components/Title";
import About from "../components/About";
// import Schedule from '../components/Schedule'
import Team from "../components/Team";
import FeaturedItems from "../components/FeaturedItems";
import Sponsor from "../components/Sponsor";
import Sidebar from "../components/Sidebar";
import FooterContent from "./Footer-Content";
import Fade from "react-reveal/Fade";

export default class BodyContent extends React.Component {
  render() {
    let width = window.innerWidth;
    if(width > 800) {
      return (
        <div className="body">
          <Title title={this.props.home.top_title} />
          <About
            aboutPage={this.props.aboutPage}
            title={this.props.home.about_title}
            desc={this.props.home.about_desc}
            link_one={this.props.home.link_one}
            link_two={this.props.home.link_two}
            link_three={this.props.home.link_three}
          />
          <FeaturedItems />
          <Fade bottom>
            <h1 id="teams-text">The Zelos Elite</h1>
          </Fade>
          <div className="team-section-flex">
            {this.props.teams.map((team) => {
              return <Team home={this.props.home} team={team} key={team} />;
            })}
          </div>
          <Sponsor home={this.props.home} />
          <Sidebar />
          <FooterContent />
        </div>
      );
    } else {
      return (
        <div className="body">
          <Title title={this.props.home.top_title} />
          <About
            aboutPage={this.props.aboutPage}
            title={this.props.home.about_title}
            desc={this.props.home.about_desc}
            link_one={this.props.home.link_one}
            link_two={this.props.home.link_two}
            link_three={this.props.home.link_three}
          />
          <FeaturedItems />
          <h1 id="teams-text">The Zelos Elite</h1>
          <div className="team-section-flex">
            {this.props.teams.map((team) => {
              return <Team home={this.props.home} team={team} key={team} />;
            })}
          </div>
          <Sponsor home={this.props.home} />
          <Sidebar />
          <FooterContent />
        </div>
      );
    }
    
  }
}
