import React , {Component} from 'react'
import './collection.css'


export class Collectproduct extends Component {

    render () {
        const values = this.props.data;
        return (
            <div className="clist-cont">
                <div className="clist-product">
                    <div className="clist-ima">
                        <img  src={values.imsrcc}  alt="collection" />
                        <div className="clist-text">                   
                            <h3>{values.text}</h3>                                    
                        </div>
                    </div>
                    
                </div>                
            </div>
        )
    }
}