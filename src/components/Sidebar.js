import React from 'react'

export default class Sidebar extends React.Component {

    handleClick = (event) => {
        
    }

    render() {
        return(
            <div className="sidebar">
                <div className="dot">
                    <li onClick={(event) => this.handleClick(event)}></li>
                </div>
                <div className="dot">
                    <li></li>
                </div>
                <div className="dot">
                    <li></li>
                </div>
                <div className="dot">
                    <li></li>
                </div>
            </div>
        )
    }
}