import React from "react";
import "./About-Page.css";
import Fade from "react-reveal/Fade";
import logo from "../assets/Zelos2.png";
import Founder from "../components/Founder";

export default function AboutContent({ about, founders }) {
  let width = window.innerWidth;
  return (
    <div className="about-page">
      <div className="intro-section">
        <h1 id="what-is-zelos">{about.about_page_title}</h1>
        <img
          id="zelos-about-logo"
          height="400"
          width="500"
          src={logo}
          alt="Zelos Esports"
        ></img>
        <h4 id="about-zelos-text">{about.about_page_desc}</h4>
      </div>
      {width > 756 ? (
        <Fade bottom>
          <div className="founders-section">
            <h1 id="founders-text">Company Founders</h1>
            <div className="business">
              {founders.map((founder) => {
                return <Founder founder={founder} key={founder.id} />;
              })}
            </div>
          </div>
        </Fade>
      ) : (
        <div className="founders-section">
          <h1 id="founders-text">Company Founders</h1>
          <div className="business">
            {founders.map((founder) => {
              return <Founder founder={founder} key={founder.id} />;
            })}
          </div>
        </div>
      )}

      {width > 756 ? (
        <Fade bottom>
          <div className="company-info">
            <h2 className="contact-info">For Questions Contact: </h2>
            <div id="contact-about">
              <p className="email-tag">Email: {about.email}</p>
            </div>
          </div>
        </Fade>
      ) : null}
      <br />
    </div>
  );
}
