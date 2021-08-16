import React from 'react';
import CommonHead from "../../../components/headings/index";

function Agencies({data}) {
    
    return (
        <section className="agencies d-none d-md-block d-lg-block d-xl-block">
            <div className="container">
                <CommonHead title="Our trusted agencies"/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="logos">
                            <div className="row">
                                {data
                                    .map((s,k) => <div key={k++} className="col-md-2">
                                        <div className="sliding_parts">
                                            <img src={s.img} alt="logo.png" className="img-fluid"/>
                                        </div>
                                    </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agencies
