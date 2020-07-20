import React from 'react';
import Product2 from '../../pictures/11.png';
import './cart.css';
export class CartSingle extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="cart-object">
                    <div className="cart-image">
                        <img className="d-block" src={Product2} alt="First slide"/>
                    </div>
                    <div className="cart-details">
                        <p><strong>The Blanco Mischief Collection</strong></p>
                        <p className="color">Color: Orange</p>
                    </div>
                </div>
            </div>
        );
    }
}