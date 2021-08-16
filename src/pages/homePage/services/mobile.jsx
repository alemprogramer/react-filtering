import React, {useState, useEffect} from 'react';
import CommonHead, {MiniHead} from "../../../components/headings/index";


function Mobile({ services}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(services);
        // eslint-disable-next-line
    }, []);
    return (
        <section
            className="services position-relative">
            <div className="container-fluid">
                <CommonHead title='Our Services'/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="service_sliders">
                        {data.map((nusrat,rizu)=>
                            <div key={rizu} className="serv_slide">
                                <div className="content">
                                    <div className="image">
                                        <img src={nusrat.image} alt="services" className="img-fluid"/>
                                    </div>
                                    <div className="texts">
                                        <MiniHead title={nusrat.title}/>
                                        <div className="text_part">
                                            <h6>{nusrat.text}</h6>
                                        </div>
                                        <a href={nusrat.link} className="mini_btn d-inline-block text-capitalize text-center">
                                            <h5>Learn More</h5>
                                            <i className="fas fa-long-arrow-alt-right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Mobile
