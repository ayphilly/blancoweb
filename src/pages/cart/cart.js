import React from 'react';
import './cart.css';
import {CartSingle} from './cartSingle';
export class Cart extends React.Component {

    render () {
        return (
            <div className="cart container-fluid">
                <div className="cart-table">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td><CartSingle/></td>
                            <td>Griffin</td>
                            <td>$100</td>
                            <td>$100</td>
                        </tr>
                        
                    </table>
                </div>
                <div className="calculations">
                    <div className="calc-details">
                        <div className="details-sub">
                            <p>SUBTOTAL</p>
                            <p> $20.00</p>
                        </div>

                        <div className="details-gr">
                            <p>GRAND TOTAL</p>
                            <p>$30.00</p>
                        </div>
                    </div>
                   
                    <div className="cart-button">                           
                        <button className="button-cout">CHECKOUT</button>
                        <button className="button-cs">CONTINUE SHOPPING</button>
                    </div>
                    
                     
                </div>

                
               

            </div>
        );
    }
}