import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import Data from "../product/data";
import Summery from "../../components/order-summery/summery";


function Step01() {

    const [services, setServices] = useState(0);
    const [photoPrice, setPhotoPrice] = useState(0);
    // eslint-disable-next-line
    const [photos, setPhotos] = useState([]);
    const [PageLoading, isPageLoading] = useState(false);
    
    let {slug}=useParams();
    let product = Data.find(d => d.slug === slug);

    /* const imageData=(d)=>{
        const images=[...d];
        console.log([images]);
    }; */


    const push = (d) => {
        console.log(d);
    };
    
    useEffect(() => {
        isPageLoading(true);
        setServices(product.serviceCost);
        setPhotoPrice(product.imagePrice);
        setTimeout(() => {
            isPageLoading(false)
        }, 1000);
        // eslint-disable-next-line
    }, []);

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
                              
                            </div>
                                <Summery servicePrice={services} totalPic={photos.length} photoRate={photoPrice} url={`/${product.slug}/step-02`} calc={push} />
                            
                        </div>
                    </div>
                : 'loading...' } </div>
            </section>
        </section>

    )
}

export default withRouter(Step01)
