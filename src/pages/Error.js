import React, {Component} from 'react';
//import error from '../svg/error.svg';
import error from '../svg/error.svg';
import './error.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TypeIt from "typeit";
export class Error extends Component {

    componentDidMount () {
        this.typing();
    }
    
    typing = () => {
        new TypeIt(".element", {
            speed: 50,
            startDelay: 900
          })
            .type("It's so dak in here,", {delay: 100})
            .move(-10, {speed: 25, delay: 100})            
            .type('r')
            .move('END')
            .delete(22, {delay: 600})
            .type("Torry Page Nos Found,", {delay: 100})
            .move(-7, {speed: 25, delay: 100})
            .delete(1)
            .type('t')
            .move('START')
            .move(1, {delay: 200})
            .delete(1)
            .type('S')
            .move('END')
            .delete(21, {delay: 600})
            .type('<em><strong> Error 404.</strong></em>')
            .go();
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

            </div>
        )
    }
}