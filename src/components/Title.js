import React from 'react'
import logo from '../assets/Zelos5.png'

export default class Title extends React.Component {


    render() {
        return(
            <div className="title">
                <h1 id="zelos-title">ENTER CATCHY SAYING AND OR CATCH PHRASE RELATED TO THE ORG HERE</h1>
                <img id="zelos-logo" height="400" width="600"src={logo} alt="Zelos Esports"></img>
            </div>
        )
    }
}