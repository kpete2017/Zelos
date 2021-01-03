import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./About.css";
import { Link } from "react-router-dom";

export default function About({ props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let width = window.innerWidth;
  if (width > 768) {
    let linkOne = props.link_one;
    let linkTwo = props.link_two;
    let linkThree = props.link_three;
    return (
      <>
        <div id="container">
          <div id="top-triangle"></div>
          <div id="bottom-triangle"></div>
        </div>
        <Fade bottom>
          <div className="about" id="about">
            <div className="about-container">
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
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
  }
}
