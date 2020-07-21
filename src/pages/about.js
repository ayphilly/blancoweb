import React, {Component} from 'react';
import '../App.css';
import {typeAbout} from '../helper';
import TypeIt from "typeit";
//import WOW from 'wow.js';
export class About extends Component {

    componentDidMount = () => {
        typeAbout();
    }
    
    render () {
        return (
            <div className="lil-about">
                <div className="lil-about-main">            
                    <div className="lil-about-text">
                        <p className="element">
                        {/*" Setting The White Space With Each Design " <br/>*/} 
                                          
                        </p>   
                                 
                    </div>
            </div>
            </div>
            
        )
    }
}