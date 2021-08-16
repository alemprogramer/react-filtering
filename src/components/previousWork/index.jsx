import React from 'react';
import CommonHead from "../../components/headings/index";
import { Link } from "react-router-dom";


function PreviousWork({data}) {
    return (
        <section className="previous_work">
            <div className="container">
                <CommonHead title='Our Previous Work'/>
                <div className="row">
                    {data
                        .map((d,k) => <div key={k++} className="col-md-6 col-sm-6 col-12">
                            <div className="content position-relative">
                                <img src={d.image} className="img-fluid" alt="previous.jpg"/>
                                <div className="slogan position-absolute text-center text-capitalize">
                                    <h6>{d.title}</h6>
                                </div>
                            </div>
                        </div>)}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link
                            to='/portfolio'
                            className="mini_btn d-inline-block text-capitalize text-center">
                            <h5>view more
                            </h5>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreviousWork
