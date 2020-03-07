import React, {Component} from 'react';
import '../App.css';
//import WOW from 'wow.js';
export class About extends Component {

    render () {
        return (
            <div className="lil-about">
                <div className="lil-about-main">            
                <div className="lil-about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos <br/>
                        trud trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                    </p>                    
                </div>
                <div className="lil-about-btn">
                    <button className="btn btn-outline-dark btn-lg" >Read More</button>
                </div>
            </div>
            </div>
            
        )
    }
}