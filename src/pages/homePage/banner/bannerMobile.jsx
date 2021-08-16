import React, {Component} from 'react'

export class BannerMobile extends Component {
    render() {
        return (
            <section className="mobile_design">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner_bg">
                                <img
                                    className="img-fluid"
                                    src="/vendor/images/banner_banner_bg.jpg"
                                    alt="banner_banner_bg.jpg"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="banner_content">
                                <h1 className="big_text">Virtual Staging for Real Estate</h1>
                                <p className="text_area">We specialize in transforming photos of vacant properties
                                    into beautiful, virtually staged homes that sells faster and for top dollar.</p>
                                <a href={'/'} className="place_btn">Place Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BannerMobile
