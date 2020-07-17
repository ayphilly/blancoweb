/* eslint-disable */
import React , {Component} from 'react';
import './navbar.css';

import brand from '../svg/blancow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wow.js' ;
import { Link, NavLink } from 'react-router-dom';

export class Navbar extends Component {
    state = {
        disp : true,
        icon : 'angle-down' ,
        counter : 0
              
    } 
    componentDidMount (){
        const wow = new WOW();
        wow.init();
        
        var ele = document.getElementById('barIcon');
            ele.addEventListener('click',function (){
            ele.classList.toggle('change');
        })
        
        
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
    
    navFunc = () => {
       
        var main = document.getElementById('navul');
        var ele = main.getElementsByClassName('error-link');
        for (var i =0; i<ele.length; i++) {
            ele[i].addEventListener("click", function() {
                var mai = document.getElementById('error-li');
                var current = document.getElementsByClassName("acti");
                current[0].className = current[0].className.replace(" acti", "");
                this.className += " acti";
            });
        }
    }
    
    render () {
          const myIcon = this.state.icon;      
        return (
            <div className="newNav">
                <header>
                    <div className='mainnav'>
                        <div className="brand">
                            <img src={brand} className="App-brand" alt="Brand"/>
                        </div>
                        
                        <ul className='navul' id="navul">
                            <li > 
                                <NavLink
                                    exact to="/"
                                    className="error-link"
                                    activeClassName="acti"
                                    
                                >
                                    Home
                                </NavLink>
                                
                            </li>
                            <li >
                                <NavLink
                                    to="/about"
                                    className="error-link"
                                    activeClassName="acti" 
                                >
                                    About Us
                                </NavLink>                                
                            </li>
                            <li>
                                <NavLink
                                    to="/signin"
                                    className="error-link"
                                    activeClassName="acti"
                                >
                                    Sign-in
                                </NavLink>                                 
                            </li>
                            <li> 
                                <NavLink
                                    to="/shop"
                                    className="error-link"
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
                            <li className="cart-buy" onClick={this.cartCounter}>
                                <FontAwesomeIcon icon={['fas', 'shopping-bag'] } style={{ color: 'white', height:30, width:30}} size="2.5x"  />
                                <strong className="amount">{this.state.counter}</strong>
                            </li>

                        </ul>
                        <div id="barIcon" >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>                    
                    </div>
                </header>
                
            </div>
        )
    }
}

