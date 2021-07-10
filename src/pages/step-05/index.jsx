import React from 'react'

function step04() {
    return (
        <section className="Purchase-Step-5">
            <section className="p_5_1">
                <div className="container">
                    <div className="price_texts">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="steps">
                                    <h6>Step 5 of 5</h6>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="titles">
                                    <h2>Fill your details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-12">
                                <div className="file_box">
                                    <form>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-row">
                                                <div className="form-group col-12 col-md-6 col-sm-6">
                                                    <label htmlFor="inputName">Name*</label>
                                                    <input type="text" className="form-control" id="inputName"/>
                                                </div>
                                                <div className="form-group col-12 col-md-6 col-sm-6">
                                                    <label htmlFor="inputEmail4">Email*</label>
                                                    <input type="email" className="form-control" id="inputEmail4"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-12 col-md-6 col-sm-6">
                                                    <label htmlFor="inputNum">Phone Number</label>
                                                    <input type="tel" className="form-control" id="inputNum"/>
                                                </div>
                                                <div className="form-group col-12 col-md-6 col-sm-6">
                                                    <label htmlFor="feet">Ceiling Height (in feet)*</label>
                                                    <input type="text" className="form-control" id="feet"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-12 col-md-12 col-sm-12">
                                                    <label htmlFor="inputCompany">Company Name</label>
                                                    <input type="text" className="form-control" id="inputCompany"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12 col-sm-12">
                                                    <label htmlFor="exampleFormControlTextarea1">Property Address*</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="exampleFormControlTextarea1"
                                                        defaultValue={""}/>
                                                </div>
                                            </div>
                                            <div className="form-group mb1 ml-1">
                                                <div className="form-check">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                    <label className="custom-control-label" htmlFor="customCheck1">
                                                        <p>By creating an account you accept to Virtual Decors condition of use and
                                                            <a href="#">
                                                                Privacy Notice</a>
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
