import React from 'react'
import './Team-Page.css'
import Fade from 'react-reveal/Fade';
import FooterContent from './Footer-Content'
import RainbowTeam from '../team_components/RainbowTeam'
import RocketTeam from '../team_components/RocketTeam'
import ValorantTeam from '../team_components/ValorantTeam'


export default class TeamContent extends React.Component {

    handleScrollClick = (element) => {

        const findElement = document.getElementById(element);
        var offSet = this.getOffset(findElement).top
        console.log(offSet)
        window.scrollTo({
            top: offSet,
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
                    <div class="team-page-nav-buttons">
                        <div id="rocket-league-nav-button" onClick={() => this.handleScrollClick("rl-banner")}>
                            <h2 >Rocket League Team</h2>
                        </div>
                        <div id="rainbow-six-nav-button" onClick={() => this.handleScrollClick("r6-banner")}>
                            <h2>Rainbow Six Team</h2>
                        </div>
                        <div id="valorant-nav-button" onClick={() => this.handleScrollClick("val-banner")}>
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



