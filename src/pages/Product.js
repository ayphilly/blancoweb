import React , {Component} from 'react'
import './product.css'

export class Product extends Component {
    
    myData = this.props.data; 
    render () {
        return (
            <div className='item-container' id="product-car">
                <div className="carousel-item active">
                    <div className="item-product">
                        <div className="item-imaqe">
                            <img className="d-block w-100" src={this.myData.item_image} alt="First slide"/>
                        </div>
                        <div className="item-text">      
                            <h4>{this.myData.name}</h4>                                      
                            <p className="price"> {this.myData.price} </p>    
                            <div className="colors-round">
                                <div className="round-red"></div>
                                <div className="round-blue"></div>
                                <div className="round-w"></div>
                            </div>      
                        </div>
                       
                    </div>
                </div> 
            </div>

        )
    }
}

