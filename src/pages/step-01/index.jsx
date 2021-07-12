import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import Data from "../product/data";
// Dropzone
import Previews from "../../components/dropzone/index";

function Step01() {

    const [servicePrice, setServicePrice] = useState(0);
    const [photoPrice, setPhotoPrice] = useState(0);
    // eslint-disable-next-line
    const [photos, setPhotos] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [PageLoading, isPageLoading] = useState(false);
    const [summeryLoading, isSummeryLoading] = useState(false)
    
    let {slug}=useParams();
    let product = Data.find(d => d.slug === slug);

    const push=()=>{
        console.log('Next Clicked');
    }

    const imageData=(d)=>{
        const images=[...d];
        // setPhotos();
        console.log([images]);
    };
    
    useEffect(() => {
        isPageLoading(true);
        setServicePrice(product.serviceCost);
        setPhotoPrice(product.imagePrice);
        setTimeout(() => {
            isPageLoading(false)
        }, 1000);
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        isSummeryLoading(true);
        // setPhotos();
        setTotalPrice(Math.abs(servicePrice + (photoPrice * photos.length) ));
        isSummeryLoading(false);
        // eslint-disable-next-line
    }, [photos, totalPrice, servicePrice]);

    return (
        <section className="step-1">
            <section className="p_5_1">
                <div className="container">
                    <div className="price_texts">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="steps">
                                    <h6>Step 1 of 5</h6>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="titles">
                                    <h2>Upload your files</h2>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="terms">
                                    <h6>Please make sure you upload high quality photos (size greater than 1MB/
                                        3600x2400px)</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {PageLoading===false ? 
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-12">
                                    <Previews datas={imageData}/>
                               </div>
                                {summeryLoading === false ? <div
                                className="col-md-4 offset-sm-2 offset-md-0 offset-lg-0 offset-0 offset-xl-0 col-sm-8 p00 col-12">
                                <div className="summery_box">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="summery_title bottom_line">
                                                <h5>Order summary</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="summery_set">
                                                <div className="name">
                                                    <h5>Service Cost</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>{servicePrice}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="summery_set">
                                                <div className="name">
                                                    <h5>Photos</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>{photos}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="summery_set bottom_line">
                                                <div className="name">
                                                    <h5>Amount</h5>
                                                </div>
                                                <div className="price">
                                                        <h5> {photoPrice} x {photos}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="total_set">
                                                <div className="name">
                                                    <h5>Total Amount</h5>
                                                </div>
                                                <div className="price">
                                                        <h5>₹ {totalPrice === isNaN() ? '0' : totalPrice}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="confirm_button">
                                    <button className="btn cancel float-left">
                                        Cancel
                                    </button>
                                    {photos===0 ? <button className="btn cross next float-left">
                                        Next
                                        </button> : <button className="btn next float-left" onClick={push}>
                                            Next
                                        </button>}
                                    
                                </div>
                                </div> : 'Loading....'}
                            

                        </div>
                    </div>
                : 'loading...' } </div>
            </section>
        </section>

    )
}

export default withRouter(Step01)
