import React, {Component} from 'react';
import {Register} from '../../component/login/register';
import {Login} from '../../component/login/login';
import './sign-in.css'
export class SignIn extends Component {
    
    state = {
        clicked: true
    }
    OpenUp = (e) => {
        e.preventDefault();
        this.setState({
            clicked: false
        })
    }

    CloseUp = (e) => {
        e.preventDefault();
        this.setState({
            clicked: true
        })
    }

    render () {
        if (this.state.clicked) {
            return (
                <div className="container-fluid sig" id="page1">
                    <Login
                        Open={this.OpenUp}
                    />
                </div>
            )
        }else {
            return (
                <div className="container-fluid sig" id="page">
                    <Register
                        Close={this.CloseUp}
                    />                    
                </div>
            )

        }

    }
}