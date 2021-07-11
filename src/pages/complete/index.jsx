import React from 'react'

function Order() {
    return (
        <section className="Placed">
            <section className="p_5_1">
                <div className="container">
                    <div className="documents">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="file_box sucessed">
                                    <i className="fas fa-check"/>
                                    <h2>Your order has been placed successfully</h2>
                                    <h6>A confirmation mail has been sent to your mail id
                                        <span>
                                            guptashutosh007@gmail.com.</span>
                                    </h6>
                                    <a href="null.jsx" className="btn">Go to home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Order
