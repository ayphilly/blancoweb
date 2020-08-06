/* eslint-disable */

import React, {Component} from 'react';
import './register.css'
import { Link } from 'react-router-dom';
import WOW from 'wow.js' 
export class Register extends Component {
    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();
        this.reveal()
        
    }
    state = {
        reflink: ''

    }
    reveal = ()=> {
        let flink = this.props.Close;
    
        if (flink) {
            this.setState({ reflink : true  });
        }else {
            this.setState({ reflink : false  });
        }

    }
    
    
    render () {
            
        
        
    
        return (
            <div className="container-fluid wow fadeInLeft reg">
                <div className="register-form">
                
                <form>
                    <h3>
                        Welcome, <br/>
                        Create  your Blanco account 
                    </h3>
                    <div className="names">
                        <div className="first-name">
                            <label for="inputFirstName">FIRST NAME</label>
                            <input type="text" className="fname" id="fname" name="fname" placeholder="First Name"></input>
                        </div>
                        <div className="last-name">
                            <label for="inputLastName">LAST NAME</label>
                            <input type="text" className="lname" name="lname" id="lname" placeholder="Last Name"></input>
                        </div>
                        
                    </div>
                    <div className="contact">
                        <div className="mail">
                            <label for="Email">E-MAIL</label>
                            <input type="text" className="email" name="email" id="Email" placeholder="Email"></input>
                        </div>
                        <div className="phone-number">
                            <label for="number">PHONE NUMBER</label>
                            <input type="text" className="number" id="pnumber" placeholder="+234"></input>
                        </div>         
                    </div>
                    <div className="password-input">
                        <div className="pword">
                            <label for="password">PASSWORD</label>
                            <input type="text" className="password" name="password" id="pword" placeholder="Password"></input>
                        </div>
                        <div className="pword">
                            <label for="password">CONFIRM PASSWORD</label>
                            <input type="text" className="password" name="cpassword" id="pword" placeholder="Password"></input>
                        </div>                             
                    </div>
                    <div className="bottom">
                        <div className="c-box">
                        <span className="checkmark"><input type="checkbox"></input> SUBSCRIBE </span>
                        </div>
                        <button type="submit" className="button-create">CREATE</button>
                        <div className="login-link">
                           { this.state.reflink ? <a href="#" onClick={this.props.Close}>Already have an account ? Login here</a>
                              : <Link className="linkk" to="/login" style={{textDecoration:'none'}}>Already have an account ? Login here </Link>
                           }                         
                        </div>
                    </div>
      
                </form>
                

            </div>
            </div>
            
        )
    }
}