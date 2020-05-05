import React , {Component} from 'react'
import './product.css';
import $ from 'jquery'

export class Product extends Component {
    
    
   
    onMouse = ()=> {
      /* var mimi = document.getElementById('div-image');
        mimi.addEventListener('mouseover', function () {
            var colorMe = document.getElementById('text-to');
            colorMe.style.backgroundColor = 'Black'
        }) */

        var colorMe = document.getElementById('text-to');
        colorMe.style.backgroundColor = 'black'
        colorMe.style.width = '100px';
        colorMe.style.height = '40px'
        colorMe.style.color = 'white'
    }
    myData = this.props.data;
    render () {
        return (
            <div className='item-container' id="product-car">
                <div className="carousel-item active">
                    <div className="item-product">
                        <div className="item-imaqe" id="div-image" >
                            <img className="d-block w-100" src={this.myData.item_image}  alt="First slide"/>
                        </div>
                        <div className="item-text">      
                            <h4 id="text-to">{this.myData.name}</h4>                                      
                            <p className="price"> {this.myData.price} </p>    
                            <div className="colors-round">
                               {this.myData.colors.Red && <div className="round-red"></div>}
                                {this.myData.colors.Blue && <div className="round-blue"></div>}
                                {this.myData.colors.Green && <div className="round-w"></div>}
                            </div>      
                        </div>
                       
                    </div>
                </div> 
            </div>

        )
    }
}

