import React, {Component} from 'react'
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export  class Footer extends Component {
    render () {
        const date = new Date();
        const year = date.getFullYear();
        return (
            <div className="footer">
                <div className="footer-container ">
                    <div className="footer-copy">
                        <p> Copyright © {year} - Blanco Inc - All rights reserved &#x1F49D;</p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li> <a href="#"> Privacy Policy </a></li>
                            <li> <a href="#"> Terms of Use </a></li>
                            <li> <a href="#"> Copyright Policy  </a></li>
                        </ul>
                    </div>
                    <div className="footer-brand">
                        <FontAwesomeIcon icon={['fab', 'instagram'] }  size="1x" className="footer-ins"/>
                        <FontAwesomeIcon icon={['fab', 'facebook-f'] }  size="1x" className="footer-fb" />
                        <FontAwesomeIcon icon={['fab', 'twitter'] }  size="1x" className="footer-tw"/>
                    </div>
                    
                    
                </div>

            </div>
        )
    }
}