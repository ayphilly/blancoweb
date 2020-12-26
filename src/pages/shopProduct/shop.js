
import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Posts from '../../component/posts'
import Sidebar from './shop_sidebar'
import './shop.css'
import loading1 from "../../svg/loading1.svg"
export default class Shop extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0,
            post:[],
            available:false
            
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    componentWillMount() {
        this.receivedData();
    }
    receivedData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                console.log(res.data)
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const post = slice;
                const postData = slice.map(pd => <React.Fragment>
                    <Posts post={pd}/>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    post,
                    postData,
                    available: true
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    
    
        
   
    render() {
        var x = 0;
        if (!this.state.available) {
            return (
                <div className ="load-container">
                    <div className="load-section">
                        <img src={loading1}/> 
                        <p> loading ...</p>
                    </div> 
                </div>
            )
        } else {
            return (
                <div className="shopy">
                    <div className="bar">
                        <Sidebar/>
                    </div>
                    <div className="shop-product">
                        <div className="select">
                            <select name="colors" id="colors">
                            <option value="volvo">Color</option>
                                <option value="Red">Red</option>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="pink">Pink</option>                            
                            </select>
    
                            <select name="sortby" id="sortby">
                                <option value="price">price</option>
                                <option value="hl">highest-lowest</option>
                                <option value="lh">lowest-highest</option>
                                <option value="audi">Audi</option>
                            </select>
    
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
    
                        </div>
                        <div className="prod">
                            {this.state.postData}
                        </div>
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            className="pagi"
                        />
                    </div>
                </div>
    
            )

        }
       
    }
}