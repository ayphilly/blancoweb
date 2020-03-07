import React , {Component} from 'react'
import '../App.css'
import {Collectproduct} from './collectproduct'


export class Collectionlist extends Component {
    list_prod = this.props.my_prod
    mylist = this.list_prod.map ((value, index)=> {
        return (
            <Collectproduct

                key={index}
                data={value}     
            />
        )
        
    });
    render () {
        return (
            <div className="clist-container">
                
                {this.mylist}
            </div>
        )
    }
}