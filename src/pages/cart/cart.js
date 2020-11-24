import React from 'react';
import './cart.css';
import {CartSingle} from './cartSingle';
import { TimelineMax, Power2 } from "gsap";
import { Link } from 'react-router-dom';
import {Checkout} from "../checkout/checkout";
export class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carty : [
                {
                    id:'0',
                    price: 20,
                    quantity: 1,
                    total: 20,
                    
                },
                {
                    id:'1',
                    price: 30,
                    quantity: 1,
                    total: 20,
                    
                },
                {
                    id:'2',
                    price: 10,
                    quantity: 1,
                    total: 20,
                    
                },
            ] ,
            myAmount:0,           
        };
    }

    componentDidMount( ) {
        var totalAmount = 0;
        this.state.carty.forEach(element => {
            console.log(element)
            totalAmount += element.total; 
        });
        
        this.setState({
            myAmount: totalAmount
        }) 
    }
    myCartTo = async (...carty) =>{        
        if (this.state.carty.length <= 0) {
            this.setState({
                myAmount:0
            });
        }else {
            var totalAmount = 0;        
            carty[0].forEach(element => {
                console.log(element)
                totalAmount += element.total;                        
            });  
            return totalAmount;
        }
                  
    }
    DelCartItem = (id )=> { 
        const lt = document.querySelector('#Capa_'+id);   
        const trt = document.querySelector('#tr_'+id);        
        const tlm = new TimelineMax();
        tlm.to(lt,1, {rotation:360, ease:Power2.easeInOut})
            .to(lt,1, {opacity:.5, ease:Power2.easeInOut})
            .to(trt,.5, {opacity:0, ease:Power2.easeInOut});
        tlm.play();
        setTimeout( async () => {
            const carty = this.state.carty.filter(item => item.id !== id);
            var total = await this.myCartTo(carty);
            this.setState({
                ...this.state.carty,
                carty:carty,
                myAmount:total
            }) 
        }, 3000);
    }

    render () {        
        // this.myCartTo();    
        return (
            <div className="cart container-fluid">
                <div className="cart-table">
                    <table>
                        <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                        </tbody>
                        
                        <tbody>
                            {
                                this.state.carty.map(item => (
                                    <tr key={item.id} id={`tr_${item.id}`}>
                                        <td><CartSingle/> </td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.total}</td>
                                        <td>
                                        <svg className="pop-me" opacity="1" id={`Capa_${item.id}`} onClick={()=> this.DelCartItem(item.id)} enableBackground="new 0 0 386.667 386.667" height="20" width="20"  viewBox="0 0 386.667 386.667" xmlns="http://www.w3.org/2000/svg">
                                            <path  fill="red" d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/>
                                        </svg>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                        
                        
                    </table>
                </div>
                <div className="calculations">
                    <div className="calc-details">
                        <div className="details-sub">
                            <p>SUBTOTAL</p>
                            <p> {this.state.myAmount}</p>
                        </div>

                        <div className="details-gr">
                            <p>GRAND TOTAL</p>
                            <p>$30.00</p>
                        </div>
                    </div>                   
                    <div className="cart-button">                           
                        <button className="button-cout"><Link className="cart-link" to="/checkout" style={{textDecoration:'none'}}>CHECKOUT</Link></button>
                        <button className="button-cs">CONTINUE SHOPPING</button>
                    </div>   
                </div>
            </div>
        );
    }
}