import React, {Component} from 'react';
import './newsletter.css'
import WOW from 'wow.js' 
export class Newsletter extends Component {
    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();        
    }
    render () {
        return (
            <div className="container-fluid wow fadeInLeft">
                <div className ="newsletter-form">
                <h3>
                    SUBSCRIBE TO OUR NEWSLETTER 
                </h3>                
                <form>
                    
                    <div className="newsletter">
                        <div className="subscribe">                            
                            <input type="text" className="email-sub" id="email" name="email" placeholder="E-MAIL"></input>
                        </div>
                        <button type="submit" className="button-subscribe">SUBSCRIBE</button>
                    </div>
                </form>
                

            </div>
            </div>
            
        )
    }
}