import React, {Component} from 'react';
//import error from '../svg/error.svg';
import error from '../svg/error-404.svg';
import './error.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class Error extends Component {
    render () {
        return (
            <div className="error">
                <div className="error-box">
                    <div className="error-svg">
                        <img src={error} className="error-svg-im" alt="Brand"/>
                    </div>
                    <div className="error-text">
                        <h3 > &#x1F625; SORRY <br></br>PAGE NOT FOUND!</h3>
                        <Link className="error-link" to="/" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon className="lefty" icon={['fas', 'angle-double-left' ]} />
                            HOME
                        </Link>

                    </div>
                </div>

            </div>
        )
    }
}