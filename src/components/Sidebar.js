import React from 'react'

export default class Sidebar extends React.Component {

    handleTitleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    handleAboutClick = () => {
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth'
          });
    }

    handleStoreClick = () => {
        window.scrollTo({
            top: 1575,
            left: 0,
            behavior: 'smooth'
          });
    }

    handleTeamClick = () => {
        window.scrollTo({
            top: 2550,
            left: 0,
            behavior: 'smooth'
          });
    }

    render() {
        return(
            <div className="sidebar">
                <div className="dot">
                    <li onClick={() => this.handleTitleClick()}></li>
                </div>
                <div className="dot">
                    <li onClick={() => this.handleAboutClick()}></li>
                </div>
                <div className="dot">
                    <li onClick={() => this.handleStoreClick()}></li>
                </div>
                <div className="dot">
                    <li onClick={() => this.handleTeamClick()}></li>
                </div>
            </div>
        )
    }
}