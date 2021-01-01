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
        reflink: '',
        firstname: '',
        lastname : '',
        number : '', 
        email : '',
        password : '',
        formErrors: {
            email: '',
            firstname : '',
            lastname : '',
            number : '',
            password: ''
        },
        emailValid: false,
        passwordValid: false,
        nameValid : false,
        formValid: false

    }
    reveal = ()=> {
        let flink = this.props.Close;
    
        if (flink) {
            this.setState({ reflink : true  });
        }else {
            this.setState({ reflink : false  });
        }

    }
    validateField = (fieldName, value) => {
        
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let nameValid = this.state.nameValid;
        let numberValid = this.state.numberValid;
        let lastnameValid = false;
        let firstnameValid = false;

        switch(fieldName) {
            case 'firstname':
                firstnameValid = value.match(/^[a-zA-Z ]+$/);
                fieldValidationErrors.fieldName = firstnameValid ? '' : 'firstname not valid'
                break;
            case 'lastname':
                lastnameValid = value.match(/^[a-zA-Z ]+$/);
                fieldValidationErrors.fieldName = lastnameValid ? '' : 'lastname not valid'
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.fieldName = emailValid ? '' : 'email is not valid'
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.fieldName = passwordValid ? '': ' is too short';
                break;
            case 'number' :
                // numberValid : value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
                numberValid = value.isEmpty();
                fieldValidationErrors.fieldName = numberValid ? '' : 'email should not be empty'
                break;
            default:
                
                break;
        }
        this.setState({
            formErrors : fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            nameValid : firstnameValid && lastnameValid,
            numberValid: numberValid

        }, this.validateForm)

    }
    validateForm = () => {
        this.setState({
            formValid : this.state.emailValid && this.state.passwordValid && this.state.nameValid && this.state.numberValid
        })
    }

    handleUserInput = (e)=> {
        var name = e.target.value;
        var value = e.target.value;
        
        this.setState({
            [name]: value
        }, this.validateField(name, value))

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
                            <input type="text" className="fname" id="fname" name="firstname" placeholder="First Name"></input>
                        </div>
                        <div className="last-name">
                            <label for="inputLastName">LAST NAME</label>
                            <input type="text" className="lname" name="lastname" id="lname" placeholder="Last Name"></input>
                        </div>
                        
                    </div>
                    <div className="contact">
                        <div className="mail">
                            <label for="Email">E-MAIL</label>
                            <input type="text" className="email" name="email" id="Email" placeholder="Email"></input>
                        </div>
                        <div className="phone-number">
                            <label for="number">PHONE NUMBER</label>
                            <input type="text" className="number" id="pnumber" name="number" placeholder="+234"></input>
                        </div>         
                    </div>
                    <div className="password-input">
                        <div className="pword">
                            <label for="password">PASSWORD</label>
                            <input type="text" className="password" name="password" id="pword" placeholder="Password"></input>
                        </div>
                        {/* <div className="pword">
                            <label for="password">CONFIRM PASSWORD</label>
                            <input type="text" className="password" name="cpassword" id="pword" placeholder="Password"></input>
                        </div>                              */}
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