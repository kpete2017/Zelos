import React from 'react'
import './Sidebar.css'

export default class Sidebar extends React.Component {

    handleScrollClick = (element) => {

        const findElement = document.getElementById(element);
        var offSet = this.getOffset(findElement).top
        window.scrollTo({
            top: offSet - 60,
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
            <div className="sidebar">
                <div class="dot">
                    <li onClick={() => this.handleScrollClick("title")}><span class="dot-text">Title</span></li>
                </div>
                <div class="dot">
                    <li onClick={() => this.handleScrollClick("about")}><span class="dot-text">About</span></li>
                </div>
                <div class="dot">
                    <li onClick={() => this.handleScrollClick("store")}><span class="dot-text">Store</span></li>
                </div>
                <div class="dot">
                    <li onClick={() => this.handleScrollClick("team")}><span class="dot-text">The Elite</span></li>
                </div>
            </div>
        )
    }
}
