import { _colorStringFilter } from 'gsap/gsap-core'
import React , {Component} from 'react'

import {PictureSlider} from '../../component/pictureslider'
import './shop_product.css'
import {cartpop} from "../../helper"

export class ShopProduct extends Component {
    
    state = {
        id : '',
        volume : 1,
        size : '',
        color : '',
        product : {
            name : "simpson",
            price : 20,          

        }
    }

    componentDidMount () {
        this.setState({
            id : this.props.match.params.id
        })
        
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

    getColor = (e) => {
        
        var element = e.target.className;        
        var colorParent = document.getElementById("productcolors")
        var current = colorParent.getElementsByClassName("colorBorder");
        current[0].className = current[0].className.replace(" colorBorder", "");
        e.target.className += " colorBorder";
        var color = element.split("-")[1]
        this.setState({
            color: color
        })
        
    }

    addToCart= () => {
        // localStorage.setItem('cartNumber', this.props.cartNumero)
        this.props.cartCounter();     
        var product = this.state.product;        
        product.color = this.state.color;
        product.volume = this.state.volume;
        product.id = this.state.id;
        if (localStorage.getItem("userProduct")) {
            this.setState({
                ...this.state,
                volume :this.state.volume + 1,
                product:{
                    ...this.state.product,                    
                }
            })
            product.volume =product.volume+1;
            

        }
        localStorage.setItem("userProduct", JSON.stringify(product) );
        cartpop();
        // product.add({volume : this.state.volume}) 

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
                        <div className="information-name">Simpson Collection  ID :: {this.props.match.params.id} </div>
                        <div className="information-price"> <strong> $50</strong></div>
                        <div className="information-color">
                            <p> Color : {this.state.color}</p>
                            <div className="colors-roundr" id ="productcolors">
                                <div className="round-red colorBorder" onClick={this.getColor}></div>
                                <div className="round-blue" onClick={this.getColor}></div>
                                <div className="round-white" onClick={this.getColor}></div>
                                <div className="round-black" onClick={this.getColor}></div>
                                
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
                            <button className="button-cart" onClick={this.addToCart}>ADD TO CART</button>
                            <button className="button-buy">BUY NOW</button>
                        </div>
                    </div>
                    
                </div>
                <div className="cart-popup">
                    
                    <p>Added <strong>{this.state.product.name}</strong> to the cart</p>
                    
                </div>
            </div>

        )
    }
}

//export default ShopProduct;