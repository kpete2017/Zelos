import React from 'react'
import './Team-Page.css'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import twitch from '../assets/twitch.png'
import WeirdFace from '../assets/WeirdFace.jpg'

export default function TeamContent(props) {
    return(
        <div className="team-page">
            <h1>Tom Clancy's Rainbow Six Siege</h1>
            <h4 className="players-r6">Players</h4>
            <div className="r6team">
            <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Spooman</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>IanMoments</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Lxgan</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Blueberry</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Boxy</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>YaBoiTex</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>OffBrandPanda</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <h1>Rocket League Squad</h1>
            <h4 className="players-r6">Players</h4>
            <div className="rlteam">
                <div id="player-card">
                    <div className="column1">
                        <p>Joey Dikeman</p>
                        <h2>JoeYang</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>ReedTheZephyr</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>Bonvie</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
                <div id="player-card">
                    <div className="column1">
                        <p>First Last</p>
                        <h2>jusaboink</h2>
                        <div className="playerplugs">
                            <img src={insta} width="35" height="35" alt="Zelos Esports" id="insta"></img>
                            <img src={twitter} width="35" height="35" alt="Zelos Esports" id="twitter"></img>
                            <img src={twitch} width="35" height="35" alt="Zelos Esports" id="twitch"></img>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ut nibh ut bibendum. Sed sed felis placerat, congue ex sit amet, facilisis elit. Nulla tempor, odio a rutrum vestibulum, mauris tellus volutpat mauris, vel commodo purus turpis ut sapien. Pellentesque viverra, erat in imperdiet lacinia, augue nibh tincidunt sem, a molestie massa metus in ligula. Sed vel lacus convallis, posuere risus nec, lacinia est. Duis sed mi odio. Aliquam venenatis sagittis tortor, et luctus tortor consequat eu. Mauris viverra sollicitudin neque, semper rutrum velit faucibus et. Etiam nec ante sed massa euismod vestibulum. Maecenas sollicitudin lacinia ullamcorper. Morbi ut tortor sed risus blandit fermentum.</p>
                    </div>
                    <div className="column3">
                        <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}



