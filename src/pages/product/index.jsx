import React, {useState, useEffect} from 'react';
import {CommonHead} from "../../components/headings/CommonHead";
import Data, {Custom} from "./data";
import Product from "./product";

function Commerce() {
    const [services,
        setServices] = useState([]);
    useEffect(() => {
        setServices(Data);
    }, [])
    const [customs,
        setCustoms] = useState([]);
    useEffect(() => {
        setCustoms(Custom);
    }, [])
    return (
        <section className="pricing_1">
            <section className="partnership">
                <div className="container">
                    <CommonHead title='Select a service to place order'/> {/* Mini heading start
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
                        {services.map(d => <Product
                            key={d.id}
                            title={d.names}
                            price={d.imagePrice}
                            currency={d.symbol}
                            revision={d.revision}
                            minimum={d.minTime}
                            maximum={d.maxTime}
                            url={d.slug}
                            cover={d.thumbnaile}/>)}
                    </div>
                </div>
            </section>
            <section className="partnership">
                <div className="container">
                    {/* common heading start */}
                    <CommonHead title='Custom Priced Services'/> {/* common heading start */}
                    <div className="row partner_slider">
                        {customs.map(d => <Product
                            key={d.id}
                            title={d.names}
                            price={d.price}
                            currency={d.symbol}
                            revision={d.revision}
                            minimum={d.minTime}
                            maximum={d.maxTime}
                            url={d.slug}
                            cover={d.thumbnaile} />)}
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Commerce
