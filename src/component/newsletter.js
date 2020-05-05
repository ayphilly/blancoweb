import React, {Component} from 'react';
import './newsletter.css'
export class Newsletter extends Component {
    render () {
        return (
            <div className="container-fluid">
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