import React , {Component} from 'react'

import {PictureSlider} from './pictureslider'
import '../App.css'

export class ShopProduct extends Component {
    
    render () {
        return (
            <div className="shopProduct-container">
                <div className="shopProduct-ima">
                    <div className="imaqe-section">
                        <PictureSlider/>
                    </div>

                    <div className="sister-imaqes">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <div className="shopProduct-information-container">
                    <div className="shopProduct-information">
                        <div className="information-name"></div>
                        <div className="information-price"></div>
                        <div className="information-color">
                            <p> Color : </p>
                            <div className="colors-roundr">
                                <div className="round-red"></div>
                                <div className="round-blue"></div>
                                <div className="round-w"></div>
                                <div className="round-red"></div>
                                <div className="round-blue"></div>
                            </div>
                        </div>
                        <div className="information-size">
                            <div className="size-box">
                                <p>Size : </p>
                                <div className="size-box-list">
                                    <ul>
                                        <li>S</li>
                                        <li>M</li>
                                        <li>L</li>
                                        <li>XL</li>
                                        <li>XXL</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="list-size"></div>
                        </div>
                    </div>
                    <div className="shopProduct-button-cont">
                        <div className="shopProduct-button">
                            <button className="button-cart">ADD TO CART</button>
                            <button className="button-buy">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

//export default ShopProduct;