import React from 'react'
import logo from '../assets/Zelos_Denver_Hue.png'
import './Title.css'


export default class Title extends React.Component {
    
    render() {
        return(
            <div className="title">
                <div className="title-black-tint">
                    <h1 id="zelos-title">MAKE YOUR IDOLS YOUR RIVALS</h1>
                    <img id="zelos-logo" height="400" width="600"src={logo} alt="Zelos Esports"></img>
                </div>
            </div>
        )
    }
}
