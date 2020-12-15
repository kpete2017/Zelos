import React from 'react'
import Title from '../components/Title'
import About from '../components/About'
// import Schedule from '../components/Schedule'
import Teams from '../components/Teams'
import FeaturedItems from '../components/FeaturedItems'
import Sponsor from '../components/Sponsor'
import Sidebar from '../components/Sidebar'
import FooterContent from './Footer-Content'

export default class BodyContent extends React.Component {

    render() {
        return (
            <div className="body">
                <Title
                    title={this.props.home.top_title}
                />
                <About 
                    aboutPage={this.props.aboutPage}
                    title={this.props.home.about_title}
                    desc={this.props.home.about_desc}
                    link_one={this.props.home.link_one}
                    link_two={this.props.home.link_two}
                    link_three={this.props.home.link_three}

                />
                <FeaturedItems />
                {/* <Schedule /> */}
                <Teams 
                    teamPage={this.props.teamPage}
                    home={this.props.home}
                />
                <Sponsor home={this.props.home}/>
                <Sidebar />
                <FooterContent />
            </div>
        )
    }
    
}
