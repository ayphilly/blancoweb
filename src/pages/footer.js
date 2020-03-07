import React, {Component} from 'react'
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export  class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="footer-container ">
                    <div className="footer-brand">
                        <FontAwesomeIcon icon={['fab', 'instagram'] }  size="1x" className="footer-ins"/>
                        <FontAwesomeIcon icon={['fab', 'facebook'] }  size="1x" className="footer-fb" />
                        <FontAwesomeIcon icon={['fab', 'twitter'] }  size="1x" className="footer-tw"/>
                    </div>
                    <div className="footer-copy">
                        <p> © 2020 Blanco All rights reserved </p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li> <a href="#"> Home </a></li>
                            <li> <a href="#"> About Us </a></li>
                            <li> <a href="#"> Shop  </a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}