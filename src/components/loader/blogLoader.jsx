import React from 'react';
import {SkeletonBlog} from "../skeleton/skeletonMain";
import './blogLoader.css';

const Blogs = () => {
    return (
        <div className="col-md-4 col-sm-4 col-12">
            <div className="partner_slide">
                <div className="partner_img">
                    <SkeletonBlog effects='image'/>
                </div>
                <div className="partner_text">

                    <div className="title text-center text-capitalize">
                        <SkeletonBlog effects='text mt-0'/>
                        <SkeletonBlog effects='text mb-0'/>
                    </div>

                    <div className="blogger">
                        <div className="imgs float-left">
                            <SkeletonBlog effects='avatar'/>
                        </div>
                        <SkeletonBlog effects='text name'/>
                        <SkeletonBlog effects='text date'/>

                    </div>
                    <div className="text_part">
                        <SkeletonBlog effects='text'/>
                        <SkeletonBlog effects='text'/>
                        <SkeletonBlog effects='text'/>
                    </div>
                    <span className="mini_btn  d-inline-block text-capitalize text-center">
                        <SkeletonBlog effects='text'/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Blogs
