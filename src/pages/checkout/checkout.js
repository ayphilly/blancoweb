import React, { useState, useEffect } from 'react';
import "./checkout.css"
import { Link } from 'react-router-dom';
import {Orders} from "./orders"
import {PaystackButton} from "react-paystack";
// import {Cart} from "../cart/cart";

export const Checkout = () => {
  // Declare a new state variable, which we'll call "count"
  const publicKey = "pk_your_public_key_here";
  const amount = 100000
  const [email, setEmail] = useState("")
  const [firstname, setFname] = useState("")
  const [lastname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [town, setTown] = useState("")
  const [country, setCountry] = useState("")
  

  

  
  const componentProps = {
    email,
    amount,
    metadata: {
      firstname,
      lastname,
      phone,
      address,
      city,
      town,
      country
    },
    publicKey,
    text : "Click to Pay Now ",
    onSuccess: () => alert( " Thanks for doing business with us! Come back soon!! " ),
    onClose: () => alert("Wait! Don't leave :( "),
  }

  return (
    <div className="checkout">
      {/* forms */}
      <div className = "checkout-form">
          <form  onSubmit={(e) =>   e.preventDefault()}>      
           
                <h2>                    
                    CheckOut 
                </h2>
                <h6>
                    Contact Information
                </h6>
                <div className="checkout-mail" >
                    <input type="text" className="co-email" name="email" id="Email" placeholder="Email" onChange = { (e)=> setEmail(e.target.value) }></input>
                </div>

                <h6>
                    Shipping Information 
                </h6>
                <div className="checkout-name">
                        <input type="text" className="co-fname" id="fname" name="fname" placeholder="First Name" onChange={(e) => setFname(e.target.value)}></input>  
                        <input type="text" className="co-lname" name="lname" id="lname" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} ></input>
                </div>
                <div className="checkout-contact">
                        <input type="text" className="co-number" id="pnumber" placeholder="+234" onChange={(e) => setPhone(e.target.value)} />                      
                        <input type="text" className="co-address" id="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="checkout-city">
                        <input type="text" className="co-country" name="country" id="country" placeholder="Country" onChange={(e) => setCountry(e.target.value)} ></input>
                        <input type="text" className="co-city" name="city" id="city" placeholder="City" onChange={(e) => setCity(e.target.value)} ></input>
                        <input type="text" className="co-town" name="town" id="town" placeholder="town" onChange={(e) => setTown(e.target.value)} ></input>
                </div>
                <div className="co-bottom">
                    <span className="co-span">
                        {/* <p className="co-sign"> {"<"}</p>  */}
                        <Link className="co-link" to="/cart" style={{textDecoration:'none'}}> ⬅  Return to cart</Link>
                    </span>
                    <PaystackButton {...componentProps} className="co-button-create"/>
                    {/* <button type="submit" className="co-button-create">Continue to shipping</button>*/}
                </div>
    
            </form>
      </div>
      {/* Mini cart */}
      <div className = "checkout-cart">
        
        <Orders totalAmount ={amount}/>
      </div>
    </div>
  );
}

