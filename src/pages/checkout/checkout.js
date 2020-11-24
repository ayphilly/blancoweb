import React, { useState } from 'react';
import "./checkout.css"
import { Link } from 'react-router-dom';
import {Orders} from "./orders"
import {Cart} from "../cart/cart";
export const Checkout = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="checkout">
      {/* forms */}
      <div className = "checkout-form">
          <form>
                <h2>                    
                    CheckOut
                </h2>
                <h6>
                    Contact Information
                </h6>
                <div className="checkout-mail" >
                    <input type="text" className="co-email" name="email" id="Email" placeholder="Email"></input>
                </div>

                <h6>
                    Shipping Information 
                </h6>
                <div className="checkout-name">
                        <input type="text" className="co-fname" id="fname" name="fname" placeholder="First Name"></input>  
                        <input type="text" className="co-lname" name="lname" id="lname" placeholder="Last Name"></input>
                </div>
                <div className="checkout-contact">
                        <input type="text" className="co-number" id="pnumber" placeholder="+234"></input>                        
                        <input type="text" className="co-address" id="address" placeholder="Address"></input>
                </div>
                <div className="checkout-city">
                        <input type="text" className="co-country" name="country" id="ccountry" placeholder="Country"></input>
                        <input type="text" className="co-city" name="city" id="city" placeholder="City"></input>
                        <input type="text" className="co-town" name="town" id="town" placeholder="town"></input>
                </div>
                <div className="co-bottom">
                    <span className="co-span">
                        {/* <p className="co-sign"> {"<"}</p>  */}
                        <Link className="co-link" to="/cart" style={{textDecoration:'none'}}> ⬅  Return to cart</Link>
                    </span>
                    {/* <button type="submit" className="co-button-create">Continue to shipping</button>*/}
                </div>
    
            </form>
      </div>
      {/* Mini cart */}
      <div className = "checkout-cart">
        
        <Orders/>
      </div>
    </div>
  );
}

