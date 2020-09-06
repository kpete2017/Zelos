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
                    <div class="dot" id="title-dot">
                        <li onClick={() => this.handleScrollClick("title")}><span class="dot-text">Title</span></li>
                    </div>
                    <div class="dot" id="about-dot">
                        <li onClick={() => this.handleScrollClick("about")}><span class="dot-text">About</span></li>
                    </div>
                    <div class="dot" id="projects-dot">
                        <li onClick={() => this.handleScrollClick("store")}><span class="dot-text">Store</span></li>
                    </div>
                    <div class="dot" id="blogs-dot">
                        <li onClick={() => this.handleScrollClick("team")}><span class="dot-text">Elite</span></li>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}
