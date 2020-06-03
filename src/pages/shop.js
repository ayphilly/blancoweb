import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from '../component/posts';
import Pagination from '../component/pagination';
import './shop.css'
const Shop = ()=> {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect (()=> {
        const fetchDummy = async() => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts (res.data);
            setLoading(false);
        }
        fetchDummy();
    }, [] );
    console.log(posts);

    //Get current Page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    return (
    <div className="market">
        <h1 className="text-primary mb-3">My Blog</h1>
        <hr></hr>

        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
    )
    
}

export default Shop;