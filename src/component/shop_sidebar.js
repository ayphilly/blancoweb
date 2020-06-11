import React  from 'react';
import '../pages/shop.css';
import {Preload} from './Preload';

class Sidebar extends React.Component {
    
    
    render () {
        const {post} = this.props;
        /*if (loading) {
            return <Preload/>
        }*/
        return (
            <div className="shop-bar" >
               <p>Sidebar</p>
            </div>
        )

    }
    
}

export default Sidebar