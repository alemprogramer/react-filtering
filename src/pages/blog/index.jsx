import React, {useState, useEffect} from 'react';
import Data, {tags} from "./data";

// Skeleton Design

import Blogs from "../../components/loader/blogLoader";
import LoadingBanner from '../../components/loader/banner';

function Blog() {

    const [blog,
        setBlog] = useState([]);

    // Used For Post Data Rendering
    useEffect(() => {
        setBlog(Data);
    }, []);

    return (
        <section className="blog">

            <LoadingBanner/>

            <section
                className="blog_parts d-none d-md-block d-sm-none d-lg-block d-xl-block">
                <div className="blog_options main-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <nav className="navbar filters navbar-expand-lg navbar-light">
                                    <span className="navbar-brand">Blog Categories</span>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav filter_options ml-auto mr-auto">
                                            <li className='nav-item'>
                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                    if (Data.length !== blog.length) {
                                                        setTimeout(() => {
                                                            setBlog(Data);
                                                            window.scrollTo({top: 650, left: 0});
                                                        }, 1000);
                                                    };
                                                }}
                                                    className="nav-link">All</button>
                                            </li>
                                            {tags.map(c => <li key={c.id} className='nav-item'>
                                                <button
                                                    type='button'
                                                    onClick={() => {}}
                                                    className="nav-link">{c.value}</button>
                                            </li>)}
                                        </ul>
                                        <div className="form-inline my-2 my-lg-0">
                                            <div className="form_sector options">
                                                <div className="input">
                                                    <h6>
                                                        Per Page
                                                    </h6>
                                                </div>
                                                <select className="styled">
                                                    <option value='5'>5</option>
                                                    <option value='15'>15</option>
                                                    <option value='25'>25</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-inline my-2 my-lg-0">
                                            <div className="form_sector options">
                                                <div className="input">
                                                    <h6>
                                                        Sort by
                                                    </h6>
                                                </div>
                                                <select className="styled">
                                                    <option>Select</option>
                                                    <option value='name'>Name</option>
                                                    <option value='time'>Time</option>
                                                    <option value='most-viewed'>Most Viewed</option>
                                                    <option value='most-commented'>Most Commented</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog_partitions">
                    <div className="container">
                            <div className="row">
                                <Blogs/> 
                            </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-4 col-12">

                                <div className="pagination_part">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Blog
