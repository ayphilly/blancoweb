import React , {Component} from 'react'
import './collection.css'
import {Collectionlist} from './collectionlist'
import Product1 from '../pictures/Product1.jpg'
import Product2 from '../pictures/Product1.jpg'
//import Product3 from './pictures/7.png'

export class Collection extends Component {

    state = {
        collections : [
            {
                id : 1,
                imsrcc : Product1,
                text : 'ROUNDIES'
            },
            {
                id : 2,
                imsrcc : Product2,
                text : 'HOODIES'
            },
            {
                id : 3,
                imsrcc : Product2,
                text : 'CAPS'
            },
            {
                id : 4,
                imsrcc : Product2,
                text : 'BUCKETS'
            },
            {
                id : 5,
                imsrcc : Product2,
                text : 'R O W S'
            },
            {
                id : 6,
                imsrcc : Product2,
                text : 'R O W S'
            }
            
        ]
    } 
    render () {
        return (
            <div className="collection-container">
                <div className="collection-text">
                    <h3>COLLECTION LIST</h3>
                </div>
                <div className="collection-collection">
                    <Collectionlist
                        my_prod={this.state.collections}
                    />
                </div>
                
            </div>
        )
    }
}