import React, {Component} from 'react';
import {Register} from '../component/register';
import {Login} from '../component/login';
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
                <div className="container-fluid">
                    <Login
                        Open={this.OpenUp}
                    />
                </div>
            )
        }else {
            return (
                <div className="container-fluid">
                    <Register
                        Close={this.CloseUp}
                    />                    
                </div>
            )

        }

    }
}