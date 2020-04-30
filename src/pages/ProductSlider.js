/* eslint-disable */ 
import React , {Component} from 'react'
import './product.css'
import {Product} from './Product'
import Product1 from '../pictures/1.png'
import Product2 from '../pictures/2.png'
import Product3 from '../pictures/7.png'

export class ProductSlider extends Component {

    state = {
        boxone : [
            {
                name : 'Vader',
                item_image: Product1,
                price : '$30',
                colors : 'R G B'
            },
            {
                name : 'Vader',
                item_image : Product2,
                price : '$30',
                colors : 'R G B'
            },
            {
                name : 'Vader',
                item_image : Product3,
                price : '$30',
                colors : 'R G B'
            },
            {
                name : 'Vader',
                item_image : Product3,
                price : '$30',
                colors : 'R G B'
            }
        ]
    }
    inner = this.state.boxone;
    products = this.inner.map((value, index)=> {
        return (
            <Product
                key = {index}
                data = {value}        
            />
        )
        
    })

    render () {
        return (
            <div className="carousel-product">
                <div id="carouselProduct" className="carousel slide" data-ride="carousel">
                <div className="neww">
                    <div className="pr-text">
                            <h3>NEW PRODUCTS</h3>
                    </div>

                        
                    <div className="carousel-inner" id="carousel-inner">
                        {this.products}                                               
                    </div>  
                </div>                   
                                      
                    
                        <a className="carousel-control-prev" id="product-prev" href="#carouselProduct" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"  ></span>
                            <span className="sr-only" aria-hidden="true">Previous</span>
                        </a>
                    
                    
                    <a className="carousel-control-next" id="product-next" href="#carouselProduct" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                        <span className="sr-only">Next</span>
                    </a>
                    <div className="carousel-prod-btn">
                        <button type="button" className="btn btn-dark">SHOP</button>
                    </div>
                </div>
            </div>
        )
    }

}