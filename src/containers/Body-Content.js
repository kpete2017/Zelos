import React from 'react'
import Title from '../components/Title'
import About from '../components/About'
import Schedule from '../components/Schedule'
import Teams from '../components/Teams'
import FeaturedItems from '../components/FeaturedItems'
import Sponsor from '../components/Sponsor'
import Sidebar from '../components/Sidebar'
import FooterContent from './Footer-Content'

export default class BodyContent extends React.Component {

    render() {
        return (
            <div className="body">
                <Title />
                <About aboutPage={this.props.aboutPage}/>
                <FeaturedItems />
                <Schedule />
                <Teams teamPage={this.props.teamPage}/>
                <Sponsor />
                <Sidebar />
                <FooterContent />
            </div>
        )
    }
    
}
