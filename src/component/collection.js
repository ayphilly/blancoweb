import React , {Component} from 'react'
import './collection.css'
import {Collectionlist} from './collectionlist'
import Product1 from '../pictures/pr-1.jpg'
import Product2 from '../pictures/pr-2.jpg'
import Product3 from '../pictures/pr-3.jpg'
import Product4 from '../pictures/pr-4.jpg'
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
                imsrcc : Product3,
                text : 'CAPS'
            },
            {
                id : 4,
                imsrcc : Product4,
                text : 'BUCKETS'
            },
            {
                id : 5,
                imsrcc : Product3,
                text : 'R O W S'
            },
            {
                id : 6,
                imsrcc : Product4,
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