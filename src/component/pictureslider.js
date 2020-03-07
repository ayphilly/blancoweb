
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap';
import 'react-animated-css';
import 'popper.js';
import Product1 from '../pictures/7.png'
import Product2 from '../pictures/11.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import WOW from 'wow.js' 
export class PictureSlider extends Component {

    componentDidMount = () =>  {
       
        
    }
    state = {
        
        pictures : [
            {
                id : 1,
                src: Product1
            },    
            {
                id : 2,
                src: Product2
            } , 
            {
                id : 3,
                src: Product1
            }        
        ]

    }

    Picture_array = this.state.pictures.map( (value, index ) => {
        return (
           <Pictureslide
                key={index}
                data={value}  
           />
        );
    });

    render () {
        return (
            <div id="shopproduct" className="carousel slide" data-wow-duration="1s" data-ride="carousel">
                <ol className="carousel-indicators" id="shopproduct-ind">
                    <li data-target="#shopproduct" data-slide-to="0" className="active"></li>
                    <li data-target="#shopproduct" data-slide-to="1"></li>
                    <li data-target="#shopproduct" data-slide-to="2"></li>
                    <li data-target="#shopproduct" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Product2} alt="First slide"/>
                       
                    </div>
                    
                    {this.Picture_array}
                    
                </div>
                <a className="carousel-control-prev" href="#shopproduct" role="button" data-slide="prev" id="shopproduct-prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#shopproduct" role="button" data-slide="next" id="shopproduct-next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }

    
}

const Pictureslide = ({data} ) => {
    const imageSrc  = data;
    return (
        <div className="carousel-item ">
            <img className="d-block w-100" src={imageSrc.src} alt="Second slide"/>                                                                       
         </div>
    );        
}