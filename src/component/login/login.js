import React, {Component} from 'react';
import './login.css'
import WOW from 'wow.js' 
import { Link } from 'react-router-dom';
export class Login extends Component {

    componentDidMount = () =>  {
        const wow = new WOW();
        wow.init();
        this.reveal();
        
    }

    state = {
        reflink: ''

    }
    reveal = ()=> {
        let flink = this.props.Open;
    
        if (flink) {
            this.setState({ reflink : true  });
        }else {
            this.setState({ reflink : false  });
        }

    }

    render () {
        return (
            <div className="container-fluid wow fadeInLeft log">
                <div className="login-form">
                
                <form className="form-form">
                    <h3>
                        Welcome,<br/> Sign in to your Blanco account 
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
                            
                            { this.state.reflink ? <a href="#" onClick={this.props.Open}>Don't have an account ? Register here</a>
                              : <Link className="linkk" to="/register" style={{textDecoration:'none'}}>Don't have an account ? Register here </Link>
                           }      

                        </div>
                       
                    </div>
      
                </form>
                

            </div>
            </div>
            
        )
    }
}