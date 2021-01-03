import React from "react";
import logo from "../assets/Zelos_Denver_Hue.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default class FooterContent extends React.Component {
  handleAboutClick = () => {
    const findElement = document.getElementById("about");
    var offSet = this.getOffset(findElement).top;
    window.scrollTo({
      top: offSet,
      left: 0,
      behavior: "smooth",
    });
  };

  handleOnInstaClick = () => {
    window.open("https://www.instagram.com/zeloscompete/");
  };

  handleOnTwitterClick = () => {
    window.open("https://twitter.com/ZelosCompete");
  };

  getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  };

  render() {
    let width = window.innerWidth;
    return (
      <div className="footer">
        <div className="company">
          <h4>COMPANY</h4>
          <p onClick={this.handleAboutClick}>About</p>
          <p>
            <Link to="/about" className="footer-link">
              Contact
            </Link>
          </p>
          <p>
            <Link to="/about" className="footer-link">
              Become a partner
            </Link>
          </p>
          <p>
            <Link to="/store" className="footer-link">
              Store
            </Link>
          </p>
        </div>
        <div className="team-footer">
          <h4>TEAMS</h4>
          <p>
            <Link to="/teams" className="footer-link">
              Rocket League
            </Link>
          </p>
          <p>
            <Link to="/teams" className="footer-link">
              Tom Clancy's Rainbow Six Siege
            </Link>
          </p>
        </div>
        <div className="social">
          <h4>SOCIAL</h4>
          <p onClick={() => this.handleOnInstaClick()}>Instagram</p>
          <p onClick={() => this.handleOnTwitterClick()}>Twitter</p>
        </div>
        {width > 800 ? (
          <img
            id="zelos-footer-logo"
            height="400"
            width="600"
            src={logo}
            alt="Zelos Esports"
          />
        ) : null}
      </div>
    );
  }
}
