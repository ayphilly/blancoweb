
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
    state = {
        carousels : [
           
            {
                slider : Slider1,
                sliderHeader : "Shop",
                sliderText : "for your Tee"
            },
            {
                slider : Slider2,
                sliderHeader : "Shop",
                sliderText : "and for your Streetwear apparel"
            },
            {
                slider : VaderSim,
                sliderHeader : "Merch",
                sliderText : "well crafted merchandise"
            },

        ]
    }
    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();
        
    }

    mySliders = this.state.carousels.map((value, index ) => {
        return (
           <HomeSlider
                key={index}
                data={value}  
           />
        );
    });

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
                    <div className="carousel-item active sholder">
                        <img className="d-block w-100" src={Slider0} alt="First slide"/>
                        <div className="carousel-wordr">
                                {/* <h5>Shop</h5> */}
                                <p> Shop for your  graphic tee </p>
                                <div className="slider-icon">
                                    <FontAwesomeIcon icon={['fas', 'angle-double-down'] }  size="3x" />
                                </div>                                 
                                {/* <button type="button" className="btn btn-outline-light slider-button">SHOP</button> */}
                        </div>   
                    </div>
                    {this.mySliders.slice(1,3)}                   
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

const HomeSlider = ({data} ) => {
   
    return (
        <div className="carousel-item">
            <img className="d-block w-100" src={data.slider} alt="Third slide"/>
           { data.slider === VaderSim ? <div></div> : <div className="carousel-wordr">
                    {/* <h5>{data.sliderHeader}</h5> */}
                    <p>{data.sliderText}</p>
                    <div className="slider-icon">
                        <FontAwesomeIcon icon={['fas', 'angle-double-down'] }  size="3x" />
                    </div>
                    {/* <button type="button" className="btn btn-outline-light">SHOP</button> */}
            </div>}
            
        </div>
    );        
}