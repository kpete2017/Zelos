import React from 'react'
import logo from '../assets/Zelos7_3.png'

export default class HeaderContent extends React.Component {


    render() {
        return(
            <header>
                <div className="title-card">
                    <img src={logo} width="200" height="50" alt="Zelos Esports"></img>
                </div>
                <div className="nav">
                    <h4>About</h4>
                    <h4>News</h4>
                    <h4>Media</h4>
                    <h4>Schedule</h4>
                    <h4>Teams</h4>
                    <h4>Store</h4>
                </div>
            </header>
        )
    }
}