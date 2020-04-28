import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import {Preload} from '../component/Preload'
import {ScrollTop} from '../component/scrolltop'
import {Navbar} from './navbar'
import {Slider} from './slider'
import {About} from './about'
import {ProductSlider} from './ProductSlider'
import {Collection} from './collection'
import {ShopProduct} from '../component/shop_product'
import {Footer} from './footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

library.add (fas, 
    fab,
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter);

export class Body extends Component {
    render () {
        return (
            <div className="main">
                <div>
                        <Navbar/>
                </div>
                
                <div>
                    <Slider/>
                    
                    
                    <About/>
                    
                    <Collection/>
                    <ProductSlider/>                  
                    <ShopProduct/> 
                    <ScrollTop/>                     
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}    