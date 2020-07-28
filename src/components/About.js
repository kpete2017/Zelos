import React from 'react'
import Fade from 'react-reveal/Fade';

export default class about extends React.Component {

    handleLearnMoreClick = () => {
        alert("Nothing to learn")
    }

    render() {
        return(
            <div className="about">
                <Fade bottom>
                <h1>"WE ARE ZELOS"</h1>
                <p>
                    Followed by a basic description of the org 
                    and what its values are. 
                    Around here should be plastered pictures of 
                    players or competitions
                </p>
                <h2 onClick={this.handleLearnMoreClick}>LEARN MORE</h2>
                </Fade>
            </div>
        )
    }
}