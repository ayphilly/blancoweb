import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Preload} from './component/Preload'
import {Body} from './pages/body'
//import {Navbar} from './navbar'
//import {Slider} from './slider'
import {About} from './pages/about'
import {Error} from './pages/Error.js'
import {Register} from './component/register.js'
//import {ProductSlider} from './ProductSlider'
//import {Collection} from './collection'
import {ShopProduct} from './component/shop_product'
//import {Footer} from './footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
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

        setTimeout (( ) => {
            this.setState({
                loader : 1
            }) 
        }, 1000)

        clearTimeout();
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
                    <Switch>
                        <Route path="/" component={Body} exact />
                        <Route path="/register" component={Register} />
                        <Route path="/about" component={About} />
                        <Route path="/shop" component={ShopProduct} />
                        <Route path="/shop/:productid" component={ShopProduct} />
                        <Route component={Error} />
                    </Switch>
                    
                </main>
               
            )
        }
        
    }
}

export default App;