
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap';
import 'react-animated-css';
import 'popper.js';
import Slider0 from '../pictures/slider.jpg';
import Slider1 from '../pictures/slider1.jpg';
import Slider2 from '../pictures/slider2.jpg';
import VaderSim from '../pictures/webbb.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wow.js' 
export class Slider extends Component {

    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();
        
    }

    render () {
        return (
            <div id="carouselIndicators" className="carousel slide wow fadeInDown" data-wow-duration="1s" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Slider0} alt="First slide"/>
                        <div className="carousel-wordr">
                                <h5>Merch</h5>
                                <p>well crafted merchandise</p>
                                <div className="slider-icon">
                                    <FontAwesomeIcon icon={['fas', 'angle-double-down'] }  size="3x" />
                                </div>
                                 
                                <button type="button" className="btn btn-outline-light">SHOP</button>
                        </div>   
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src={Slider1} alt="Second slide"/>
                        <div className="carousel-word">
                                <h5>Merch</h5>
                                <p>well crafted merchandise</p>
                                <div className="slider-icon">
                                    <FontAwesomeIcon icon={['fas', 'angle-double-down'] }  size="3x" />
                                </div>
                                <button type="button" className="slider-btn btn btn-outline-light" >SHOP</button>
                        </div>                                               
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Slider2} alt="Third slide"/>
                        <div className="carousel-wordr">
                                <h5>Merch</h5>
                                <p>well crafted merchandise</p>
                                <div className="slider-icon">
                                    <FontAwesomeIcon icon={['fas', 'angle-double-down'] }  size="3x" />
                                </div>
                                <button type="button" className="btn btn-outline-light">SHOP</button>
                        </div>
                        
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src={VaderSim} alt="Fourth slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}