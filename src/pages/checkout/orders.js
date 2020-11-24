import React, {Component, useState, useEffect} from "react"
import "./orders.css";
import paystack from '../../pictures/paystack.png'
export const Orders = () => {
    return (
        <div className="myorders">
            <h2> 👚 Your Orders</h2>
            <div className="orders-products">
                <div className="products-head">
                    <p>Product(s)</p>
                    <p>Subtotal</p>
                </div>
                <div className="singlar-product">
                    <p>
                        Blanco Mischief Tshirt x 2
                    </p>

                    <p> ₦ 15,000.00 </p>
                </div>
                
            </div>
            <div className="orders-total">
                <div className="orders-subtotal">
                    <p>Subtotal</p>
                    <p> 15, 0000 </p>
                </div>
                <hr/>
                <div className="orders-ship">
                    <p>Shipping</p>
                    <p> Local Pick up </p>
                </div>
                <hr/>
                <div className="orders-subtax">                    
                    <p>Tax</p>
                    <p> 500 </p>
                </div>
                <hr/>
                <div className="orders-tt">                    
                    <p>Total</p>
                    <p>₦ 15,500.00 </p>
                </div>
            </div>

            <div className="orders-payment">
                <h5>Debit/credit Cards</h5>
                <p>Make payment using your debit and credit cards</p>
                <div className="paystack">
                    <img className="d-block" src={paystack} alt="paystack"/>                  

                </div>
                
                <p>
                    Your personal data will be used to process your
                    order, support your experience throughout this
                    website, and for other purposes described in our
                    privacy policy.
                </p>

                <button type="submit" className="orders-create">Place Order</button>       

            </div>

            <div className="orders-delivery">

            </div>
        </div>
    )
}