import React from 'react'
import Fade from 'react-reveal/Fade';
import './About.css'
import rl1 from '../assets/rl1.mp4'
import rl2 from '../assets/rl2.mp4'
import rl3 from '../assets/rl3.mp4'

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
                    Centralizing the three branches of esports; competition, content creation, and fashion, Zelos is a brand looking to bring people together, no matter their passion.
                    <br/>
                    <br/>
                    Headquartered in Colorado, Zelos is proud to represent the North American region as we compete against our international rivals. As esports continues to rise into the mainstream sports world, Zelos is working hard to innovate and provide fans with top of the line rosters, media content, and streetwear under an influential and compelling brand.
                </p>
                <video width="320" height="240" autoplay="true" muted="true" id="rl1" loop="true">
                    <source src={rl1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <video width="320" height="240" autoplay="true" muted="true" id="rl2" loop="true">
                    <source src={rl2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <video width="320" height="240" autoplay="true" muted="true" id="rl3" loop="true">
                    <source src={rl3} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <h2 onClick={ () => this.props.aboutPage()}>LEARN MORE</h2>
                </Fade>
            </div>
        )
    }
}
