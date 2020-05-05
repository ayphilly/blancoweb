import React, {Component} from 'react';
import './register.css'
import WOW from 'wow.js' 
export class Register extends Component {
    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();
        
    }

    render () {
        return (
            <div className="container-fluid wow fadeInLeft">
                <div className ="register-form">
                
                <form>
                    <h3>
                        create new account 
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
                            <label for="inputNumber">PHONE NUMBER</label>
                            <input type="text" className="number" id="pnumber" placeholder="+234"></input>
                        </div>         
                    </div>
                    <div className="password-input">
                        <div className="pword">
                            <label for="password">PASSWORD</label>
                            <input type="text" className="password" name="password" id="pword" placeholder="Password"></input>
                        </div>
                        <div className="c-pword">
                            <label for="cpword">CONFIRM PASSWORD</label>
                            <input type="password" className="cpword" id="c-pword" placeholder="Confirm Password"></input>
                        </div>         
                    </div>
                    <div className="bottom">
                        <div className="c-box">
                        <span className="checkmark"><input type="checkbox"></input> SUBSCRIBE </span>
                        </div>
                        <button type="submit" className="button-create">CREATE</button>
                        <div className="login-link">
                            <a href="#" onClick={this.props.Close}>Already have an account ? Login here</a>                     
                        </div>
                    </div>
      
                </form>
                

            </div>
            </div>
            
        )
    }
}