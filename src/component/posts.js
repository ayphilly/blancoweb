import React from 'react';
import '../App.css';
import {Preload} from './Preload';

const Posts = ({posts, loading}) => {
    if (loading) {
        return <Preload/>
    }
    return (
        <ul className="list-group mb-4 postee">
            
            {posts.map(post => (
                <li key={post.id} className="list-group-item lipost">
                    <span><strong>{post.id}</strong> ||  {post.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default Posts