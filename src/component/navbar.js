/* eslint-disable */
import React , {Component} from 'react';
import './navbar.css';

import brand from '../svg/blancow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wow.js' ;
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    state = {
        disp : true,
        icon : 'angle-down' ,
              
    } 
    componentDidMount (){
        const wow = new WOW();
        wow.init();
        
        var ele = document.getElementById('barIcon');
            ele.addEventListener('click',function (){
            ele.classList.toggle('change');
        })

        
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
                    <div className='mainnav'>
                        <div className="brand">
                            <img src={brand} className="App-brand" alt="Brand"/>
                        </div>
                        
                        <ul className='navul'>
                            <li> 
                                <Link className="error-link" to="/" style={{textDecoration:'none'}}>
                                    
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="error-link" to="/about" style={{textDecoration:'none'}}>
                                    
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className="error-link" to="/signin" style={{textDecoration:'none'}}>
                                   
                                    Sign-In
                                </Link>
                            </li>
                            <li> 
                                <Link onMouseOver={this.myfunction} className="error-link" to="/shop" style={{textDecoration:'none'}}>Shop <span className="wow bounceInUp"><FontAwesomeIcon icon={['fas', myIcon, ]}  />  </span>  </Link>
                                <ul className="dropdownNav" id="dropy">
                                    <li> <a href="#"> T-Sirts </a></li>
                                    <li> <a href="#"> Hoodie </a></li>
                                    <li> <a href="#"> Caps </a></li>
                                </ul>
                            </li>
                            <li className="cart-buy">
                                <FontAwesomeIcon icon={['fas', 'shopping-bag'] } style={{ color: 'white', height:30, width:30}} size="2.5x" />
                                <strong class="amount">0</strong>
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

