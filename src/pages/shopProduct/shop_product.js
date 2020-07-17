import React , {Component} from 'react'

import {PictureSlider} from '../../component/pictureslider'
import './shop_product.css'

export class ShopProduct extends Component {
    
    state = {
        volume : 1,
        size : ''
    }
    onSize = (e) =>{
        e.preventDefault();
        var element = e.target;
        this.setState({
            size : element.innerHTML
        })
        
    }
    
    increase = ()=> {
              
        this.setState({
            volume : this.state.volume+1
        })
        console.log(this.state.volume);
    }
    decrease = ()=> {
           
        if (this.state.volume >=1 )  {
            this.setState({
                volume : this.state.volume-1
            })
            console.log(this.state.volume);
        }  
        return;
    }
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

                    <div className="shop-product-desc">
                        <div className="desc-title">
                            <p>Product Detail</p>
                            <ul className="desc-details">
                                <li>6 oz. 100% cotton tubular jersey</li> 
                                <li>Double-needle bottom hem and sleeves</li>   
                                <li>Shoulder-to-shoulder tape</li>                                   
                                <li>Preshrunk to minimize shrinkage</li>                                   
                            </ul>
                        </div>
                       
                    </div>

                </div>
                <div className="shopProduct-information-container">
                    <div className="shopProduct-information">
                        <div className="information-name">Simpson Collection</div>
                        <div className="information-price"> <strong> $50</strong></div>
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
                                <p>Size : <strong className="size-cloth"> {this.state.size}  </strong> </p>
                                <div className="size-box-list">
                                    <ul>
                                        <li onClick={this.onSize}>S</li>
                                        <li onClick={this.onSize}>M</li>
                                        <li onClick={this.onSize}>L</li>
                                        <li onClick={this.onSize}>XL</li>
                                        <li onClick={this.onSize}>XXL</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            {/*<div className="list-size"></div>*/}
                        </div>
                    </div>
                    <div className="shopProduct-button-cont">
                        <div className="shopProduct-button">
                            <div className="counter">
                               
                                <button className="button-decrease" onClick={this.decrease}>-</button>
                                <input  disabled={false} type="text" value={this.state.volume}/>
                                <button className="button-increase" onClick={this.increase}>+</button>

                            </div>
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