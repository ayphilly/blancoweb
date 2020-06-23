import React, {Component} from 'react'
import {About} from './about'
import './policy.css'
export class Policy extends Component {
    render () {
        return (
            <div className="policy-policy">
                <div className="aboutus-sv">
                    
                </div>
                <div className="policy">
                    <h2>Privacy Policy</h2>
                    <div className="policy-text">
                        <div className="pc-text">
                            <h4>What personal information do we collect from the people that visit our blog, website or app? </h4>
                            <p>
                                When ordering or registering on our site, as appropriate, you may be asked to enter your name,
                                email address, mailing address, phone number or other details to help you with your experience.
                            </p>                             
                        </div>
                        <div className="pc-text">
                            <h4>When do we collect information? </h4>
                            <p>
                                We collect information from you when you place an order, subscribe to a newsletter,
                                Open a Support Ticket or enter information on our site.
                            </p>                             
                        </div>

                        <div className="pc-text">
                            <h4>How do we use your information?</h4>
                            <p>
                                We may use the information we collect from you when you register, make a purchase, sign up for our newsletter,
                                respond to a survey or marketing communication, surf the website, or use certain other site features in the
                                following ways:We collect information from you when you place an order, subscribe to a newsletter,                   
                            </p> 
                            <ul>
                                <li>To personalize your experience and to allow us to deliver the type of content 
                                    and product offerings in which you are most interested.
                                </li>
                                <li>To improve our website in order to better serve you.</li>
                                <li>To allow us to better service you in responding to your customer service requests.</li>
                                <li>To quickly process your transactions.</li>
                                <li>To ask for ratings and reviews of services or products</li>
                                <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
                            </ul>                           
                        </div>
                        <div className="pc-text">
                            <h4>How do we protect your information? </h4>
                            <p>
                            We do not use vulnerability scanning and/or scanning to PCI standards.
                            An external PCI compliant payment gateway handles all CC transactions.
                            We do not use Malware Scanning.                       

                            Your personal information is contained behind secured networks and is only
                            accessible by a limited number of persons who have special access rights to such systems,
                            and are required to keep the information confidential. In addition, all sensitive/credit
                            information you supply is encrypted via Secure Socket Layer (SSL) technology.<br/>
                            We implement a variety of security measures when a user places an order enters, submits,
                            or accesses their information to maintain the safety of your personal information.

                            All transactions are processed through a gateway provider and are not stored or processed on our servers.
                            </p>                             
                        </div>

                        <div className="pc-text">
                            <h4>Third-party disclosure </h4>
                            <p>
                                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
                                unless we provide users with advance notice. This does not include website hosting partners and other 
                                parties who assist us in operating our website, conducting our business, or serving our users, so long as
                                those parties agree to keep this information confidential. We may also release information when it's release
                                is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property
                                or safety. 

                                However, non-personally identifiable visitor information may be provided to other parties for marketing, 
                                advertising, or other uses.
                            </p>                             
                        </div>

                        <div className="pc-text">
                            <h4>Fair Information Practices </h4>
                            <p>
                                The Fair Information Practices Principles form the backbone of privacy law in the United States and the
                                concepts they include have played a significant role in the development of data protection laws around
                                the globe. Understanding the Fair Information Practice Principles and how they should be implemented is
                                critical to comply with the various privacy laws that protect personal information.
                            </p>  
                            <h4>
                                In order to be in line with Fair Information Practices we will take the following responsive action,
                                should a data breach occur:
                            </h4>
                            <ul>
                                <li>We will notify you via email Within 7 business days</li>
                                <li>We will notify the users via in-site notification Within 7 business days</li>
                            </ul>
                            <p>
                                We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable
                                rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals
                                have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate
                                and/or prosecute non-compliance by data processors.
                            </p>                          
                        </div>

                        <div className="pc-text">
                            <h4>Contact us </h4>
                            <p>
                                If there are any questions regarding this privacy policy, you may contact us using the information below.                   
                            </p> 
                            <ul>
                                <li>
                                    +(234) 111 230 0000
                                </li>
                                <li>BlancoSentIt@gmail.com</li>
                                <li>Location Blanco Universe</li>
                                
                            </ul>                           
                        </div>
                    </div>
                </div>
                <About/>
            </div>
        )
    }
} 