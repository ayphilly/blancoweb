import React  from 'react';
import '../pages/shop.css';
import {Preload} from './Preload';

class Posts extends React.Component {
    
    
    render () {
        const {post} = this.props;
        /*if (loading) {
            return <Preload/>
        }*/
        return (
            <div className="mypost" >
               <p class="badge badge-danger ba">New</p>
                <img src={post.thumbnailUrl} className="th" alt=""/>
                <span><p className="post-title">{post.title}</p> </span>
                <hr></hr>
            </div>
        )

    }
    
}

export default Posts