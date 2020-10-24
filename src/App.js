import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import {Preload} from './component/preloader/Preload'
import {Body} from './pages/body'

//shop
import Shop from './pages/shopProduct/shop'
import {ShopProduct} from './pages/shopProduct/shop_product'

import {Cart} from './pages/cart/cart'
//policy
import {Policy} from './pages/policy'
//navbar
import {Navbar} from './component/navbar/navbar'
//import {Slider} from './slider'

//user
import {SignIn} from './pages/sign-in/sign-in'
import {Error} from './pages/Error.js'
import {Register} from './component/login/register.js'
import {Login} from './component/login/login.js'
//import {ProductSlider} from './ProductSlider'
//import {Collection} from './collection'

import {Footer} from './component/footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import {roundCursor} from './helper';

import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

library.add (fas, 
    fab,
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter);

class App extends Component {

    state = {
        loader : ''
    }    

    componentDidMount () {
        // roundCursor();
        
        setTimeout (( ) => {
            this.setState({
                loader : 1
            }) 
        }, 1000)

        clearTimeout();
        
    }

    cartCounter = (counter)=> {
        this.counter++
    }
    render () {
        if (this.state.loader === '') {
            return (
                <div>
                    <Preload/>    
                </div>
            )
        }

        else {
            return (
                
                <main>
                    <div className="app-class">
                        <Navbar/>
                        
                        <Switch>
                            <Route exact path="/" component={Body}  />
                            <Route path="/policy" component={Policy} /> 
                            <Route path="/shop" component={Shop} />                        
                            <Route path="/signin" component={SignIn} />
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/shopy" component={ShopProduct} />
                            <Route path="/cart" component={Cart} />
                            <Route component={Error} />
                        </Switch>
                        <Footer/>
                    </div>
                    
                </main>
            )
        }
        
    }
}

export default App;