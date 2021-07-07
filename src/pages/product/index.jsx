import React from 'react';
import { CommonHead } from "../../components/headings/CommonHead";
import { Product, Custom } from "./data";
function index() {
    return (
        <section className="pricing_1">
            <section className="partnership">
                <div className="container">
                    <CommonHead title='Select a service to place order' />
                    {/* Mini heading start 
                    <div className="row d-block d-sm-none d-lg-none d-md-none d-xl-none">
                        <div className="col-12">
                            <div className="cmn_heading text-capitalize text-center">
                                <h3>
                                    our service
                                </h3>
                            </div>
                        </div>
                    </div>
                    Mini heading start */}
                    <div className="row partner_slider">
                        
                    </div>
                </div>
            </section>
            <section className="partnership">
                <div className="container">
                    {/* common heading start */}
                    <CommonHead title='Custom Priced Services' />
                    {/* common heading start */}
                    <div className="row partner_slider">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner_slide">
                                <div className="partner_img">
                                    <img src="images/partner.jpg" alt="partner.jpg" className="img-fluid"/>
                                </div>
                                <div className="partner_text">
                                    {/* this is mini heading */}
                                    <div className="title text-center text-capitalize">
                                        <h5>Virtual Home Staging</h5>
                                    </div>
                                    {/* mini heading ends here */}
                                    <div className="text_part">
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Pricing</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>
                                                            <span>₹ 2000
                                                            </span>per photo</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Rivisions</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>
                                                            3 free revisions
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Turnaround time</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>12-24 hrs
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="purchase-step-1.html" className="btn text-capitalize">Select</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner_slide">
                                <div className="partner_img">
                                    <img src="images/partner.jpg" alt="partner.jpg" className="img-fluid"/>
                                </div>
                                <div className="partner_text">
                                    {/* this is mini heading */}
                                    <div className="title text-center text-capitalize">
                                        <h5>Virtual Home Staging</h5>
                                    </div>
                                    {/* mini heading ends here */}
                                    <div className="text_part">
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Pricing</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>
                                                            <span>₹ 2000
                                                            </span>per photo</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Rivisions</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>
                                                            3 free revisions
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Turnaround time</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>12-24 hrs
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="purchase-step-1.html" className="btn text-capitalize">Select</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner_slide">
                                <div className="partner_img">
                                    <img src="images/partner.jpg" alt="partner.jpg" className="img-fluid"/>
                                </div>
                                <div className="partner_text">
                                    {/* this is mini heading */}
                                    <div className="title text-center text-capitalize">
                                        <h5>Virtual Home Staging</h5>
                                    </div>
                                    {/* mini heading ends here */}
                                    <div className="text_part">
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Pricing</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>
                                                            <span>₹ 2000
                                                            </span>per photo</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Rivisions</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>
                                                            3 free revisions
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_full">
                                            <div className="row">
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tleft">
                                                        <h6>Turnaround time</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6">
                                                    <div className="price_box tright">
                                                        <h6>12-24 hrs
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="purchase-step-1.html" className="btn text-capitalize">Select</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default index
