import React from 'react'
import './Store-Page.css'
import FooterContent from './Footer-Content'
import ItemOne from '../components/ItemOne'
import ItemTwo from '../components/ItemTwo'
import ItemThree from '../components/ItemThree'


export default class StoreContent extends React.Component {

    render() {
        let width = window.innerWidth;
        return(
            <>
                <div className="store-page2">
                    <div className="black-background2">
                        <div className="store-background-section">
                            <div className="item-one">
                                <h1>{this.props.store.item1_name}</h1>
                                <ItemOne 
                                    store={this.props.store}
                                />
                            </div>
                            <div className="item-two">
                                <h1>{this.props.store.item2_name}</h1>
                                <ItemTwo 
                                    store={this.props.store}
                                />
                            </div>
                            <div className="item-three">
                                <h1>{this.props.store.item3_name}</h1>
                                <ItemThree 
                                    store={this.props.store}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {width > 800 ? <FooterContent /> : null}
            </>
        )
    }
}