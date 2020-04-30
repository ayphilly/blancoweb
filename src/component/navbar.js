/* eslint-disable */
import React , {Component} from 'react';
import './navbar.css';
import brand from '../svg/blancow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wow.js' 
import ReactWOW from 'react-wow'

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
                            <li> <a href="#"> Home </a></li>
                            <li> <a href="#"> About Us </a></li>
                            <li> 
                                <a href="#" onClick={this.myfunction}> Shop <span className="wow bounceInUp"><FontAwesomeIcon icon={['fas', myIcon, ]}  />  </span> </a>
                                <ul className="dropdownNav" id="dropy">
                                    <li> <a href="#"> T-Sirts </a></li>
                                    <li> <a href="#"> Hoodie </a></li>
                                    <li> <a href="#"> Caps </a></li>
                                </ul>
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

