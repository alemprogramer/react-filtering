import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import Data from "../product/data";
import Design from "./design";
import Summery from '../../components/order-summery/summery';

function Step02({ cPhoto }) {
    const {slug}=useParams();
    const product= Data.find(d=>d.slug===slug);
    const service = product.serviceCost;
    const rate = product.imagePrice;
    const link = product.slug;
    const photoCount=cPhoto.length;
    const price=(d)=>{

    };
    const [design, setDesign] = useState(0);

    useEffect(() => {
    }, [design])
    return (
        <section className="Purchase-Step-2">
            <section className="p_5_1">
                <div className="container">
                    <div className="price_texts">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="steps">
                                    <h6>Step 2 of 5</h6>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="titles">
                                    <h2>Select design style that reflects vibe of the property</h2>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="terms">
                                    <h6>Please choose the main direction of the style of your property</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-12">
                                <div className="row">
                                    {Design.map(k=>
                                    <div className="col-md-6 col-sm-6" key={k.id}>
                                        <div className="vibe">
                                                <input type="radio" value={k.price} checked={design === k.price ? true : false} id={`test${k.id}`} onChange={()=>setDesign(k.price)} name="radio-group"/>
                                            <label htmlFor={`test${k.id}`}>
                                                <span className="img_part">
                                                    <img src={k.img} className="img-fluid" alt="vibe.jpg"/>
                                                </span>
                                                <span className="vibe_info">
                                                    <h6>{k.title}</h6>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                            <Summery servicePrice={service} totalPic={photoCount} photoRate={rate} url={`/${link}/step-03` } calc={price}/>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default withRouter(Step02)
