/* eslint-disable */
import React , {Component} from 'react';
import './navbar.css';
import brand from '../../svg/blancow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wow.js' ;
import { Link, NavLink } from 'react-router-dom';
import { TimelineMax, Power2 } from "gsap";
import {navFunc, barCont} from '../../helper';

export class Navbar extends Component {
    state = {
        disp : true,
        icon : 'angle-down' ,
        counter : 0
              
    } 
    componentDidMount (){
        const wow = new WOW();
        wow.init();  
        barCont();
        
    }

    cartCounter = ()=> {
        
        this.setState({
            counter: this.state.counter +1
        })
        console.log(this.state.counter)
    }
    
    myfunction =  (e) => {
        e.preventDefault();
        
        if (this.state.disp === true )  {
             
            var ele = document.getElementById('dropy');     
            ele.style.display = "block"; 
            this.setState ({
                disp : false,
                icon : 'angle-up'  
            });
            
        }  
        else {
            var eleOff = document.getElementById('dropy');     
            eleOff.style.display = "none"; 
            this.setState ({
                disp : true,
                icon : 'angle-down'  
            });
        }    
        
    }

    render () {
          const myIcon = this.state.icon;      
        return (
            <div className="newNav">
                <header>
                    <div className='mainnav' id="myTopnav">
                        <div className="brand">
                            <img src={brand} className="App-brand" alt="Brand"/>
                        </div>
                        
                        <ul className='navul' id="navul">
                            <li > 
                                <NavLink
                                    exact to="/"                                    
                                    activeClassName="acti"                                    
                                >
                                    Home
                                </NavLink>
                                
                            </li>
                            <li >
                                <NavLink
                                    to="/about"                                    
                                    activeClassName="acti" 
                                >
                                    About Us
                                </NavLink>                                
                            </li>
                            <li>
                                <NavLink
                                    to="/signin"                                    
                                    activeClassName="acti"
                                >
                                    Sign-in
                                </NavLink>                                 
                            </li>
                            <li> 
                                <NavLink
                                    to="/shop"                                    
                                    activeClassName="acti"
                                >
                                    Shop <span onMouseOver={this.myfunction} className="wow bounceInUp"><FontAwesomeIcon icon={['fas', myIcon, ]}  />  </span>
                                </NavLink>                                
                                <ul className="dropdownNav" id="dropy">
                                    <li> <a href="#"> T-Sirts </a></li>
                                    <li> <a href="#"> Hoodie </a></li>
                                    <li> <a href="#"> Caps </a></li>
                                </ul>
                            </li>
                            

                        </ul>
                        
                        <div className="cart-buy" onClick={this.cartCounter}>
                            <FontAwesomeIcon icon={['fas', 'shopping-bag'] } style={{ color: 'white', height:30, width:30}} size="2x"  />
                            <strong className="amount">{this.state.counter}</strong>
                        </div>
                        <div className="bar-svg">
                            <svg className="hamburger" viewBox="0 0 100 100" width="50pt" xmlns="http://www.w3.org/2000/svg">            
                                <line className="l-one" x1="25" y1="42" x2="75" y2="42" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"/>
                                <line className="l-two" x1="25" y1="50" x2="75" y2="50" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"/>
                                <line className="l-three" x1="25" y1="58" x2="75" y2="58" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"/>
                            </svg>

                        </div>
                        
                        {/* <div id="barIcon" >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>                     */}
                    </div>
                </header>                
            </div>
        )
    }
}

