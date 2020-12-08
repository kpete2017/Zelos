import React from 'react'
import './Store-Page.css'
import FooterContent from './Footer-Content'
import ItemOne from '../components/ItemOne'
import ItemTwo from '../components/ItemTwo'
import ItemThree from '../components/ItemThree'


export default class StoreContent extends React.Component {

    render() {
        let width = window.innerWidth;
        if (width > 768) {
            return(
                <>
                    <div className="store-page2">
                        <div className="black-background2">
                            <div className="store-background-section">
                                <div className="item_one">
                                    <h1>item 1</h1>
                                    <ItemOne />
                                </div>
                                <div className="item_two">
                                    <h1>item 2</h1>
                                    <ItemTwo />
                                </div>
                                <div className="item_three">
                                    <h1>item 3</h1>
                                    <ItemThree />
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterContent />
                </>
            )
        }  else {
            return (
                <div className="store-page2">
                    <div className="black-background2">
                        <div className="store-background-section">
                            <div className="store-section2">
                                <div className="coming-soon-placeholder-2">
                                    <h1 id="merch-coming-soon">Merchandise Coming Soon</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}