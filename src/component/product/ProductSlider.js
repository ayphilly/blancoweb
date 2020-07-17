/* eslint-disable */ 
import React , {Component} from 'react'
import './product.css'
import {Product} from './Product'
import Product1 from '../../pictures/1.png'
import Product2 from '../../pictures/2.png'
import Product3 from '../../pictures/7.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  



export class ProductSlider extends Component {

    state = {
        boxone : [
            {
                name : 'Vader',
                item_image: Product1,
                price : '$30',
                colors : {
                    Red : true,
                    Blue : false,
                    Green : true,
                }
            },
            {
                name : 'Vader',
                item_image : Product2,
                price : '$30',
                colors : {
                    Red : true,
                    Blue : true,
                    Green : true,
                }
            },
            {
                name : 'Vader',
                item_image : Product3,
                price : '$30',
                colors : {
                    Red : true,
                    Blue : true,
                    Green : false,
                }
            },
            {
                name : 'Vader',
                item_image : Product3,
                price : '$30',
                colors : {
                    Red : true,
                    Blue : false,
                    Green : true,
                }
            }
            ,
            {
                name : 'Vader',
                item_image : Product3,
                price : '$30',
                colors : {
                    Red : true,
                    Blue : false,
                    Green : true,
                }
            }
            ,
            {
                name : 'Vader',
                item_image : Product3,
                price : '$30',
                colors : {
                    Red : true,
                    Blue : false,
                    Green : true,
                }
            }
            
        ],
        options: {
            loop: true,
            margin: 10,            
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                },
            },
        },
    }
    inner = this.state.boxone;
    products = this.state.boxone.map((value, index)=> {
        return (            
            <div className="item-a" key={index}>
                <Product
                    key = {index}
                    data = {value}        
                />
            </div>    
            
        )
        
    })
       
    render () {
      
        return (
            <div >
               
                <div className="neww">
                    <div className="pr-text">
                            <h3>NEW PRODUCTS</h3>
                    </div>
                    <div className='container ' id="slider-d" >            
                        <OwlCarousel items={this.state.boxone.length}  
                        className="owl-theme"  
                        id="owl-theme"
                        {...this.state.options}
                        autoplay={true}
                        > 
                        
                        {this.products}
                        </OwlCarousel>  
                    </div> 

                    <div className="carousel-prod-btn">
                    <button type="button" className="prod-btn">SHOP</button>
                </div>
                   
                </div>
                
               
            </div>           
        )
    }

}
