import React from 'react'
import './Team-Page.css'
import Fade from 'react-reveal/Fade';
import FooterContent from './Footer-Content'
import RainbowTeam from '../team_components/RainbowTeam'
import RocketTeam from '../team_components/RocketTeam'


export default class TeamContent extends React.Component {

    handleScrollClick = (element) => {

        const findElement = document.getElementById(element);
        var offSet = this.getOffset(findElement).top
        console.log(offSet)
        window.scrollTo({
            top: offSet - 60,
            left: 0,
            behavior: 'smooth'
        });
    }

    getOffset = (el) => {
        const rect = el.getBoundingClientRect();
        return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
        };
    }

    render() {
        return(
            <Fade>
                <div className="team-page">
                    <div className="team-page-nav-buttons">
                        <div id="rocket-league-nav-button" onClick={() => this.handleScrollClick("rl-banner")}>
                            <h2 >Rocket League Team</h2>
                        </div>
                        <div id="rainbow-six-nav-button" onClick={() => this.handleScrollClick("r6-banner")}>
                            <h2>Rainbow Six Team</h2>
                        </div>
                    </div>
                    <RainbowTeam 
                        team={this.props.team}
                    />
                    <br/>
                    <br/>
                    <RocketTeam 
                        team={this.props.team}
                    />
                    <br/>
                    <br/>
                    <FooterContent />
                </div>
            </Fade>
        )
    }
}



