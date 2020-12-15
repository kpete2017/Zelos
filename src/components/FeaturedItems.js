import React from 'react'
import Fade from 'react-reveal/Fade';
import './FeaturedItems.css'
import { Link } from "react-router-dom";



export default function FeaturedItems() {

    return(
        <div className="store-section" id="store">
            <Fade>
                <div className="black-background">
                    <h1 id="featured-item-title-text">Zelos Merchandise Available Now</h1>
                    <h4 id="shop-now"><Link to="/store">Shop</Link></h4>
                </div>
            </Fade>
        </div>
    )

}
