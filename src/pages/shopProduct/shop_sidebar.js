import React  from 'react';
import './shop.css';
//import {Preload} from './Preload';
import WOW from 'wow.js' 
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Sidebar extends React.Component {
    

    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();  
        this.accordion();      
    }

    accordion = () => {
        
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i=0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("activ");
                var panel = this.nextElementSibling;
               
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            })
        }
        
    }
    render () {
        //const {post} = this.props;
        /*if (loading) {
            return <Preload/>
        }*/
        return (
            
            <div className="shop-bar" >                           
            <div className="apparel">
                <h4>Apparel</h4>
                <ul>
                    <li>Jackets</li>
                    <li className="accordion">
                            <span className="dropwicon">
                                Sweaties
                                <FontAwesomeIcon icon={['fas', 'angle-down'] } style={{ color: 'black', marginTop:'5', marginLeft:'5'}} />
                            </span>                        
                    </li>
                    <ul className="apparel_drop" id="amadrop">
                            <li>Hoodies</li>
                            <li>Sweaties</li>
                            <li>Crewies</li>
                            <li>Bottoms</li>
                    </ul>
                    <li className="accordion">
                            <span className="dropwicon">
                                Roundies
                                <FontAwesomeIcon icon={['fas', 'angle-down'] } style={{ color: 'black', marginTop:'5', marginLeft:'5'}} />
                            </span>
                    </li>
                    <ul className="apparel_drop">
                        <li>Shorties</li>
                        <li>Longies</li>
                        <li>Crewies</li>                            
                    </ul>
                    <li>Bottoms</li>
                </ul>
            </div>
            <div className="apparel">
                <h4>Headwears</h4>
                <ul>
                    <li>Hats</li>                       
                    <li>Buckets</li>                       
                </ul>
            </div>
        </div>                
            
            
        )

    }
    
}

export default Sidebar