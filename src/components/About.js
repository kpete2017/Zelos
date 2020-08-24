import React from 'react'
import Fade from 'react-reveal/Fade';
import './About.css'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


export default class about extends React.Component {

    handleLearnMoreClick = () => {
        alert("Nothing to learn")
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <>
            <Fade bottom>
            <div className="about">
                <div className="about-container">
                    <h1>WE ARE ZELOS</h1>
                    <p>
                        Centralizing the three branches of esports; competition, content creation, and fashion, Zelos is a brand looking to bring people together, no matter their passion.
                        <br/>
                        <br/>
                        Headquartered in Colorado, Zelos is proud to represent the North American region as we compete against our international rivals. As esports continues to rise into the mainstream sports world, Zelos is working hard to innovate and provide fans with top of the line rosters, media content, and streetwear under an influential and compelling brand.
                    </p>
                    <h2 id="learn-more"><Link to="/about" id="nav-item">LEARN MORE</Link></h2>
                </div>
                <div className="videos">
                    <iframe width="320" height="240" id="rl1"
                            title="rl1"
                            frameBorder="0" 
                            src="https://www.youtube.com/embed/cQCejSske2Q?rel=0;&autoplay=1&controls=0&mute=1&loop=1&showinfo=0&modestbranding=1&playlist=cQCejSske2Q"
                            >
                    </iframe>
                    <iframe width="320" height="240" id="rl2"
                            title="rl2"
                            frameBorder="0" 
                            src="https://www.youtube.com/embed/ls_bjbYZZv8?rel=0;&autoplay=1&controls=0&mute=1&loop=1&showinfo=0&modestbranding=1&playlist=ls_bjbYZZv8"
                            >
                    </iframe>
                    <iframe width="320" height="240" id="rl3"
                            title="rl3"
                            frameBorder="0"
                            src="https://www.youtube.com/embed/jisAkfpszHA?rel=0;&autoplay=1&controls=0&mute=1&loop=1&showinfo=0&modestbranding=1&playlist=jisAkfpszHA"
                            >
                    </iframe>
                </div>
            </div>
            </Fade>
            </>
        )
    }
}
