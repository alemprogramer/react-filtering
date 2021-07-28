import React from 'react'
import {Link} from "react-router-dom";

function Product({
    title,
    price,
    currency,
    revision,
    minimum,
    maximum,
    url,
    cover
}) {
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="partner_slide">
                <div className="partner_img">
                    <img src={cover} alt="partner.jpg" className="img-fluid"/>
                </div>
                <div className="partner_text">
                    {/* this is mini heading */}
                    <div className="title text-center text-capitalize">
                        <h5>{title}</h5>
                    </div>
                    {/* mini heading ends here */}
                    <div className="text_part">
                        <div className="price_full">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="price_box tleft">
                                        <h6>Pricing</h6>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="price_box tright">
                                        <h6>
                                            <span>{currency} {price}
                                            </span> per photo</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price_full">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="price_box tleft">
                                        <h6>Rivisions</h6>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="price_box tright">
                                        <h6>
                                            {revision}
                                            free revisions
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price_full">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="price_box tleft">
                                        <h6>Turnaround time</h6>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="price_box tright">
                                        <h6>{minimum}-{maximum} hrs
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/${url}/step-01`} className="btn text-capitalize">Select</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
