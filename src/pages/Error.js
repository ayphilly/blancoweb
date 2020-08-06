/* eslint-disable */

import React, {Component} from 'react';
//import error from '../svg/error.svg';
import './error.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {typing} from '../helper';
import Particles from 'react-particles-js';

export class Error extends Component {

    componentDidMount () {
        typing();
    }  
    
    
    render () {
        return (
            <div className="error">
                <div className="error-box">
                    {/* <div className="error-svg">
                        <img src={error} className="error-svg-im" alt="Brand"/>
                    </div> */}
                    <div className="error-text">
                        {/* <h3 > &#x1F625; SORRY <br></br>PAGE NOT FOUND!</h3> */}
                        <h2 className="element"></h2>
                        <Link className="error-link" to="/" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon className="lefty" icon={['fas', 'angle-double-left' ]} />
                            Home
                        </Link>
                    </div>
                </div>
                <Particles 
                    className="particles"
                    params={{ 
                        particles: { 
                            number: { 
                            value: 200, 
                            density: { 
                                enable: true, 
                                value_area: 3000, 
                            } 
                            }, 
                        }, 
                        interactivity:{
                            detect_on:"canvas",
                            events:{
                                onhover:{
                                    enable:true,
                                    mode:"repulse"
                                },
                                onclick:{
                                    enable:true,
                                    mode:"push"
                                },
                                resize:true
                            }
                        }
                    }} 
                />
            </div>
        )
    }
}