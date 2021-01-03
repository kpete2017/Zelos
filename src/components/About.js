import React from "react";
import Fade from "react-reveal/Fade";
import "./About.css";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let width = window.innerWidth;
    if (width > 768) {
      let linkOne = this.props.link_one;
      let linkTwo = this.props.link_two;
      let linkThree = this.props.link_three;
      return (
        <>
          <div id="container">
            <div id="top-triangle"></div>
            <div id="bottom-triangle"></div>
          </div>
          <Fade bottom>
            <div className="about" id="about">
              <div className="about-container">
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
                <h2 id="learn-more">
                  <Link to="/about" id="learn-more-text">
                    LEARN MORE
                  </Link>
                </h2>
              </div>
              <div className="videos">
                <iframe
                  width="320"
                  height="240"
                  id="rl1"
                  frameBorder="0"
                  title="Rl1"
                  src={linkOne}
                ></iframe>
                <iframe
                  width="320"
                  height="240"
                  id="rl2"
                  frameBorder="0"
                  title="R61"
                  src={linkTwo}
                ></iframe>
                <iframe
                  width="320"
                  height="240"
                  id="rl3"
                  frameBorder="0"
                  title="RL2"
                  src={linkThree}
                ></iframe>
              </div>
            </div>
          </Fade>
        </>
      );
    } else {
      return (
        <>
          <Fade bottom>
            <div className="about" id="about">
              <div className="about-container">
                <h1>WE ARE ZELOS</h1>
                <p>
                  Centralizing the three branches of esports; competition,
                  content creation, and fashion, Zelos is a brand looking to
                  bring people together, no matter their passion.
                  <br />
                  <br />
                  Headquartered in Colorado, Zelos is proud to represent the
                  North American region as we compete against our international
                  rivals. As esports continues to rise into the mainstream
                  sports world, Zelos is working hard to innovate and provide
                  fans with top of the line rosters, media content, and
                  streetwear under an influential and compelling brand.
                </p>
                <h2 id="learn-more">
                  <Link to="/about" id="learn-more-text">
                    LEARN MORE
                  </Link>
                </h2>
              </div>
            </div>
          </Fade>
        </>
      );
    }
  }
}
