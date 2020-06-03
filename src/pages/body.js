import React, {Component} from 'react';

import '../App.css';

import {ScrollTop} from '../component/scrolltop'
import {Newsletter} from '../component/newsletter'

import {Slider} from '../component/slider'
import {About} from './about'

import {ProductSlider} from './ProductSlider'
import {Collection} from '../component/collection'

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
                <Slider/>   
                <About/>
                <Collection/>
                <ProductSlider/>                  
                <Newsletter/> 
                <ScrollTop/> 
            </div>
        )
    }
}    