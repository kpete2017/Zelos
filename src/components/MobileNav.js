import React, {Component} from 'react'
import './MobileNav.css'

export default class MobileNav extends Component {

    state = {
        isActive: false
    }

    toggleButton = () => {
        this.setState({
          isActive: !this.state.isActive
        })
    }
    
    render() {
        return (
            <div>
                <svg aria-hidden="true" onClick={() => this.toggleButton()} id={this.state.isActive ? 'clicked-hamburger': "hamburger"} focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                <div className={this.state.isActive ? 'mobile-navbar-active': 'mobile-navbar-hidden'} >
                    <h4 id="nav-item-mobile" onClick={() =>{ 
                        this.toggleButton()
                        this.props.titlePage()
                    }}>HOME</h4>
                    <h4 id="nav-item-mobile" onClick={() => {
                        this.toggleButton()
                        this.props.aboutPage()
                    }}>ABOUT</h4>
                    <h4 id="nav-item-mobile" onClick={() => {
                        this.toggleButton()
                        this.props.storePage()
                    }}>STORE</h4>
                    <h4 id="nav-item-mobile" onClick={() => {
                        this.toggleButton()
                        this.props.teamPage()
                    }}>TEAMS</h4>
                </div>
            </div>
        )     
    }
}
