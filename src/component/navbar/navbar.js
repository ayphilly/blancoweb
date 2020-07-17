/* eslint-disable */
import React , {Component} from 'react';
import './navbar.css';
import brand from '../../svg/blancow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wow.js' ;
import { Link, NavLink } from 'react-router-dom';
import { TimelineMax, Power2 } from "gsap";


export class Navbar extends Component {
    state = {
        disp : true,
        icon : 'angle-down' ,
        counter : 0
              
    } 
    componentDidMount (){
        const wow = new WOW();
        wow.init();
        
        // var ele = document.getElementById('barIcon');
        //     ele.addEventListener('click',function (){
        //     ele.classList.toggle('change');
        // })

        const hamburger = document.querySelector('.hamburger');
        const lineOne = hamburger.querySelector('.l-one');
        const lineTwo = hamburger.querySelector('.l-two');
        const lineThree = hamburger.querySelector('.l-three');

        const tlm = new TimelineMax({paused:true, reversed:true});

        tlm
         .to(lineTwo,.125, {scaleX:0, ease: Power2.easeInOut})
         .to(lineOne, .5, {y:8, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")
         .to(lineThree, .5, {y:-8, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")
         .to(hamburger,.25, {rotation:360, ease:Power2.easeInOut} )
         .to(lineOne, .25, {rotation:45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")
         .to(lineThree, .25, {rotation:-45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross");
        
        hamburger.addEventListener('click', _=>{
            tlm.reversed()? tlm.play() :tlm.reverse();
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
                                <FontAwesomeIcon icon={['fas', 'shopping-bag'] } style={{ color: 'white', height:30, width:30}} size="2x"  />
                                <strong className="amount">{this.state.counter}</strong>
                            </li>

                        </ul>
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

