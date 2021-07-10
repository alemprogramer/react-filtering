import React from 'react'

function step04() {
    return (
        <section className="Purchase-Step-7">
            <section className="p_5_1">
                <div className="container">
                    <div className="price_texts">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="steps">
                                    <h6>Step 6 of 7</h6>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="titles">
                                    <h2>Pay to place your order</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="file_box">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="payment_head">
                                                <h5>Payment Information</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    {/*=======================================================================================================================================Collapse Button =============================================================================================================================================*/}
                                                    <a
                                                        className="card-header"
                                                        type="button"
                                                        id="headingOne"
                                                        data-toggle="collapse"
                                                        data-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        Credit Card
                                                    </a>
                                                    {/*=======================================================================================================================================Collapse Button End =============================================================================================================================================*/}
                                                    <div
                                                        id="collapseOne"
                                                        className="collapse show"
                                                        aria-labelledby="headingOne"
                                                        data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="panel-body">
                                                                <form role="form">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group biggie">
                                                                                <label>Name on card</label>
                                                                                <input type="text" className="form-control" placeholder/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group biggie">
                                                                                <label>Card Number</label>
                                                                                <div className="input-group">
                                                                                    <input
                                                                                        type="tel"
                                                                                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                                                                        className="form-control"
                                                                                        placeholder/>
                                                                                    <span className="input-group-addon"><i className="fab fa-cc-mastercard"/></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-6">
                                                                            <div className="form-group">
                                                                                <label className="expire">Expiry Date</label>
                                                                                <input type="tel" className="form-control miki_box" placeholder="MM"/>
                                                                                <input type="tel" className="form-control miki_box" placeholder="YY"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-6 pull-right">
                                                                            <div className="form-group">
                                                                                <label className="cvv">CVV</label>
                                                                                <input type="tel" className="form-control mini_box" placeholder="CVV"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <button className="bttun btn cancel btn-block">Back</button>
                                                                        <button className="bttun btn btn-block">Pay ₹ 8010.00</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    {/*=======================================================================================================================================Collapse Button =============================================================================================================================================*/}
                                                    <a
                                                        className="card-header collapsed"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#collapseTwo"
                                                        id="headingTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                        Debit Card
                                                    </a>
                                                    {/*=======================================================================================================================================Collapse Button End =============================================================================================================================================*/}
                                                    <div
                                                        id="collapseTwo"
                                                        className="collapse"
                                                        aria-labelledby="headingTwo"
                                                        data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="panel-body">
                                                                <form role="form">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label>Name on card</label>
                                                                                <input type="text" className="form-control" placeholder/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label>Card Number</label>
                                                                                <div className="input-group">
                                                                                    <input
                                                                                        type="tel"
                                                                                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                                                                        className="form-control"
                                                                                        placeholder/>
                                                                                    <span className="input-group-addon"><i className="fab fa-cc-mastercard"/></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-6">
                                                                            <div className="form-group">
                                                                                <label className="expire">Expiry Date</label>
                                                                                <input type="tel" className="form-control miki_box" placeholder="MM"/>
                                                                                <input type="tel" className="form-control miki_box" placeholder="YY"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-6 pull-right">
                                                                            <div className="form-group">
                                                                                <label className="cvv">CVV</label>
                                                                                <input type="tel" className="form-control mini_box" placeholder="CVV"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <button className="bttun btn cancel btn-block">Back</button>
                                                                        <button className="bttun btn btn-block">Pay ₹ 8010.00</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    {/*=======================================================================================================================================Collapse Button =============================================================================================================================================*/}
                                                    <a
                                                        className="card-header collapsed"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#collapseThree"
                                                        id="headingThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                        Online Banking
                                                    </a>
                                                    {/*=======================================================================================================================================Collapse Button End =============================================================================================================================================*/}
                                                    <div
                                                        id="collapseThree"
                                                        className="collapse"
                                                        aria-labelledby="headingThree"
                                                        data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="panel-body">
                                                                <form role="form">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label>Name on card</label>
                                                                                <input type="text" className="form-control" placeholder/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label>Card Number</label>
                                                                                <div className="input-group">
                                                                                    <input
                                                                                        type="tel"
                                                                                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                                                                        className="form-control"
                                                                                        placeholder/>
                                                                                    <span className="input-group-addon"><i className="fab fa-cc-mastercard"/></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-6">
                                                                            <div className="form-group">
                                                                                <label className="expire">Expiry Date</label>
                                                                                <input type="tel" className="form-control miki_box" placeholder="MM"/>
                                                                                <input type="tel" className="form-control miki_box" placeholder="YY"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-6 pull-right">
                                                                            <div className="form-group">
                                                                                <label className="cvv">CVV</label>
                                                                                <input type="tel" className="form-control mini_box" placeholder="CVV"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <button className="bttun btn cancel btn-block">Back</button>
                                                                        <button className="bttun btn btn-block">Pay ₹ 8010.00</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    {/*=======================================================================================================================================Collapse Button =============================================================================================================================================*/}
                                                    <a
                                                        className="card-header collapsed"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#collapseFour"
                                                        id="headingFour"
                                                        aria-expanded="false"
                                                        aria-controls="collapseFour">
                                                        PayPal
                                                    </a>
                                                    {/*=======================================================================================================================================Collapse Button End =============================================================================================================================================*/}
                                                    <div
                                                        id="collapseFour"
                                                        className="collapse"
                                                        aria-labelledby="headingFour"
                                                        data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="panel-body">
                                                                <form role="form">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label>Name on card</label>
                                                                                <input type="text" className="form-control" placeholder/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label>Card Number</label>
                                                                                <div className="input-group">
                                                                                    <input
                                                                                        type="tel"
                                                                                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                                                                        className="form-control"
                                                                                        placeholder/>
                                                                                    <span className="input-group-addon"><i className="fab fa-cc-mastercard"/></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-6">
                                                                            <div className="form-group">
                                                                                <label className="expire">Expiry Date</label>
                                                                                <input type="tel" className="form-control miki_box" placeholder="MM"/>
                                                                                <input type="tel" className="form-control miki_box" placeholder="YY"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-6 pull-right">
                                                                            <div className="form-group">
                                                                                <label className="cvv">CVV</label>
                                                                                <input type="tel" className="form-control mini_box" placeholder="CVV"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <button className="bttun btn cancel btn-block">Back</button>
                                                                        <button className="bttun btn btn-block">Pay ₹ 8010.00</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="summery_box">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="summery_title bottom_line">
                                                <h5>Order summary</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="summery_set">
                                                <div className="name">
                                                    <h5>Photos</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>No photos added</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="summery_set bottom_line">
                                                <div className="name">
                                                    <h5>Amount</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>0.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="total_set">
                                                <div className="name">
                                                    <h5>Total Amount</h5>
                                                </div>
                                                <div className="price">
                                                    <h5>₹ 0.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="confirm_button">
                                    <h5>Do you have a promocode?
                                        <a href="#">
                                            Click here
                                        </a>
                                    </h5>
                                </div>
                                <div className="confirm_button">
                                    <form action="#">
                                        <input className="promo" type="text" name="promocode"/>
                                        <a href="#" className="apply" type="submit" name="apply">Apply</a>
                                    </form>
                                </div>
                                <div className="confirm_button">
                                    <h6>Promocode applied.</h6>
                                    <a href="#">
                                        Click here
                                    </a>
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
