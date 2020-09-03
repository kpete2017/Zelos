import React from 'react'
import './Sidebar.css'

export default class Sidebar extends React.Component {

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
        let width = window.innerWidth;
        if (width > 768) {
            return(
                <div className="sidebar">
                    <div className="dot">
                        <li onClick={() => this.handleScrollClick("title")}></li>
                    </div>
                    <div className="dot">
                        <li onClick={() => this.handleScrollClick("about")}></li>
                    </div>
                    <div className="dot">
                        <li onClick={() => this.handleScrollClick("store")}></li>
                    </div>
                    <div className="dot">
                        <li onClick={() => this.handleScrollClick("team")}></li>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}
