import React from 'react'

function Step02() {
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
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="vibe">
                                                <input type="radio" id="test1" name="radio-group"/>
                                                <label htmlFor="test1">
                                                    <span className="img_part">
                                                        <img src="images/vibe.jpg" className="img-fluid" alt="vibe.jpg"/>
                                                    </span>
                                                    <span className="vibe_info">
                                                        <h6>Modern and minimal (contemorary, hi tech)</h6>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="vibe">
                                                <input type="radio" id="test2" name="radio-group"/>
                                                <label htmlFor="test2">
                                                    <span className="img_part">
                                                        <img src="images/vibe.jpg" className="img-fluid" alt="vibe.jpg"/>
                                                    </span>
                                                    <span className="vibe_info">
                                                        <h6>Modern and minimal (contemorary, hi tech)</h6>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="vibe">
                                                <input type="radio" id="test3" name="radio-group"/>
                                                <label htmlFor="test3">
                                                    <span className="img_part">
                                                        <img src="images/vibe.jpg" className="img-fluid" alt="vibe.jpg"/>
                                                    </span>
                                                    <span className="vibe_info">
                                                        <h6>Modern and minimal (contemorary, hi tech)</h6>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="vibe">
                                                <input type="radio" id="test4" name="radio-group"/>
                                                <label htmlFor="test4">
                                                    <span className="img_part">
                                                        <img src="images/vibe.jpg" className="img-fluid" alt="vibe.jpg"/>
                                                    </span>
                                                    <span className="vibe_info">
                                                        <h6>Modern and minimal (contemorary, hi tech)</h6>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div
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

export default Step02
