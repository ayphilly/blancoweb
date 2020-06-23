import React  from 'react';
import '../pages/shop.css';
//import {Preload} from './Preload';
import WOW from 'wow.js' 
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Sidebar extends React.Component {
    

    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();        
    }

    mtoggle = () => {
        var touch = document.getElementById('amadrop')
        touch.classList.toggle("dropactive");
        
    }
    render () {
        //const {post} = this.props;
        /*if (loading) {
            return <Preload/>
        }*/
        return (
            <div className="shop-bar" >
               <p>Sidebar</p>

               <div className="apparel">
                   <h4>Apparel</h4>
                   <ul>
                       <li>Jackets</li>
                       <li onClick={this.mtoggle}>
                         <span className="dropwicon">Roundies<FontAwesomeIcon icon={['fas', 'angle-down'] } style={{ color: 'black', marginTop:'5', marginLeft:'5'}} /></span>
                        
                        <ul className="apadrop" data-wow-offset="30" id="amadrop">
                            <li>Jackets</li>
                            <li>Roundies</li>
                            <li>Hoodies</li>
                            <li>Bottoms</li>
                        </ul>
                       </li>
                       <li>Hoodies</li>
                       <li>Bottoms</li>
                   </ul>
               </div>
            </div>
        )

    }
    
}

export default Sidebar