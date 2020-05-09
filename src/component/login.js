import React, {Component} from 'react';
import './login.css'
import WOW from 'wow.js' 
export class Login extends Component {

    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();
        
    }

    render () {
        return (
            <div className="container-fluid wow fadeInLeft">
                <div className ="login-form">
                
                <form>
                    <h3>
                        Welcome, Sign in to your Blanco account 
                    </h3>
                    
                    <div className="sign-in">
                        <div className="mail">
                            <label for="Email">E-MAIL</label>
                            <input type="text" className="email" name="email" id="Email" placeholder="Email"></input>
                        </div>
                        <div className="pword">
                            <label for="password">PASSWORD</label>
                            <input type="text" className="password" name="password" id="pword" placeholder="Password"></input>
                        </div>         
                    </div>
                   
                    <div className="bottom">                        
                        <button type="submit" className="button-create">CREATE</button>
                        <div className="signin-link">
                            <a href="#" onClick={this.props.Open}>Don't have an account ? Register here</a>                     
                        </div>
                    </div>
      
                </form>
                

            </div>
            </div>
            
        )
    }
}