import React from 'react';
import { SkeletonBlog } from "../skeleton/skeletonMain";
import "./bannerLoading.css";

export const LoadingBanner = ()=> {
        return (
            <section className="banner d-none d-sm-block d-xl-block d-lg-block d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="banner_content">
                                <SkeletonBlog effects='miniTitle text' />
                                <SkeletonBlog effects='title text' />
                          {/* <h1>{title} </h1> */}

                                <div className="blogger loader">
                                    <div className="imgs float-left">
                                        <SkeletonBlog effects='avatar' />
                                    </div>
                                    <SkeletonBlog effects='text' />
                                </div> 

                                <span className="text_area">
                                <SkeletonBlog effects='text' />
                                <SkeletonBlog effects='text' />                        
                                </span>
                                <div className="price_tag">
                                <SkeletonBlog effects='text' />                                
                                                                
                                    {/* <h3>$ {price}</h3>
                                    <p>per photo</p> */}
                                </div>
                                <span className='mini_btn d-inline-block text-capitalize text-center' > <SkeletonBlog effects='text' /> </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="banner_bg">
                                <SkeletonBlog effects='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default LoadingBanner
