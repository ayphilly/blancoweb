import React, {Component} from 'react';
import '../App.css';
import TypeIt from "typeit";
//import WOW from 'wow.js';
export class About extends Component {

    componentDidMount = () => {
        this.typing();
    }
    typing = () => {
        new TypeIt(".element", {
            speed: 50,
            startDelay: 900
          })
            .type("Do yo know that,", {delay: 300})
            .move(-11, {speed: 40, delay: 100})            
            .type('u')
            .move('END')
            .delete(22, {delay: 600})
            .type(".....", {delay: 300})
            .delete(6, {delay: 600})
            .type("It's more than roundie !", {delay: 300})
            .move(-9, {speed: 40, delay: 100})            
            .type('a ')
            .move('END')                        
            .go();
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