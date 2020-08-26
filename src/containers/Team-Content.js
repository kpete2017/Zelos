import React from 'react'
import './Team-Page.css'
import Fade from 'react-reveal/Fade';
import FooterContent from './Footer-Content'
import RainbowTeam from '../team_components/RainbowTeam'
import RocketTeam from '../team_components/RocketTeam'
import ValorantTeam from '../team_components/ValorantTeam'


export default class TeamContent extends React.Component {

    handleRLClick = () => {
        window.scrollTo({
            top: window.innerHeight * 6.2,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleRainbowSixClick = () => {
        window.scrollTo({
            top: 300,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleValorantTeamClick = () => {
        window.scrollTo({
            top: window.innerHeight * 10.4 ,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return(
            <Fade>
                <div className="team-page">
                    <div class="team-page-nav-buttons">
                        <div id="rocket-league-nav-button" onClick={() => this.handleRLClick()}>
                            <h2 >Rocket League Team</h2>
                        </div>
                        <div id="rainbow-six-nav-button" onClick={() => this.handleRainbowSixClick()}>
                            <h2>Rainbow Six Team</h2>
                        </div>
                        <div id="valorant-nav-button" onClick={() => this.handleValorantTeamClick()}>
                            <h2>Valorant Team</h2>
                        </div>
                    </div>
                    <RainbowTeam />
                    <br/>
                    <br/>
                    <RocketTeam />
                    <br/>
                    <br/>
                    <ValorantTeam/>
                    <br/>
                    <br/>
                    <FooterContent />
                </div>
            </Fade>
        )

    }
}



