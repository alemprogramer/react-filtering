import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export class BannerDesk extends Component {
    render() {
        const img = process.env.PUBLIC_URL + "/vendor/images/home_banner_bg1.png";
        return (
            <section
                className="banner position-relative">
                <div className="container">
                    <div
                        className="banner_content position-absolute"
                        title="Demo For ToolTip Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum ipsam nisi neque eum doloribus facere aperiam provident odit quidem!">
                        <h1 className="big_title">Virtual Staging for Real Estate</h1>
                        <p className="mini_text">We specialize in transforming photos of vacant
                            properties into beautiful, virtually staged homes that sells faster and for top
                            dollar.</p>
                        <a href="place-order.html" className="btn">Place Order</a>
                    </div>
                </div>
                <Carousel interval={1500} className="carousel slide position-absolute">
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src={img}
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src={img}
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src={img}
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src={img}
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section>
        )
    }
}

export default BannerDesk
