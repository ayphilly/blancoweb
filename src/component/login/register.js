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
        firstnameValid : false,
        lastnameValid: false,
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
        
        let numberValid = this.state.numberValid;
        let lastnameValid = this.state.firstnameValid;
        let firstnameValid = this.state.lastnameValid;

        switch(fieldName) {
            case 'firstname':
                var patt = new RegExp(/^[a-zA-Z ]+$/)
                firstnameValid = patt.test(value);
                fieldValidationErrors.firstname = firstnameValid ? '' : 'firstname not valid'
                break;
            case 'lastname':
                var patt = new RegExp(/^[a-zA-Z ]+$/)
                lastnameValid = patt.test(value);
                fieldValidationErrors.lastname = lastnameValid ? '' : 'lastname not valid'
                break;
            case 'email':
                
                var patt = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                emailValid = patt.test(value);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            case 'number' :
                // numberValid : value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
                numberValid = value.length != 0;
                fieldValidationErrors.number = numberValid ? '' : 'number should not be empty'
                break;
            default:
                break;
        }
        this.setState({
            formErrors : fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            firstnameValid : firstnameValid,
            lastnameValid : lastnameValid,
            numberValid: numberValid

        }, this.validateForm)

    }
    validateForm = () => {
        this.setState({
            formValid : this.state.emailValid && this.state.passwordValid && this.state.firstnameValid && this.state.lastnameValid && this.state.numberValid
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(`Name submiited: ${JSON.stringify(this.state)}`);
        
      }

    handleUserInput = (e)=> {
        
        var name = e.target.name;
        var value = e.target.value;
        
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) })

    }
    
    
    render () {
            
        
        
    
        return (
            <div className="container-fluid wow fadeInLeft reg">
                <div className="register-form">
                
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h3>
                        Welcome, <br/>
                        Create  your Blanco account 
                    </h3>
                    <div className="names">
                        <div className="first-name">
                            <label for="inputFirstName">FIRST NAME</label>
                            <input type="text" className="fname" id="fname" name="firstname" placeholder="First Name" onChange={(event) => this.handleUserInput(event)}></input>
                            { this.state.formErrors.firstname && <p className="formerror"> {this.state.formErrors.firstname} </p> }
                        </div>
                        <div className="last-name">
                            <label for="inputLastName">LAST NAME</label>
                            <input type="text" className="lname" name="lastname" id="lname" placeholder="Last Name" onChange={(event) => this.handleUserInput(event)}></input>
                            { this.state.formErrors.lasttname && <p className="formerror"> {this.state.formErrors.firstname} </p> }
                        </div>
                        
                    </div>
                    <div className="contact">
                        <div className="mail">
                            <label for="Email">E-MAIL</label>
                            <input type="text" className="email" name="email" id="Email" placeholder="Email" onChange={(event) => this.handleUserInput(event)}></input>
                            { this.state.formErrors.email && <p className="formerror"> {this.state.formErrors.email} </p> }
                        </div>
                        <div className="phone-number">
                            <label for="number">PHONE NUMBER</label>
                            <input type="text" className="number" id="pnumber" name="number" placeholder="+234" onChange={(event) => this.handleUserInput(event)}></input>
                            { this.state.formErrors.number && <p className="formerror"> {this.state.formErrors.number} </p> }
                        </div>         
                    </div>
                    <div className="password-input">
                        <div className="pword">
                            <label for="password">PASSWORD</label>
                            <input type="password" className="password" name="password" id="pword" placeholder="Password" onChange={(event) => this.handleUserInput(event)}></input>
                            { this.state.formErrors.password && <p className="formerror"> {this.state.formErrors.password} </p> }
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
                        <button type="submit" className="button-create" >CREATE</button>
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