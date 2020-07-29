import React from 'react'
import Title from '../components/Title'
import About from '../components/About'
import Schedule from '../components/Schedule'
import Teams from '../components/Teams'
import FeaturedItems from '../components/FeaturedItems'
import Sponsor from '../components/Sponsor'
import Sidebar from '../components/Sidebar'
import Twitch from '../components/Twitch'

export default class BodyContent extends React.Component {
    

    render() {
        return(
            <div className="body">
                <Title />
                <About />
                <FeaturedItems />
                <Schedule />
                <Teams />
                <Sponsor />
                <Sidebar />
                <Twitch />
            </div>
        )
    }
    
}