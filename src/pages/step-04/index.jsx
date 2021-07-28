import React from 'react'

function step04() {
    return (
        <section className="step-4">
            <section className="p_5_1">
                <div className="container">
                    <div className="price_texts">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="steps">
                                    <h6>Step 4 of 5</h6>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="titles">
                                    <h2>Upload your files</h2>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="terms d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                    <h6>Please make sure you upload high quality photos (size greater than 1MB/
                                        3600x2400px)</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-12">
                                {/* change here*/}
                                <div className="step_1_box">
                                    <div className="file_box d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                        <h5>Drag &amp; drop your files here</h5>
                                        <h6>or</h6>
                                        <button className="btn">Add files</button>
                                    </div>
                                    <div className="file_box d-block d-sm-block d-md-none d-lg-none d-xl-none">
                                        <h5>Add floor plan or any extra material that might be useful</h5>
                                        <button className="btn">Add files</button>
                                    </div>
                                </div>
                                <div className="file_upload">
                                    <div className="documents">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 col-12">
                                                        {/* change here*/}
                                                        <div className="files position-relative">
                                                            <div className="img_part">
                                                                <img
                                                                    src="images/price-mini-image.png"
                                                                    className="img-fluid"
                                                                    alt="price-mini-image.png"/>
                                                            </div>
                                                            <div className="info_part">
                                                                <h5>Photo 1.jpg</h5>
                                                                <p>
                                                                    <span>
                                                                        1 MB
                                                                    </span>|
                                                                    <span>3600X2400px</span>
                                                                </p>
                                                            </div>
                                                            <a href="#" className="cancel_btn position-absolute">
                                                                <i className="fas fa-times"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-12">
                                                        {/* change here*/}
                                                        <div className="files position-relative">
                                                            <div className="img_part">
                                                                <img
                                                                    src="images/price-mini-image.png"
                                                                    className="img-fluid"
                                                                    alt="price-mini-image.png"/>
                                                            </div>
                                                            <div className="info_part">
                                                                <h5>Photo 2.jpg</h5>
                                                                <p>
                                                                    <span>
                                                                        1 MB
                                                                    </span>|
                                                                    <span>3600X2400px</span>
                                                                </p>
                                                            </div>
                                                            <a href="#" className="cancel_btn position-absolute">
                                                                <i className="fas fa-times"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-12">
                                                        {/* change here*/}
                                                        <div className="files position-relative">
                                                            <div className="img_part">
                                                                <img
                                                                    src="images/price-mini-image.png"
                                                                    className="img-fluid"
                                                                    alt="price-mini-image.png"/>
                                                            </div>
                                                            <div className="info_part">
                                                                <h5>Photo 3.jpg</h5>
                                                                <p>
                                                                    <span>
                                                                        1 MB
                                                                    </span>|
                                                                    <span>3600X2400px</span>
                                                                </p>
                                                            </div>
                                                            <a href="#" className="cancel_btn position-absolute">
                                                                <i className="fas fa-times"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-12">
                                                        {/* change here*/}
                                                        <div className="add files">
                                                            <a href="#">
                                                                <div className="add_img">
                                                                    <img src="images/add_more.png" className="img-fluid" alt="add_more.png"/>
                                                                </div>
                                                                <div className="add_text">
                                                                    <h6>Add More Files</h6>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="note_box">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Notes</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            defaultValue={""}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 p00 col-12">
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
                                                    <h5>Photos</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>4</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="summery_set bottom_line">
                                                <div className="name">
                                                    <h5>Amount</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>₹ 2000.00 x 3</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="summery_set bottom_line">
                                                <div className="name">
                                                    <h5>Add on amount</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>₹ 10.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="total_set">
                                                <div className="name">
                                                    <h5>Total Amount</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>₹ 8000.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="confirm_button">
                                    <button className="btn cancel float-left">
                                        Cancel
                                    </button>
                                    <button className="btn next float-left">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default step04
