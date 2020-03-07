import React , {Component} from 'react';
import '../App.css';
import brand from '../svg/blanco.svg';
import WOW from 'wow.js';

export class Preload extends Component {
    componentDidMount ( ){
        const wow = new WOW();
        wow.init();
    }
    render () {
        return (
            <div className="preload-container">
                <div className="preload-brand">
                        <img src={brand} className="App-preload" alt="Brand"/>
                </div>
            </div>
        )
    }
}